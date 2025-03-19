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
      <div className="mx-4 flex flex-col min-h-screen h-auto">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
