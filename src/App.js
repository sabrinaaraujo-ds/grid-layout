import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing/Pricing";
import Profile from "./pages/Profile/Profile";
import Testimonials from "./pages/Testimonials/Testimonials";

import PageLayout from "./components/PageLayout/PageContainer";

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}
export default App;
