
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="backdrop-blur-md bg-background/80 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl font-semibold text-foreground tracking-tight">TechReport</h1>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex">
            <div className="nav-pill flex items-center px-2 py-1 space-x-1">
              <Link to="/" className={`nav-pill-item ${isActive('/') ? 'active' : ''}`}>Home</Link>
              <Link to="/tech" className={`nav-pill-item ${isActive('/tech') ? 'active' : ''}`}>Tech</Link>
              <Link to="/privacy" className={`nav-pill-item ${isActive('/privacy') ? 'active' : ''}`}>Privacy</Link>
              <Link to="/security" className={`nav-pill-item ${isActive('/security') ? 'active' : ''}`}>Security</Link>
              <Link to="/ai" className={`nav-pill-item ${isActive('/ai') ? 'active' : ''}`}>AI</Link>
            </div>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 cosmic-glass text-sm"
                />
              </div>
            </form>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-muted-foreground"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-2 border-t border-border mt-4">
            <nav className="flex flex-col space-y-1 mb-6">
              <Link to="/" className={`nav-pill-item text-left ${isActive('/') ? 'active' : ''}`}>Home</Link>
              <Link to="/tech" className={`nav-pill-item text-left ${isActive('/tech') ? 'active' : ''}`}>Tech</Link>
              <Link to="/privacy" className={`nav-pill-item text-left ${isActive('/privacy') ? 'active' : ''}`}>Privacy</Link>
              <Link to="/security" className={`nav-pill-item text-left ${isActive('/security') ? 'active' : ''}`}>Security</Link>
              <Link to="/ai" className={`nav-pill-item text-left ${isActive('/ai') ? 'active' : ''}`}>AI</Link>
            </nav>
            <div className="space-y-4">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full cosmic-glass"
                  />
                </div>
              </form>
              <Button variant="outline" className="w-full cosmic-glass">
                Subscribe
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
