import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skeletonblogs } from "../components/Skeletonblogs"
import { useBlogs } from "../hooks"

export const Blogs = () => { 
    const {loading, blogs} = useBlogs()

    if(loading) return (
        <div className="bg-white p-5 mt-14 border-gray-300 w-full mx-auto max-w-2xl">
            <Skeletonblogs/>
            <Skeletonblogs/>
            <Skeletonblogs/>       
        </div>
    )

    if(blogs) return (
        <div>
            <Appbar/>
            
            <div className="bg-white shadow-lg rounded-lg p-4 mt-10 border-gray-300  w-full mx-auto max-w-2xl">
                {blogs.map((blog) => ( 
                    <BlogCard
                        key={blog.id}
                        id = {blog.id}
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishDate={"17-03-2025"}
                    />
                ))}
            </div>
        </div>
    )
}

