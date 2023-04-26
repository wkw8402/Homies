import { format } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Text from '../../components/notion/Text';
import { getDatabase, getPropertyText } from '../../lib/notion';

export const databaseId = process.env.NOTION_DATABASE_ID;

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Our Blog | Homies</title>
      </Head>
      <div className="bg-gradient-to-b from-purple-25 to-purple-50">
        <Header />

        <div className="px-4 py-24 sm:py-32 sm:px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Keep up to date with the latest articles, company updates, and
                more.
              </p>
              <div className="pt-10 mt-10 space-y-8 border-t border-gray-200">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col items-start justify-between max-w-xl"
                  >
                    <div className="flex items-center text-xs gap-x-4">
                      {post.properties['Date Published'].date && (
                        <p className="text-sm font-normal text-purple-600 mt-7 font-pj">
                          {format(
                            new Date(
                              post.properties['Date Published'].date.start +
                                ' 00:00:00'
                            ),
                            'MMMM dd, yyyy'
                          )}
                        </p>
                      )}
                      {/* <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a> */}
                    </div>
                    <div className="relative group">
                      <h3 className="mt-3 text-4xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link
                          href={`/blog/${getPropertyText(
                            post.properties.Slug
                          )}`}
                        >
                          <span className="absolute inset-0" />
                          <Text text={post.properties.Name.title} />
                        </Link>
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
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1000, // In seconds
  };
};