
import { Badge } from '@/components/ui/badge';
import { categories } from '../../data/mockArticles';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export const CategoryFilter = ({ selectedCategory, onCategorySelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      <Badge
        variant={selectedCategory === null ? "default" : "secondary"}
        className={`nav-pill-item cursor-pointer font-medium ${
          selectedCategory === null 
            ? 'bg-accent text-accent-foreground' 
            : 'bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        }`}
        onClick={() => onCategorySelect(null)}
      >
        All Articles
      </Badge>
      
      {categories.map((category) => (
        <Badge
          key={category.id}
          variant={selectedCategory === category.name ? "default" : "secondary"}
          className={`nav-pill-item cursor-pointer font-medium ${
            selectedCategory === category.name
              ? 'bg-accent text-accent-foreground'
              : 'bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          }`}
          onClick={() => onCategorySelect(category.name)}
        >
          {category.name}
        </Badge>
      ))}
    </div>
  );
};
