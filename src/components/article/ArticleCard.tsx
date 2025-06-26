
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
    ? "cosmic-card cosmic-glow cursor-pointer"
    : "cosmic-card cursor-pointer";

  return (
    <Card className={cardClasses}>
      {article.imageUrl && (
        <div className="relative overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className={`w-full object-cover ${
              featured ? 'h-64' : 'h-48'
            }`}
          />
          <div className="absolute top-4 left-4">
            <Badge 
              variant="secondary"
              className="cosmic-glass text-xs font-medium"
            >
              {article.category}
            </Badge>
          </div>
        </div>
      )}
      
      <CardHeader className={featured ? 'p-8' : 'p-6'}>
        <h2 className={`font-semibold text-foreground leading-tight ${
          featured ? 'text-2xl mb-3' : 'text-lg mb-2'
        }`}>
          {article.title}
        </h2>
        
        <p className={`text-muted-foreground leading-relaxed ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {article.excerpt}
        </p>
      </CardHeader>

      <CardContent className={featured ? 'px-8 pb-8' : 'px-6 pb-6'}>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="font-medium">{article.author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          <span className="text-xs">{formatDate(article.publishedAt)}</span>
        </div>

        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs font-normal border-border/50 text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
