import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchAccounts = async () => {
    const response = await fetch("/api/accounts"); // Adjust the URL if necessary
    if (!response.ok) {
        throw new Error("Failed to get accounts");
    }
    return response.json();
};

const TestComponent = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["accounts"],
        queryFn: fetchAccounts,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {data.map((account: any) => (
                <div key={account.id}>{account.name}</div>
            ))}
        </div>
    );
};

export default TestComponent;
