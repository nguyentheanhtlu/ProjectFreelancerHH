import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderLogin from "../headerlogin";
import Header from "../header/header";

const HeaderComponents = () => {
  const [headerLogin, setHeaderLogin] = useState(false);
  const [header, setHeader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("cong-ty")) {
      setHeaderLogin(true);
    } else if (router.pathname.includes("freelancer")) {
      setHeaderLogin(true);
    } else {
      setHeaderLogin(false);
    }
  }, [router.pathname]);

  return <div>{headerLogin ? <HeaderLogin /> : <Header />}</div>;
};

export default HeaderComponents;
