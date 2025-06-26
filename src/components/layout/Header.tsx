
import { Search, Menu, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export const Header = ({ onSearch, isDark, onThemeToggle }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="border-b border-gray-800 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-green-400">TechReport</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-green-400 transition-colors">Home</a>
            <a href="#" className="hover:text-green-400 transition-colors">Tech</a>
            <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Security</a>
            <a href="#" className="hover:text-green-400 transition-colors">AI</a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </form>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="text-gray-400 hover:text-white"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="outline" className="hidden sm:flex border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              Subscribe
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="py-2 hover:text-green-400 transition-colors">Home</a>
              <a href="#" className="py-2 hover:text-green-400 transition-colors">Tech</a>
              <a href="#" className="py-2 hover:text-green-400 transition-colors">Privacy</a>
              <a href="#" className="py-2 hover:text-green-400 transition-colors">Security</a>
              <a href="#" className="py-2 hover:text-green-400 transition-colors">AI</a>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
              </form>
              <Button variant="outline" className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                Subscribe
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
