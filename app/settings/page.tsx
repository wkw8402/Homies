import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '../../lib/prismadb';
import { User } from '@prisma/client';

import React from "react";
import Settings from "./Settings"

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect('/');
    }
    const user = await prisma.user.findUnique({
        where: {
          id: session?.user?.id,
        },
    });
    console.log(user);

    return (
        <>
            <Settings user={user}/>
        </>
    )
} 