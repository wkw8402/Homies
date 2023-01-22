import { getProviders, signIn, signOut, useSession } from 'next-auth/react';

export default function SignIn({ providers }) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        Hello, {session.user.email ?? session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
