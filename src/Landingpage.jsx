import { Layout } from 'antd'

import React from 'react'
import Navbar from './comp/navbar/Navbar'
import Landing_page from './comp/landing_page/Landing_page'
import About from './comp/About/About'
import Fotter from './comp/Fotter/Fotter'

const { Header, Content , Footer} = Layout
export default function Landingpage() {
  return (
    <div>
         <Layout>
        <Header style={{
          position:"fixed",
          width :'100vw',
          top : 0,
          zIndex : '100'
        }}>
          <Navbar />
        </Header>
        <Content>
          <Landing_page />
        </Content>
        <About />
        <Fotter />
      </Layout>
    </div>
  )
}
