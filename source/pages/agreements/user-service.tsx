import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container'
import Layout from '../../components/Layout';

const UserService: NextPage = () => {
  return (
    <Layout title="Saber0318 - 用户服务协议">
      <Container>
        <h2 className='pt-5 text-center font-weight-bold'>用户服务协议</h2>
        <div className='pb-5 '>
          <style jsx>{`
            div {
              line-height: 1.8;
            }
          `}</style>
          <p>更新日期：2022年04月22日</p>
          <p>生效日期：2022年04月22日</p>
          <p className='pt-3'>1.导言</p>
          <p className='pt-3'>本用户服务协议适用于本工作室研发的所有软件，您在阅读本声明后若不同意此声明中的任何条款，或对本声明存在质疑，请立刻停止使用我们的软件。若您已经开始或正在使用本软件，则表示您已阅读并同意本声明的所有条款的约定。</p>
          <p className='pt-3'>1、总则：您通过安装软件并使用软件提供的服务与功能即表示您已经同意与本工作室立本协议。本工作室可随时执行全权决定更改“条款”。如“条款”有任何变更，一经在公布后，立即自动生效。</p>
          <p className='pt-3'>2、一切因使用软件而引致的任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其所造成的损失（包括在非官方站点下载软件而感染病毒），软件概不负责，亦不承担任何法律责任。</p>
          <p className='pt-3'>3、用户对使用软件自行承担风险，我们不做任何形式的保证, 我们也不承担任何法律责任。</p>
          <p className='pt-3'>4、软件尊重并保护所有用户的个人隐私权，不会窃取任何用户的信息。</p>
          <p className='pt-3'>5、软件使用AGPL v3开源协议，任何单位或个人在没有本工作室授权的情况下对软件进行的二次开发，请开源。</p>
          <p className='pt-3'>6、本工作室对所有开发的或合作开发的产品拥有知识产权，著作权，版权和使用权，这些产品受到适用的知识产权、版权、商标、服务商标、专利或其他法律的保护。</p>
          <p className='pt-3'>7、任何公司或个人在网络上发布，传播我们软件的行为都是允许的，但因公司或个人传播软件可能造成的任何法律和刑事事件本工作室不负任何责任。</p>
        </div>
      </Container>
    </Layout>
  )
}

export default UserService
