import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container'
import Layout from '../components/Layout';
import LearningJumbotron from '../components/LearningJumbotron';

const Home: NextPage = () => {
  return (
    <Layout title="Saber0318 - 关于">
      <LearningJumbotron />
      <div className='pt-5'>
        <Container>
          <h1 className="display-6 font-weight-bold">联系我们</h1>
          <div className='pt-5 pb-5'>
            <div className='text-wrap text-break font-size-15em'>
              <span className='text-black-50'>邮箱</span> <span className='px-2 text-dark'>saber0318@outlook.com</span>
            </div>
            <div className='text-wrap text-break font-size-15em pt-5'>
              <span className='text-black-50'>Github</span> <span className='px-2 text-dark'>github.com/saber0318</span>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Home
