import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import Generate from './pages/Generate.jsx';
import Results from './pages/Results.jsx';
import History from './pages/History.jsx';
import AgentLogs from './pages/AgentLogs.jsx';
import Settings from './pages/Settings.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Generate />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/results" element={<Results />} />
            <Route path="/history" element={<History />} />
            <Route path="/agent-logs" element={<AgentLogs />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;