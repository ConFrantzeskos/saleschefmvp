
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeSecurity } from './lib/security'

// Initialize security checks before rendering the app
initializeSecurity();

createRoot(document.getElementById("root")!).render(<App />);
