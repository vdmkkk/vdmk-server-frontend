import './App.css';
import HomePage from './pages/HomePage';
import MonitorPage from './pages/MonitorPage';
import { Routes, Route, Navigate } from "react-router-dom"

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="monitor" element={<MonitorPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
