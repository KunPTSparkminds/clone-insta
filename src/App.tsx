import "antd/dist/reset.css";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SideBarLayout from "./components/Layouts/SideBarLayout";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";
import "./styles/app.scss";

function Search() {
  return <div>search</div>;
}

function App() {
  return (
    <>
      <Loading />
      <Routes>
        <Route path="/*" element={<SideBarLayout />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
