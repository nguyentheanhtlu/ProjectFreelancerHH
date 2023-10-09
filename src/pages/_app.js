import Footer from "@/components/footer/Footer";
import HeaderComponents from "@/components/headerComponents";
import Home from "@/components/layout/home";
import Layout from "@/components/layout/layout";
import NavbarComponents from "@/components/navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();


  return (
    <div>
      {router.pathname.includes("trangchu") ? (
        <Home>
          <Component {...pageProps} />
        </Home>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </div>
  );
}
