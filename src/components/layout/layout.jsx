import Footer from "../footer/Footer";
import HeaderComponents from "../headerComponents";
import NavBarCT from "../navbarCT";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://timviec365.vn/css/footer_new.css?v=2"
        />
      </Head>
      <HeaderComponents />
      <div
        style={{
          width: "95%",
          margin: "auto",
          maxWidth: "1275px",
        }}
      >
        <NavBarCT />
        {children}
      </div>

      <Footer />
    </div>
  );
}
