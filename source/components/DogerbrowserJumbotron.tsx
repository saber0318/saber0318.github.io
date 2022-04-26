import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from './DogerbrowserJumbotron.module.css'

const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      <Container className="p-4">
        <Row>
          <Col >
            <h1 className="display-4 text-light d-md-none text-center">二狗浏览器</h1>
            <h1 className="display-4 text-light d-none d-md-block">二狗浏览器</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead mt-2 text-light d-md-none text-center">一个用 WebView 构建的安卓浏览器，适用于 android | 鸿蒙 操作系统。</p>
            <p className="lead mt-2 text-light d-none d-md-block">一个用 WebView 构建的安卓浏览器，适用于 android | 鸿蒙 操作系统。</p>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5 mt-5">
        <Row className="p-4" >
          <Col
            className='bg-light border-radius-1rem p-4 position-relative'
            lg="6"
            md="12"
            sm="12"
            xs="12">
            <Row className="pl-2">
              <Col className="margin-top--50">
                <div className='d-md-none text-center'>
                  <Image src="/doger-browser-logo_123_123.png" alt="logo" fluid width={100} height={100} />
                </div>
                <div className='d-none d-md-block'>
                  <Image src="/doger-browser-logo_123_123.png" alt="logo" fluid width={100} height={100} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="lead font-weight-bold mt-3 col-sm-center d-md-none text-center">开源、 无广告</p>
                <p className="lead font-weight-bold mt-3 col-sm-center d-none d-md-block">开源、 无广告</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='d-md-none text-center'>
                  <a className="btn btn-danger mt-3 mb-3" rel="noopener noreferrer" href ="https://github.com/saber0318" target="_blank">下载浏览器</a>
                </div>
                <div className='d-none d-md-block'>
                  <a className="btn btn-danger mt-3 mb-3" rel="noopener noreferrer" href ="https://github.com/saber0318" target="_blank">下载浏览器</a>
                </div>
              </Col>
            </Row>
            {/* 114 234 */}
            <Image className='position-absolute top-70 right-30 translate-middle-y d-none d-md-block' src="/doger-browser_setting_152_312.png" alt="logo" fluid width={152} height={312} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Jumbotron
