import Header from "./Header";
import MainContent from "./MainConntent";
import Footer from "./Footer";
import ShopCart from "./ShopCart";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container">
     <Header />
     <Router>
        <Routes>
          <Route path="/" element={<MainContent />}/>
          <Route path="/cart" element={<ShopCart />}/>
        </Routes>
     </Router>
     <Footer />
    </div>
  )
}

export default App
