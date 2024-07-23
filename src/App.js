import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import router from './routes';
import { CursorProvider } from './components/CursorProvider';
import CustomCursor from './components/cursor';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: false,    // Animations should happen multiple times
    });

    return () => {
      Aos.refresh(); // Ensure animations refresh on component unmount
    };
  }, []);

  return (
    <CursorProvider>
      <CustomCursor />
      <RouterProvider router={router} />
    </CursorProvider>
  );
}

export default App;
