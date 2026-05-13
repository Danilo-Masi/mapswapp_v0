import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/AppContext.tsx';
import App from './App.tsx'
// CSS
import './index.css';
import "leaflet/dist/leaflet.css";
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <>
      <App />
      <Toaster position='top-center'/>
    </>
  </AppProvider>

)
