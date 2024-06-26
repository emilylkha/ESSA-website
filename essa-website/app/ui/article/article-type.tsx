export interface ArticleType {
    article: {
      id: number;
      title: string;
      author: string;
      date: string;
      image: string;
      excerpt: string;
      content?: string[];
      slug: string; // Unique identifier for each article
    };
  }