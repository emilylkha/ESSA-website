import ArticleCard from "../ui/article/article-card"
import RotatingImagesHeader from "../ui/rotating-images-header"
import { articlesList } from "../ui/article/articles-list"
import LatestArticleCard from "../ui/article/latest-card"

export default function Articles() {
    const images = ["/articles-image.png"]
    const latestArticle = articlesList[0]
    return (
        <main className="flex min-h-screen w-full flex-col items-center">
            <RotatingImagesHeader images={images} height={40} title={"Articles"}/>
            <div className="w-full p-4 md:px-8 md:pb-0">
                <h2 className="text-4xl font-bold px-2 my-8">Latest Article</h2>
                <LatestArticleCard key={latestArticle.id} article={latestArticle} />
            </div>
            <div className="w-full p-4 md:p-8 pb-32">
                <h2 className="text-4xl font-bold px-2 mb-8">All Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articlesList.map(article => (
                    <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </main>
    )
}