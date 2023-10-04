import Footer from '@/components/footer/Footer'
import HeaderComponents from '@/components/headerComponents'
import NavbarComponents from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return (
    <>
    <HeaderComponents/>
    <NavbarComponents/>
    <Component {...pageProps} />
    <link rel="stylesheet" href="https://timviec365.vn/css/footer_new.css?v=2"/>
    <Footer/>
    </>
  )
}
