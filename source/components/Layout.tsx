import React, { ReactNode } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import styles from './Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const router = useRouter()
  return (
    <div className={styles.root}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container fluid>
            <Navbar.Brand onClick={() => {router.push('/')}}>
                <div className={styles.headerLogo}>
                  Saber 0318
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className={cn({[styles.headerLink]: true, [styles.headerLinkActive]: router.asPath === '/'})} onClick={() => {router.push('/')}}>首页</Nav.Link>
                <Nav.Link className={cn({[styles.headerLink]: true, [styles.headerLinkActive]: router.asPath === '/doger-browser'})} onClick={() => {router.push('/doger-browser')}}>二狗浏览器</Nav.Link>
                <Nav.Link className={cn({[styles.headerLink]: true, [styles.headerLinkActive]: router.asPath === '/about'})} onClick={() => {router.push('/about')}}>关于我们</Nav.Link>
              </Nav>
              <Nav className='ms-auto'>
                <Nav.Link className={styles.headerLink} href="https://github.com/saber0318" target='_blank'>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Github</Tooltip>}
                  >
                    <svg width={20} height={20} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                  </OverlayTrigger>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className={styles.main}>
        <Container fluid className={styles.container}>
          {children}
        </Container>
      </main>
      <footer className="bg-dark p-3">
        <Container>
          <Row className="justify-content-center text-light">
            <Col 
              className="text-center"
              lg={{ span: 2, order: "first" }}
              md={{ span: 3, order: "first" }}
              sm={{ span: 12, order: "last" }}
              xs={{ span: 12, order: "last" }}>
              <small className={styles.footText}>©2022 Saber 0318 </small>
            </Col>
            <Col className="d-flex justify-content-around">
              <small className={cn({[styles.footLink]: true, [styles.footLinkActive]: router.asPath === '/agreements/user-service'})} onClick={() => router.push('/agreements/user-service')}>用户服务协议</small>
              <small className={cn({[styles.footLink]: true, [styles.footLinkActive]: router.asPath === '/agreements/privacy-policy'})} onClick={() => router.push('/agreements/privacy-policy')}>隐私政策</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
