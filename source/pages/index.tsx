import type { NextPage } from 'next';
import Carousel from 'react-bootstrap/Carousel'
import Layout from '../components/Layout';
import DogerbrowserJumbotron from '../components/DogerbrowserJumbotron';
// import LearningJumbotron from '../components/LearningJumbotron';

const Home: NextPage = () => {
  return (
    <Layout title="Saber0318 - 首页">
      <Carousel>
      <Carousel.Item>
          <DogerbrowserJumbotron />
        </Carousel.Item>
        {/* <Carousel.Item>
          <LearningJumbotron />
        </Carousel.Item> */}
      </Carousel>
    </Layout>
  )
}

export default Home
