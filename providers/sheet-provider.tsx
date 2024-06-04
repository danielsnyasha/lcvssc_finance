'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { NewAccountSheet } from '../features/components/new-account-sheet';

interface SheetProviderProps {
  children: ReactNode;
}

export const SheetProvider: React.FC<SheetProviderProps> = ({ children }) => {
  // State to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  // Effect to update the state once the component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Conditionally render the component only if it is mounted
  if (!isMounted) return null;

  return (
    <>
      {children}
      <NewAccountSheet />
    </>
  );
};
