import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import Partner from "./pages/Partner";
import NewInvoice from "./pages/NewInvoice";

function App() {
  return (
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="invoices" element={<Invoice />} />
            <Route path="new-invoice" element={<NewInvoice />} />
            <Route path="partners" element={<Partner />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
