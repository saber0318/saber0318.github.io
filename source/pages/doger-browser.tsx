import type { NextPage } from 'next';
import Layout from '../components/Layout';
import DogerbrowserJumbotron from '../components/DogerbrowserJumbotron';

const Home: NextPage = () => {
  return (
    <Layout title="Saber0318 - 二狗浏览器">
      <DogerbrowserJumbotron />
    </Layout>
  )
}

export default Home
