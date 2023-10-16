import Head from "next/head";
import Footer from "../footer/Footer";
import HeaderComponents from "../headerComponents";
import NavBarCT from "../navbarCT";

export default function Home({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://timviec365.vn/css/footer_new.css?v=2"
        />
      </Head>
      <HeaderComponents />
      
      <div>{children}</div>
      <Footer />
    </div>
  );
}
