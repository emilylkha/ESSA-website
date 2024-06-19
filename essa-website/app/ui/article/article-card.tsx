import React from 'react';
import Link from 'next/link';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    author: string;
    date: string;
    image: string;
    excerpt: string;
    slug: string; // Unique identifier for each article
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.author} | {article.date}</p>
        <p className="text-gray-800">{article.excerpt}</p>
        <Link href={`/articles/${article.slug}`} className="block mt-4 text-emerald-600 hover:text-emerald-800">Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
