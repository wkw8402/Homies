import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

// const font = fetch(new URL('../../assets/TYPEWR__.ttf', import.meta.url)).then(
//   (res) => res.arrayBuffer()
// );

export default async function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>

    const hasTitle = searchParams.has('title');

    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : '';
    return new ImageResponse(
      (
        // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
        //   <div
        //     style={{
        //       height: '100%',
        //       width: '100%',
        //       display: 'flex',
        //       flexDirection: 'column',
        //       alignItems: 'center',
        //       justifyContent: 'center',
        //       backgroundColor: 'white',
        //     }}
        //   >
        //     <div tw="flex flex-col flex-1 w-full border-8 border-white sm:h-48 xl:h-52 bg-purple-50 bg-gradient-to-b from-purple-100 to-yellow-100">
        //       <img
        //         alt=""
        //         width={300}
        //         src={'https://www.meethomies.com/images/logo.png'}
        //       />
        //       <div tw="text-[100px] font-sans">Our Blog</div>
        //     </div>
        //   </div>

        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            background:
              'linear-gradient(to bottom, rgb(240, 235, 254), rgb(254, 247, 231))',
          }}
          tw="bg-purple-50"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img
              alt="Vercel"
              src={'https://www.meethomies.com/images/logo.png'}
              style={{ margin: '0 30px' }}
              width={400}
            />
          </div>

          <div
            style={{
              fontSize: 60,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              color: 'black',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.3,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(
      `
${e.message}
`
    );

    return;

    new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
