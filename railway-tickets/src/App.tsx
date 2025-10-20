import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import SearchResultsPage from "./pages/searchResultsPage/SearchResultsPage";
import NotFound from "./pages/notfound/NotFound";
import MainLayout from "./layouts/MainLayout";
import ThemeProvider from "./context/ThemeProvider";
import ReviewBookingPage from "./pages/reviewbookingpage/ReviewBookingPage";
import PaymentPage from "./pages/paymentpage/PaymentPage";
import CounterProvider from "./context/CounterProvider";
import "./App.css";

function App() {
  return (
    <CounterProvider>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="review" element={<ReviewBookingPage/>}/>
          <Route path="payment" element={<PaymentPage/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
    </CounterProvider>
  );
}

export default App;
