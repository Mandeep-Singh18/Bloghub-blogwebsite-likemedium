import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <Appbar />
            <div className="max-h-screen  flex justify-center p-6">
                <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full text-4xl font-bold outline-none mb-4 border-b border-gray-300 p-3"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="w-full h-96 p-4 text-lg border-none outline-none resize-none"
                        placeholder="Write your story..."
                        onChange={(e) => setContent(e.target.value)}  
                    ></textarea>
                    <button onClick={async () => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title,
                            content
                        },{
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        });
                        navigate(`/blog/${response.data.id}`)
                    }} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                        Publish
                    </button>
                </div>
            </div>
        </div>
    )
}