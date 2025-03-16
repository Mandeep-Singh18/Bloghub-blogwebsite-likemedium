import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return (
        <div>
            <Appbar />
            <div className="bg-white p-5 border-b border-gray-300 w-full mx-auto max-w-2xl">
                <BlogCard
                    authorName="John Doe"
                    title="Lorem Ipsum"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    publishDate="16-03-2025"
                />
                <BlogCard
                    authorName="Jane Doe"
                    title="Lorem Ipsum"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    publishDate="16-03-2025"
                />
                <BlogCard
                    authorName="John Doe"
                    title="Lorem Ipsum"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    publishDate="16-03-2025"
                />
            </div>
        </div>
    )
}

