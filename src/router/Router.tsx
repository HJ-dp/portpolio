import { Route, Routes } from "react-router-dom";
import { Page_URL } from "./Page_URL";

// 레이아웃
import DefaultLayout from "../layouts/DefaultLayout";

// 페이지
import MainPage from "../components/pages/MainPage";
import ErrorPage from "../components/pages/ErrorPage";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path={Page_URL.Main} element={<MainPage />}></Route>
        <Route path={Page_URL.Error404} element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
