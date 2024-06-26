import ArticleHeader from "@/app/ui/article/article-header";
import { articlesList } from "@/app/ui/article/articles-list";
import Image from 'next/image';

export default function Page({ params }: { params: { slug: string } }) {
    const article = articlesList.find(article => article.slug === params.slug);
    
    if (!article) {
        return <div>Article not found</div>;
    }

    const paragraphs = Array.isArray(article.content) ? article.content : [];

    return (
        <>
            <ArticleHeader article={article} />
            <div className="prose max-w-none mx-4 md:mx-32 flex flex-col gap-4 mb-8">
                    {paragraphs.length > 0 ? paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    )) : 'Content not found'}
            </div>
        </>
    );
}