
import { Article, Category } from '../types/blog';

export const categories: Category[] = [
  { id: '1', name: 'Tech', slug: 'tech', color: 'bg-green-500' },
  { id: '2', name: 'Privacy', slug: 'privacy', color: 'bg-blue-500' },
  { id: '3', name: 'Security', slug: 'security', color: 'bg-red-500' },
  { id: '4', name: 'AI', slug: 'ai', color: 'bg-purple-500' },
  { id: '5', name: 'Investigation', slug: 'investigation', color: 'bg-yellow-500' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Major Data Breach Exposes Millions of User Records',
    excerpt: 'A sophisticated cyber attack on a leading tech company has compromised personal data of over 10 million users, raising serious questions about data security practices.',
    content: `A major cybersecurity incident has shaken the tech industry this week as hackers successfully breached the systems of TechCorp, one of the leading cloud service providers, exposing sensitive personal information of more than 10 million users.

The breach, discovered on Monday morning by the company's security team, appears to have been ongoing for several weeks before detection. Initial investigations suggest that attackers gained access through a vulnerability in the company's authentication system.

"We take this incident extremely seriously and are working around the clock to secure our systems and protect our users," said Jane Smith, TechCorp's Chief Security Officer, in a statement released Tuesday.

The compromised data includes names, email addresses, phone numbers, and encrypted passwords. While financial information was not accessed, security experts warn that the exposed data could be used for targeted phishing attacks and identity theft.

This incident highlights the ongoing challenges that even well-resourced companies face in protecting user data against increasingly sophisticated cyber threats. The company has notified all affected users and is offering free credit monitoring services.`,
    author: { name: 'Sarah Johnson' },
    publishedAt: '2024-06-25',
    category: 'Security',
    tags: ['cybersecurity', 'data breach', 'privacy'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
    featured: true,
    readTime: 5
  },
  {
    id: '2',
    title: 'AI Companies Face New Regulatory Scrutiny',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    author: { name: 'Michael Chen' },
    publishedAt: '2024-06-24',
    category: 'AI',
    tags: ['regulation', 'policy', 'machine learning'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    featured: false,
    readTime: 4
  },
  {
    id: '3',
    title: 'Encrypted Messaging App Gains Traction',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    author: { name: 'Emma Rodriguez' },
    publishedAt: '2024-06-23',
    category: 'Privacy',
    tags: ['encryption', 'messaging', 'privacy'],
    featured: false,
    readTime: 3
  },
  {
    id: '4',
    title: 'Tech Giants Lobby Against Right to Repair',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    author: { name: 'David Kim' },
    publishedAt: '2024-06-22',
    category: 'Tech',
    tags: ['right to repair', 'lobbying', 'consumer rights'],
    featured: false,
    readTime: 4
  },
  {
    id: '5',
    title: 'Machine Learning Bias in Hiring Systems',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.`,
    author: { name: 'Rachel Kim' },
    publishedAt: '2024-06-21',
    category: 'AI',
    tags: ['bias', 'hiring', 'ethics'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    featured: false,
    readTime: 6
  },
  {
    id: '6',
    title: 'Zero-Day Vulnerability Discovered in Popular Framework',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur, nulla at vehicula tincidunt, augue libero.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    author: { name: 'Alex Morgan' },
    publishedAt: '2024-06-20',
    category: 'Security',
    tags: ['vulnerability', 'framework', 'patch'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
    featured: false,
    readTime: 5
  },
  {
    id: '7',
    title: 'Privacy-First Search Engine Gains Market Share',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
    author: { name: 'Jordan Lee' },
    publishedAt: '2024-06-19',
    category: 'Privacy',
    tags: ['search', 'privacy', 'competition'],
    featured: false,
    readTime: 4
  },
  {
    id: '8',
    title: 'Quantum Computing Breakthrough Announced',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
    author: { name: 'Dr. Lisa Chen' },
    publishedAt: '2024-06-18',
    category: 'Tech',
    tags: ['quantum', 'computing', 'breakthrough'],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
    featured: false,
    readTime: 7
  },
  {
    id: '9',
    title: 'Corporate Surveillance Investigation Reveals Widespread Tracking',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.`,
    author: { name: 'Maria Santos' },
    publishedAt: '2024-06-17',
    category: 'Investigation',
    tags: ['surveillance', 'tracking', 'corporate'],
    featured: false,
    readTime: 8
  },
  {
    id: '10',
    title: 'New AI Ethics Guidelines Released by Tech Consortium',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor blandit quam, et molestie dolor.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    author: { name: 'Thomas Anderson' },
    publishedAt: '2024-06-16',
    category: 'AI',
    tags: ['ethics', 'guidelines', 'consortium'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    featured: false,
    readTime: 5
  }
];
