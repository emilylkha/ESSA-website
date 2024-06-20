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

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={`/articles/${article.slug}`} className="grid grid-cols-3 rounded-md gap-4 bg-white hover:bg-gray-100 cursor-pointer md:p-2">
      <div className="relative">
        <Image src={article.image} alt={article.title} fill={true} className="rounded-md object-cover" />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div>
          <p className="text-sm md:text-base text-gray-600 mb-4">{article.date}</p>
          <h2 className="mb-2 md:text-xl">{article.title}</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600">{article.author}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
