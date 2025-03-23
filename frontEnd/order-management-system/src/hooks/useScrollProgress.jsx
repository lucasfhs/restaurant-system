import { useState, useEffect, useRef } from "react";

const useScrollProgress = () => {
  const [scrollY, setScrollY] = useState(0);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Atualiza a altura da navbar ao carregar
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Normaliza o valor entre 0 e 1
  const scrollProgress = Math.min(scrollY / navbarHeight, 1);

  return { scrollProgress, navbarRef };
};

export default useScrollProgress;
