import { LoginButton } from './login-buttons';

async function getProviders() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/providers`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch providers');
  }

  return res.json();
}

export default async function SignIn() {
  const resp: ReturnType<typeof getProviders> = (await getProviders()) || {};

  return (
    <div className="flex flex-col items-center min-h-screen p-24">
      {Object.values(resp).map((provider) => {
        return (
          <div key={provider.id} className="[&:not(:first-child)]:mt-4">
            <LoginButton auth={provider} />
          </div>
        );
      })}
    </div>
  );
}
