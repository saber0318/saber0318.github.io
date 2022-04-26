import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container'
import Layout from '../../components/Layout';

const PrivacyPolicy: NextPage = () => {
  return (
    <Layout title="Saber0318 - 隐私政策">
      <Container>
        <h2 className='pt-5 text-center font-weight-bold'>隐私政策</h2>
        <div className='pb-5 '>
          <style jsx>{`
            div {
              line-height: 1.8;
            }
          `}</style>
          <p>更新日期：2022年04月22日</p>
          <p>生效日期：2022年04月22日</p>
          <p className='pt-3'>1.导言</p>
          <p className='pt-3'>我们深知个人信息对你的重要性，我们将按照法律法规的规定，保护你的个人信息及隐私安全。我们制定本隐私政策并特别提示：希望你在使用软件及相关服务前仔细阅读并理解本隐私政策，以便作出适当的选择。</p>
          <p className='pt-3'>1、我们不会收集和使用任何个人信息</p>
          <p className='pt-3'>2、我们不会管理你的个人信息。因此请注意您的个人隐私可能存在泄露的风险</p>
          <p className='pt-3'>3、任何内容浏览和搜索仅保留在本地，并且可以删除。</p>
          <p className='pt-3'>4、当你使用软件及相关服务时，我们可能会使用Cookie。</p>
          <p className='pt-3'>5、软件本身没有任何广告。</p>
          <p className='pt-3'>6、如果你对个人信息保护问题有疑问或建议，可发送邮件至saber0318@outlook.com。</p>
        </div>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicy
