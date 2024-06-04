import { Hono } from "hono";
import { db } from "@/db/drizzle";
import { createId } from '@paralleldrive/cuid2';
import { eq } from 'drizzle-orm';
import { accounts, insertAccountSchema } from "@/db/schema";
import { HTTPException } from 'hono/http-exception';
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";

const app = new Hono()
  .get('/',
    clerkMiddleware(),
    async (c) => {
      const auth = getAuth(c);

      if (!auth?.userId) {
        throw new HTTPException(401, {
          res: c.json({ error: "Unauthorized" }, 401)
        });
      }

      const data = await db
        .select({
          id: accounts.id,
          name: accounts.name,
        })
        .from(accounts)
        .where(eq(accounts.userId, auth.userId));
      return c.json({ data });
    })
  .post('/',
    clerkMiddleware(),
    zValidator('json', insertAccountSchema.pick({
      name: true,
    })),
    async (c) => {
      const auth = getAuth(c);
      const values = c.req.valid("json");

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      const uniqueId = createId();

      const [data] = await db.insert(accounts).values({
        id: uniqueId,
        userId: auth.userId,
        ...values,
      }).returning();

      return c.json({ data });
    }
  );

export default app;
