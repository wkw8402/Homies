import { format } from 'date-fns';
import Head from 'next/head';
import { Fragment } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Text from '../../components/notion/Text';
import { getBlocks, getDatabase, getPropertyText } from '../../lib/notion';
import { databaseId } from './index';

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p className="mt-6 text-base font-normal leading-7 text-purple-700 whitespace-pre-line font-pj">
          <Text text={value.rich_text} />
        </p>
      );
    case 'quote':
      return (
        <blockquote className="pl-5 mt-8 border-l-2 border-purple-900">
          <p className="text-lg italic font-medium text-purple-900 font-pj">
            <Text text={value.rich_text} />
          </p>
        </blockquote>
      );
    case 'heading_1':
      return (
        <h2 className="mt-12 text-3xl font-bold text-purple-900 font-pj">
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_2':
      return (
        <h2 className="mt-12 text-3xl font-bold text-purple-900 font-pj">
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <Text text={value.rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="pl-5 mt-1 text-base font-normal leading-7 text-purple-700 list-disc list-outside">
          <Text text={value.rich_text} />
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption =
        value.caption && value.caption[0] ? value.caption[0].plain_text : '';
      return (
        <div className="relative mt-8">
          <div className="absolute -inset-2">
            <div
              className="w-full h-full mx-auto opacity-30 blur-lg filter"
              // style="background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
            ></div>
          </div>

          <figure>
            <img className="relative rounded-xl" src={src} alt={caption} />
            {caption && <figcaption>{caption}</figcaption>}
          </figure>
        </div>
      );
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported field' : type
      })`;
  }
};

export default function Post({ post, blocks }) {
  if (!post || !blocks) {
    return <div />;
  }

  const title = post.properties.Name.title[0].plain_text;

  return (
    <>
      <Head>
        <title>{`${title} | Homies`}</title>
        <meta name="og:title" content={`${title} | Homies`} />
        <meta
          name="og:description"
          content="Keep up to date with the latest articles, company updates, and more."
        />
      </Head>
      <div className="bg-gradient-to-b from-purple-25 to-purple-50">
        <Header />
        <article className="py-12 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto xl:max-w-4xl">
              <p className="text-sm font-bold tracking-widest text-purple-400 uppercase font-pj">
                Blog
              </p>
              <h1 className="text-3xl font-bold text-purple-900 mt-7 sm:text-4xl xl:text-5xl font-pj">
                {post.properties.Name.title[0].plain_text}
              </h1>
              {post.properties['Date Published'].date && (
                <p className="text-sm font-normal text-purple-600 mt-7 font-pj">
                  {format(
                    new Date(
                      post.properties['Date Published'].date.start + ' 00:00:00'
                    ),
                    'MMMM dd, yyyy'
                  )}
                </p>
              )}

              <div className="mt-10">
                <svg
                  className="w-auto h-4 text-purple-300"
                  width="172"
                  height="16"
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  />
                </svg>
              </div>

              <div className="mt-10">
                {blocks.map((block) => (
                  <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100"></div>

      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map(
      (post: any) => `/blog/${getPropertyText(post.properties.Slug)}`
    ),
    // fallback: true,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const pages = await getDatabase(databaseId);
  const post = pages.find(
    (post: any) => getPropertyText(post.properties.Slug) === slug
  );

  if (!post) {
    return {
      props: {},
      notFound: true,
    };
  }

  const blocks: any = await getBlocks(post.id);

  if (!blocks.length) {
    return {
      props: {},
      notFound: true,
    };
  }

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-post-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      post,
      blocks: blocksWithChildren,
    },
    revalidate: 1000,
  };
};
