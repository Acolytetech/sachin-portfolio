import React from 'react';
import './App.css';
import { useEffect,useState } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

import {Home,About,Navbar,Teams,ContactUs,Footer,Testimonialslider,Portfolio,Projects} from './component';
import Loader from './component/loader/Loader';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Page load hone ke baad loader ko hide karne ka logic
      setTimeout(() => {
          setLoading(false);
      }, 2000); // Yahan par 2 seconds delay diya hai, aap isse adjust kar sakte hain
  }, []);
  return (
    <div>
    {loading ? (
        <Loader/>  // Loader component dikhega jab tak loading true hai
    ) : (
      <div className="App">
      <Navbar/>
      <Home />
      <About />
      
      <Projects />
      <Portfolio/>
      <Teams/>
      <Testimonialslider />
      <ContactUs />
      <Footer />
    </div>
    )}
</div>
   
  );
}

export default App;
