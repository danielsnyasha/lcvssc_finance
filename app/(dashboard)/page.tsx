'use client'

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const accountsQuery = useGetAccounts();

  return (
    <div>
     {accountsQuery.data?.map((account)=> (
      <div key= {account.id}>
        {account.name}

      </div>
     ))}
    </div>
   
  );
}
