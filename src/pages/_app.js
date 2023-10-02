import Footer from '@/components/footer/Footer'
import Header from '@/components/header/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <link rel="stylesheet" href="https://timviec365.vn/css/footer_new.css?v=2"/>
    <Footer/>
    </>
  )
}
