import Head from 'next/head';
import ContactInformation from '../components/ContactInformation';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Roommate from '../components/Roommate';
import CallToAction from '../components/CallToAction';

const RoommatePage = () => {
  return (
    <>
      <Head>
        <title>Finding My Supportive Roommate | Homies</title>
      </Head>
      <div className="bg-gradient-to-b from-purple-25 to-purple-50">
        <Header />

        <Roommate />

        <div className="w-full h-40 bg-gradient-to-b from-purple-50 to-yellow-100"></div>
        <CallToAction />
      </div>

      <ContactInformation />

      <Footer />
    </>
  );
};

export default RoommatePage;
