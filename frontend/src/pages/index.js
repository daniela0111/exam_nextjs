// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <>
      <Head>
        <title>Comwell</title>
        <meta name="description" content="Your website description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <BookingForm />
      </main>
    </>
  );
};

export default Home;