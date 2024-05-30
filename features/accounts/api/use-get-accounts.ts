import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

interface Account {
    // Define the structure of an account according to your API response
    id: string;
    name: string;
    // Add other fields as needed
}

export const useGetAccounts = () => {
    const query = useQuery<Account[], Error>({
        queryKey: ["accounts"],
        queryFn: async (): Promise<Account[]> => {
            const response = await client.api.accounts.$get();

            if (!response.ok) {
                throw new Error("Failed to get accounts");
            }

            const { data } = await response.json();
            return data;
        },
    });

    return query;
}
