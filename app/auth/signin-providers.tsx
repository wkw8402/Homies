import { Provider } from 'next-auth/providers';
import { signIn, signOut, useSession } from 'next-auth/react';
import Loading from '../../components/Loading';

export default function SignIn({ providers }) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  if (loading) {
    return <Loading />;
  }

  if (session) {
    return (
      <div>
        Hello, {session?.user?.email ?? session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        {Object.values(providers).map((provider: Provider) => (
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

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }
