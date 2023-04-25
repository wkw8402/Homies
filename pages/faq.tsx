import Head from 'next/head';
import Header from '../components/Header';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQ | Homies</title>
      </Head>
      <div className="bg-gradient-to-b from-purple-25 to-purple-50">
        <Header />
      </div>

      <div className="w-full h-20 bg-gradient-to-b from-purple-50 to-yellow-100"></div>

      <Faq />

      <Footer />
    </>
  );
};

export default FAQ;
