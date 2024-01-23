import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { authOptions } from '@/lib/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { MainNav } from './components/main-nav';
import { UserNav } from './components/user-nav';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex items-center h-16 px-4">
            <MainNav className="mx-6" />
            <div className="flex items-center ml-auto space-x-4">
              <UserNav session={session} />
            </div>
          </div>
        </div>
        <div className="flex-1 p-8 pt-6 space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
