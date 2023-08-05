import { Route, Routes } from "react-router-dom";

import { routes } from "./menuRouter";
import Layout from "../components/layout/Layout";
import PageErrorContainer from "../components/pages/pageError/PageErrorContainer";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<PageErrorContainer />} />
    </Routes>
  );
};

export default AppRouter;
