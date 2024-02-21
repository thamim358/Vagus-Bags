import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './component/Loader.jsx';
import Layout from './component/Layoyt/Layout.jsx';
import Licensing from './component/TermAndConditions/Licencing.jsx';
import Terms from './component/TermAndConditions/Terms.jsx';
import PrivacyPolicy from "./component/TermAndConditions/Privacypolicy.jsx";
import CookiesPolicy from "./component/TermAndConditions/Cookies.jsx";
import ScrollToTop from './component/ScrollToTop.jsx';
import ContactUs from './component/Contact us/Contact.jsx';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader/> // Show the loader while content is loading
      ) : (
        <Router>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout  />} />
            <Route path="/license" element={<Licensing />} />
            <Route path="/cookiespolicy" element={<CookiesPolicy />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/terms&conditions" element={<Terms />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          {/* <Footers/> */}
        </Router>
       )}
    </>
  );
}

export default App;
