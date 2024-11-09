import React from 'react';
import './App.css';


import {Home,About,Navbar,Teams,ContactUs,Footer,Testimonialslider,Portfolio,Projects} from './component';
function App() {
  return (
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
  );
}

export default App;
