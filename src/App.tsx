import Header from "./components/Header";
import HomePage from "./HomePage";
import GalleryPage from "./GalleryPage";
import ShopPage from "./ShopPage";
import ContactPage from "./ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProjectsPage from "./ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-rows-[auto_minmax(0px,_1fr)_auto] min-h-screen h-auto p-4 pb-0 max-w-[100rem] m-auto overflow-hidden 2xl:overflow-visible">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
