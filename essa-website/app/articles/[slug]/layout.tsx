import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link"

export default function ArticleLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
        <Link href={"/articles"} className="bg-black h-12 flex content-center flex-wrap gap-4">
            <ArrowLeftIcon className="w-5 h-5 ml-16 text-white" aria-hidden="true"/>
            <p className="text-bold text-white">All Articles</p>
        </Link>
        <>
        {children}
        </>
        </div>
    );
  }
  