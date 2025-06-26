
import { Badge } from '@/components/ui/badge';
import { categories } from '../../data/mockArticles';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export const CategoryFilter = ({ selectedCategory, onCategorySelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Badge
        variant={selectedCategory === null ? "default" : "secondary"}
        className={`cursor-pointer transition-colors ${
          selectedCategory === null 
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
        onClick={() => onCategorySelect(null)}
      >
        All Articles
      </Badge>
      
      {categories.map((category) => (
        <Badge
          key={category.id}
          variant={selectedCategory === category.name ? "default" : "secondary"}
          className={`cursor-pointer transition-colors ${
            selectedCategory === category.name
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => onCategorySelect(category.name)}
        >
          {category.name}
        </Badge>
      ))}
    </div>
  );
};
