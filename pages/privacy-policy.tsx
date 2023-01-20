import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Homies</title>
      </Head>
      <div className="bg-gradient-to-b from-purple-25 to-purple-50">
        <Header />

        <PrivacyPolicyContent />
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
