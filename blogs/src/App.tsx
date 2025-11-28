import Header from "./components/header/Header";
import HomePage from "./pages/homePage";
import BlogPage from "./pages/BlogPage";
import { Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className="min-h-screen w-full flex flex-col bg-gray-50">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <div className="mt-[60px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:title" element={<BlogPage />} />
          </Routes>
        </div>
      </div>
    </SearchProvider>
  );
}

export default App;
