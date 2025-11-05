import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import SearchResultsPage from './pages/searchResultsPage/SearchResultsPage';
import NotFound from './pages/notfound/NotFound';
import MainLayout from './layouts/MainLayout';
import ThemeProvider from './context/ThemeProvider';
import ReviewBookingPage from './pages/reviewbookingpage/ReviewBookingPage';
import PaymentPage from './pages/paymentpage/PaymentPage';
import CounterProvider from './context/CounterProvider';
import SuccessPage from './pages/successpage/SuccessPage';
import TestComponent from './components/TestComponent';
import TicketIdProvider from './context/TicketIdProvider';
import './App.css';

function App() {
  return (
    <CounterProvider>
      <ThemeProvider>
        <TicketIdProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="search" element={<SearchResultsPage />} />
              <Route path="review" element={<ReviewBookingPage />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="success" element={<SuccessPage />} />
              <Route path="test" element={<TestComponent />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </TicketIdProvider>
      </ThemeProvider>
    </CounterProvider>
  );
}

export default App;
