import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Landing } from './pages/Landing';
import { Portfolio } from './pages/Portfolio';
import { Marketplace } from './pages/Marketplace';
import { LiveStream } from './pages/LiveStream';
import { Dashboard } from './pages/Dashboard';
import { Collective } from './pages/Collective';
import { Events } from './pages/Events';

// No more placeholders needed!

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gcr8-dark text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/live" element={<LiveStream />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/events" element={<Events />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/community" element={<Collective />} />
            </Routes>
          </main>
          
          <footer className="py-12 px-4 border-t border-gray-100 dark:border-white/5 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-xl font-display font-bold">G'Cr8.</div>
              <div className="flex gap-8 text-sm text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:text-gcr8-purple-600 transition-colors">Twitter</a>
                <a href="#" className="hover:text-gcr8-purple-600 transition-colors">Instagram</a>
                <a href="#" className="hover:text-gcr8-purple-600 transition-colors">Discord</a>
              </div>
              <p className="text-sm text-gray-400">© 2026 G'Cr8 Platform. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
