
import { Header } from '../components/layout/Header';
import { ArticleCard } from '../components/article/ArticleCard';
import { articles } from '../data/mockArticles';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const privacyArticles = useMemo(() => {
    return articles.filter(article => {
      const isPrivacyArticle = article.category === 'Privacy';
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return isPrivacyArticle && matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen">
      <Header onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="transition-colors">Home</Link> / <span className="text-foreground">Privacy</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk">Privacy & Digital Rights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore privacy issues, digital rights, and data protection in our increasingly connected world.
          </p>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-8">
            <p className="text-muted-foreground text-sm">
              {privacyArticles.length} result{privacyArticles.length !== 1 ? 's' : ''} for "{searchQuery}" in Privacy
            </p>
          </div>
        )}

        {/* Articles Grid */}
        <section>
          {privacyArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-2">No privacy articles found.</p>
              {searchQuery && (
                <p className="text-muted-foreground/70 text-sm">
                  Try adjusting your search terms.
                </p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {privacyArticles.map((article) => (
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
              <Link to="/about" className="transition-colors">About</Link>
              <Link to="/contact" className="transition-colors">Contact</Link>
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

export default Privacy;
