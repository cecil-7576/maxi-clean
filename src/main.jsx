import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactGA from 'react-ga4';

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  const promptEvent = e;
  const installButton = document.createElement('button');
  installButton.textContent = 'Install App';
  installButton.className = 'fixed bottom-6 left-6 bg-[#013BC7] text-white p-2 rounded';
  installButton.onclick = () => promptEvent.prompt();
  document.body.appendChild(installButton);
});

ReactGA.initialize('G-ZZW2TKRVXE');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
