import RotatingImagesHeader from "../ui/rotating-images-header"

export default function resources() {
    const images = ["/articles-image.png"]
    return (
        <main className="flex min-h-screen w-full flex-col items-center">
            <RotatingImagesHeader images={images} height={40} title={"Resources"}/>
            <h1>Guides</h1>
            <h1>Annual Publications</h1>
            <h1>Archives</h1>
        </main>
    )
}