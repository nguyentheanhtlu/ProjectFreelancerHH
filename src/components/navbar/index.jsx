import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBarCT from "../navbarCT";


const NavbarComponents = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("cong-ty")) {
        setNavbar(true);
    } else {
        setNavbar(false);
    }
  }, [router.pathname]);

  return <div>{navbar ? <NavBarCT /> : null}</div>;
};

export default NavbarComponents;
