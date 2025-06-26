
import { useState, useMemo } from 'react';
import { Header } from '../components/layout/Header';
import { ArticleCard } from '../components/article/ArticleCard';
import { CategoryFilter } from '../components/layout/CategoryFilter';
import { articles } from '../data/mockArticles';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredArticle = filteredArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-black' : 'bg-white'}`}>
      <Header 
        onSearch={setSearchQuery} 
        isDark={isDark} 
        onThemeToggle={() => setIsDark(!isDark)} 
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-400">
              {filteredArticles.length} result{filteredArticles.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Featured Article */}
        {featuredArticle && !searchQuery && !selectedCategory && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Story</h2>
            <ArticleCard article={featuredArticle} featured={true} />
          </section>
        )}

        {/* Articles Grid */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">
            {selectedCategory ? `${selectedCategory} Articles` : 'Latest Articles'}
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found.</p>
              {searchQuery && (
                <p className="text-gray-500 mt-2">
                  Try adjusting your search terms or browse by category.
                </p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-400 font-bold text-lg mb-4 md:mb-0">
              TechReport
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">About</a>
              <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-4">
            © 2024 TechReport. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
