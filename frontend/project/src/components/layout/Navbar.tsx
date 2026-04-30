import React, { useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LayoutGrid, ShoppingBag, Radio, User, Users, PieChart, Ticket, Wallet, Mail, Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass dark:glass-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-2xl font-display font-bold text-gcr8-purple-950 dark:text-white tracking-tight">
                G'Cr8<span className="text-gcr8-purple-600">.</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/portfolio" icon={<LayoutGrid className="w-4 h-4" />} label="Portfolio" />
              <NavLink to="/live" icon={<Radio className="w-4 h-4" />} label="Live" />
              <NavLink to="/marketplace" icon={<ShoppingBag className="w-4 h-4" />} label="Market" />
              <NavLink to="/events" icon={<Ticket className="w-4 h-4" />} label="Events" />
              <NavLink to="/community" icon={<Users className="w-4 h-4" />} label="Collective" />
              <NavLink to="/dashboard" icon={<PieChart className="w-4 h-4" />} label="Stats" />
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button 
                onClick={() => setIsConnectModalOpen(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gcr8-purple-950 text-white dark:bg-white dark:text-gcr8-purple-950 rounded-full font-semibold text-sm transition-transform active:scale-95"
              >
                <User className="w-4 h-4" />
                <span>Connect</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gcr8-purple-950 dark:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-white dark:bg-gcr8-dark overflow-hidden"
            >
              <div className="p-4 space-y-2">
                <MobileNavLink to="/portfolio" icon={<LayoutGrid className="w-5 h-5" />} label="Portfolio" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to="/live" icon={<Radio className="w-5 h-5" />} label="Live" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to="/marketplace" icon={<ShoppingBag className="w-5 h-5" />} label="Market" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to="/events" icon={<Ticket className="w-5 h-5" />} label="Events" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to="/community" icon={<Users className="w-5 h-5" />} label="Collective" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to="/dashboard" icon={<PieChart className="w-5 h-5" />} label="Stats" onClick={() => setIsMobileMenuOpen(false)} />
                <div className="pt-4">
                  <Button onClick={() => { setIsConnectModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full justify-center gap-2">
                    <User className="w-4 h-4" />
                    Connect Profile
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Modal 
        isOpen={isConnectModalOpen} 
        onClose={() => setIsConnectModalOpen(false)}
        title="Connect to G'Cr8"
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Choose how you want to connect to your creator profile and start earning.
          </p>
          <Button variant="secondary" className="w-full justify-start gap-4 h-14 rounded-2xl">
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-left">
              <div className="font-bold">Connect Wallet</div>
              <div className="text-[10px] text-gray-400">MetaMask, Coinbase, or Phantom</div>
            </div>
          </Button>
          <Button variant="secondary" className="w-full justify-start gap-4 h-14 rounded-2xl">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <div className="font-bold">Email or Social</div>
              <div className="text-[10px] text-gray-400">Google, Twitter, or Discord</div>
            </div>
          </Button>
          <div className="pt-6 text-center">
            <p className="text-xs text-gray-400">
              By connecting, you agree to our <a href="#" className="text-gcr8-purple-600">Terms of Service</a>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gcr8-purple-600 dark:hover:text-white transition-colors"
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const MobileNavLink: React.FC<{ to: string; icon: React.ReactNode; label: string; onClick: () => void }> = ({ to, icon, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-4 p-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gcr8-purple-950/5 dark:hover:bg-white/5 hover:text-gcr8-purple-600 dark:hover:text-white transition-all"
  >
    <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center">
      {icon}
    </div>
    <span className="font-semibold">{label}</span>
  </Link>
);
