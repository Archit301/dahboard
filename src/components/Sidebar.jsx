import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
       <div className="w-64 h-screen bg-gray-800 text-white">
      <nav className="p-4">
        <ul>
          <li className="mb-4"><Link to="/" className="block p-2 rounded hover:bg-gray-700">Dashboard</Link></li>
          <li className="mb-4"><Link to="/tables" className="block p-2 rounded hover:bg-gray-700">Tables</Link></li>
          <li className="mb-4"><Link to="/charts" className="block p-2 rounded hover:bg-gray-700">Charts</Link></li>
          <li className="mb-4"><Link to="/calendar" className="block p-2 rounded hover:bg-gray-700">Calendar</Link></li>
          <li><Link to="/kanban" className="block p-2 rounded hover:bg-gray-700">Kanban</Link></li>
        </ul>
      </nav>  
    </div>
  )
}

export default Sidebar
