
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  featured: boolean;
  readTime: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}
