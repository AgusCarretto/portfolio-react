import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


//Lo que hace este componente, es mandar hacia arriba al cambiar de pagina el scroll. Entonces no arrancar de la mitad o donde sea.