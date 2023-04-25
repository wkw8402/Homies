import Head from 'next/head';
import AboutTeam from '../components/AboutTeam';
import CallToAction from '../components/CallToAction';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import HomeFeaturesBlocks from '../components/HomeFeaturesBlocks';
import Programs from '../components/Programs';

const Home = () => {
  return (
    <>
      <Head>
        <title>California's First Life-Sharing Program | Homies</title>
      </Head>
      <div className="bg-gradient-to-b from-purple-25 to-purple-50">
        <Header />

        <HeroHome />
      </div>

      <div className="w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100"></div>

      <HomeFeaturesBlocks />

      <AboutTeam />

      <Programs />

      <Faq home={true} />

      <CallToAction />

      <Footer />
    </>
  );
};

export default Home;
