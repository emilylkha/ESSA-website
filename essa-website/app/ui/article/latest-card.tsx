import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

const LatestArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-8 bg-white rounded-lg hover:bg-gray-100 cursor-pointer md:p-4 flex flex-col">
      <div className="relative mb-4 h-96">
        <Image src={article.image} alt={article.title} fill={true} className="rounded-md object-cover" />
      </div>
      <div className="md:col-span-2 flex flex-col justify-center">
        <p className="text-md md:text-lg text-gray-600 mb-4">{article.date}</p>
        <h2 className="mb-2 text-lg md:text-3xl">{article.title}</h2>
        <p className="text-md md:text-lg text-gray-600 mb-4">{article.excerpt}</p>
        <p className="text-md md:text-lg text-gray-600 mb-4">{article.author}</p>
      </div>
    </div>
  );
};

export default LatestArticleCard;
