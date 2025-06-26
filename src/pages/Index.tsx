
import { useState, useMemo } from 'react';
import { Header } from '../components/layout/Header';
import { ArticleCard } from '../components/article/ArticleCard';
import { CategoryFilter } from '../components/layout/CategoryFilter';
import { articles } from '../data/mockArticles';

const Index = () => {
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
    <div className="min-h-screen">
      <Header onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-6 py-12">
        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-8">
            <p className="text-muted-foreground text-sm">
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
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-8 tracking-tight">Featured Story</h2>
            <ArticleCard article={featuredArticle} featured={true} />
          </section>
        )}

        {/* Articles Grid */}
        <section>
          <h2 className="text-3xl font-semibold text-foreground mb-8 tracking-tight">
            {selectedCategory ? `${selectedCategory} Articles` : 'Latest Articles'}
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-2">No articles found.</p>
              {searchQuery && (
                <p className="text-muted-foreground/70 text-sm">
                  Try adjusting your search terms or browse by category.
                </p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-24 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-foreground font-semibold text-lg mb-6 md:mb-0 tracking-tight">
              TechReport
            </div>
            <div className="flex space-x-8 text-muted-foreground text-sm">
              <a href="#" className="transition-colors">About</a>
              <a href="#" className="transition-colors">Contact</a>
              <a href="#" className="transition-colors">Privacy</a>
              <a href="#" className="transition-colors">Terms</a>
            </div>
          </div>
          <div className="text-center text-muted-foreground/70 text-sm mt-8 pt-8 border-t border-border/30">
            © 2024 TechReport. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
