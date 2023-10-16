import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBarCT from "../navbarCT";
import NavBarFLC from "../navbarFreelancer";

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

  return <div>{navbar ? <NavBarCT /> : <NavBarFLC/>}</div>;
};

export default NavbarComponents;
