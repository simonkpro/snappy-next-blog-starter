
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
    excerpt: 'Lawmakers propose comprehensive AI regulation framework targeting transparency and accountability in machine learning systems.',
    content: `Congress is considering sweeping new regulations for artificial intelligence companies following concerns about transparency, bias, and potential misuse of AI systems.

The proposed legislation would require AI companies to disclose training data sources, undergo regular audits, and implement bias testing for systems used in critical applications like hiring, lending, and law enforcement.

Representative Mark Wilson, who chairs the House Technology Committee, announced the bill during a press conference yesterday. "AI has tremendous potential to benefit society, but we need guardrails to ensure these powerful tools are developed and deployed responsibly," Wilson stated.

The tech industry has responded with mixed reactions. While some companies have welcomed the clarity that regulation could provide, others argue that overly restrictive rules could stifle innovation and put American companies at a disadvantage globally.`,
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
    title: 'Encrypted Messaging App Gains Traction After Platform Changes',
    excerpt: 'Privacy-focused messaging service sees 400% user growth following controversial policy updates by mainstream platforms.',
    content: `SecureChat, a privacy-focused messaging application, has experienced explosive growth with over 2 million new users in the past month, following controversial policy changes by major messaging platforms.

The surge began after WhatsApp and Telegram announced changes to their data sharing policies, prompting privacy-conscious users to seek alternatives that offer end-to-end encryption without data collection.

"We're seeing unprecedented demand for truly private communication tools," said Alex Rivera, SecureChat's founder. "People are becoming more aware of how their personal conversations are being monetized."

The app, which uses the Signal protocol for encryption, has attracted attention from journalists, activists, and everyday users concerned about digital privacy. Unlike mainstream platforms, SecureChat operates on a no-logs policy and is funded entirely through user donations.

Security researchers have praised the app's transparent approach to privacy, though they note that the rapid scaling presents technical challenges for maintaining security standards.`,
    author: { name: 'Emma Rodriguez' },
    publishedAt: '2024-06-23',
    category: 'Privacy',
    tags: ['encryption', 'messaging', 'privacy'],
    featured: false,
    readTime: 3
  },
  {
    id: '4',
    title: 'Tech Giants Lobby Against Right to Repair Legislation',
    excerpt: 'Major technology companies spend millions opposing state laws that would require manufacturers to provide repair manuals and parts.',
    content: `A coalition of major technology companies has spent over $50 million this year lobbying against "Right to Repair" legislation in various states, according to newly released lobbying disclosure forms.

The proposed laws would require manufacturers to provide repair manuals, diagnostic tools, and replacement parts to independent repair shops and consumers, potentially reducing electronic waste and repair costs.

Companies argue that such requirements could compromise security and intellectual property protection. "Our devices contain sophisticated security features that require specialized training to service safely," said a spokesperson for one major manufacturer.

However, consumer advocates and environmental groups contend that these restrictions create artificial barriers to repair, forcing customers to use expensive manufacturer services or replace devices entirely.

The debate reflects broader tensions between corporate control over technology products and consumer rights to modify and repair their own devices.`,
    author: { name: 'David Kim' },
    publishedAt: '2024-06-22',
    category: 'Tech',
    tags: ['right to repair', 'lobbying', 'consumer rights'],
    featured: false,
    readTime: 4
  }
];
