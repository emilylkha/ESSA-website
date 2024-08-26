import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleHeaderProps {
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

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-8 bg-white md:p-4 flex flex-col">
      <div className="flex flex-col justify-center p-8">
        <h2 className="mb-2 text-2xl md:text-4xl text-center mb-4">{article.title}</h2>
        <p className="text-md md:text-lg text-gray-600 text-center">By {article.author}</p>
        <p className="text-md md:text-lg text-gray-600 text-center">{article.date}</p>
      </div>
      <div className="relative mb-4 h-lvh">
        <Image src={article.image} alt={article.title} fill={true} className="object-cover" />
      </div>
    </div>
  );
};

export default ArticleHeader;
