import Head from 'next/head';
import ContactInformation from '../components/ContactInformation';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Roommate from '../components/Roommate';

const RoommatePage = () => {
  return (
    <>
      <Head>
        <title>I Have My Roommate | Homies</title>
      </Head>
      <div className="bg-gradient-to-b from-purple-25 to-purple-50">
        <Header />

        <Roommate />
      </div>

      <div className="w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100"></div>

      <ContactInformation />

      <Footer />
    </>
  );
};

export default RoommatePage;