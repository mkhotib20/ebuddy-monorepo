"use client";

import useProfileState from '@/hooks/useProfileState';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const ProtectedLayout = ({children}: PropsWithChildren<unknown>) => {
  const { userData } = useProfileState();

  if(!userData?.id) redirect("/login");

  return <>{children}</>
}

export default ProtectedLayout