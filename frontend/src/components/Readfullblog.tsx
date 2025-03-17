import { Blog } from "../hooks"

export const Readfullblog = ({ blog }: { blog: Blog }) => {
    return (
        <div className="min-h-screen p-6">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold mb-4">{blog.title}</h1>
                <div className="flex items-center my-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-300 text-white font-bold rounded-full text-lg">
                        {blog.author.name || "A"}
                    </div>
                    <div className="m-5">
                        <div className=" text-black text-lg">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className="text-gray-700 text-sm line-clamp-3">
                            {`${Math.ceil(blog.content.length / 100)} minute(s) read`}
                        </div>
                    </div>
                </div>
                <p className="text-md font-serif">{blog.content}</p>
            </div>
        </div>
    )
}