import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/AppContext.tsx';
import App from './App.tsx'
// CSS
import './index.css';
import "leaflet/dist/leaflet.css";
import { Toaster } from 'sonner';
import { AuthProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <AppProvider>
      <>
        <App />
        <Toaster position='top-center' />
      </>
    </AppProvider>
  </AuthProvider>
)
