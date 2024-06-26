'use client'

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const {onOpen} = useNewAccount();
  const accountsQuery = useGetAccounts();

  return (
    <div>
      <Button onClick={onOpen}>
        Add an account
      </Button>
     {accountsQuery.data?.map((account)=> (
      <div key= {account.id}>
        {account.name}

      </div>
     ))}
    </div>
   
  );
}
