import ArticleCard from "../ui/article/article-card"
import RotatingImagesHeader from "../ui/rotating-images-header"
import { articlesList } from "../ui/article/articles-list"

export default function Articles() {
    const images = ["/articles-image.png"]
    return (
        <main className="flex min-h-screen w-full flex-col items-center">
            <RotatingImagesHeader images={images} height={40} title={"Articles"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {articlesList.map(article => (
                <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </main>
    )
}