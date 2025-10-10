import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import SearchResultsPage from "./pages/searchResultsPage/SearchResultsPage";
import NotFound from "./pages/notfound/NotFound";
import MainLayout from "./layouts/MainLayout";
import ThemeProvider from "./context/ThemeProvider";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
