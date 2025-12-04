import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioPage } from "./components/PortfolioPage";
import { TokenDetailPage } from "./components/TokenDetailPage";
import { P2PTransactionPage } from "./components/P2PTransactionPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/token-detail" element={<TokenDetailPage />} />
        <Route path="/p2p-transaction" element={<P2PTransactionPage />} />
      </Routes>
    </Router>
  );
}