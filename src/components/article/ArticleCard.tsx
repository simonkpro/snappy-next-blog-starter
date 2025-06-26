
import { Article } from '../../types/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Clock, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const cardClasses = featured 
    ? "group cursor-pointer transition-all hover:shadow-xl border-gray-800 bg-gray-900 hover:bg-gray-800"
    : "group cursor-pointer transition-all hover:shadow-lg border-gray-800 bg-gray-900 hover:bg-gray-800";

  return (
    <Card className={cardClasses}>
      {article.imageUrl && (
        <div className="relative overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className={`w-full object-cover transition-transform group-hover:scale-105 ${
              featured ? 'h-64' : 'h-48'
            }`}
          />
          <div className="absolute top-4 left-4">
            <Badge 
              className={`${getCategoryColor(article.category)} text-white`}
            >
              {article.category}
            </Badge>
          </div>
        </div>
      )}
      
      <CardHeader className={featured ? 'p-6' : 'p-4'}>
        <h2 className={`font-bold text-white group-hover:text-green-400 transition-colors ${
          featured ? 'text-2xl mb-2' : 'text-lg mb-1'
        }`}>
          {article.title}
        </h2>
        
        <p className={`text-gray-400 leading-relaxed ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {article.excerpt}
        </p>
      </CardHeader>

      <CardContent className={featured ? 'px-6 pb-6' : 'px-4 pb-4'}>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          <span>{formatDate(article.publishedAt)}</span>
        </div>

        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {article.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Tech': 'bg-green-500',
    'Privacy': 'bg-blue-500',
    'Security': 'bg-red-500',
    'AI': 'bg-purple-500',
    'Investigation': 'bg-yellow-500',
  };
  return colors[category] || 'bg-gray-500';
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
