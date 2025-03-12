// App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

// Importa automaticamente todas as rotas do diretório "routes"
const routeModules = import.meta.glob("./routes/*.jsx");

const App = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const loadRoutes = async () => {
      const loadedRoutes = [];
      for (const path in routeModules) {
        const module = await routeModules[path]();
        if (module.routes) {
          loadedRoutes.push(...module.routes);
        }
      }
      setRoutes(loadedRoutes);
    };

    loadRoutes();
  }, []);

  return (
    <div>
      <NavBar></NavBar>

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
