import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Text from '../components/notion/Text';
import { getDatabase } from '../lib/notion';

export const databaseId = process.env.NOTION_FAQ_DATABASE_ID;

export default function Home({ questions }) {
  return (
    <>
      <Head>
        <title>Updates | Homies</title>
        <meta name="og:title" content="Blog | Homies" />
      </Head>
      <div className="bg-gradient-to-b from-purple-25 to-purple-50">
        <Header />

        <div className="px-4 py-24 sm:py-32 sm:px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Updates
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Keep up to date with the latest articles, company updates, and
                more.
              </p>
              <div className="pt-10 mt-10 space-y-8 border-t border-gray-200">
                {questions.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col items-start justify-between max-w-xl"
                  >
                    <div className="flex items-center text-xs gap-x-4">
                      {/* <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a> */}
                    </div>
                    <div className="relative group">
                      <h3 className="mt-3 text-2xl font-semibold leading-snug text-gray-900 sm:text-4xl group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        <Text text={post.properties.Question.title} />
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                        {post.properties.Description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100"></div>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      questions: database,
    },
    revalidate: 60 * 20, // In seconds
  };
};
