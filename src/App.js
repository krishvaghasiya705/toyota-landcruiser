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
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        Aos.init({
          offset: 200,
          duration: 1000
        });
      } else if (width > 600 && width <= 900) {
        Aos.init({
          offset: 300,
          duration: 1200
        });
      } else {
        Aos.init();
      }
      Aos.refresh(); // Refresh AOS animations
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
