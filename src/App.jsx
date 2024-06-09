import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ThemeSwitcher from './components/ThemeSwitcher';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeSwitcher> {/* Wrap your entire application with ThemeSwitcher */}
      <Router>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-grow overflow-hidden">
            <Sidebar />
            <main className="flex-grow p-4 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeSwitcher>
    </>
  )
}

export default App
