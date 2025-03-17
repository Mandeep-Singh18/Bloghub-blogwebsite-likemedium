import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
    title: string;
    content: string;
    id: string;
    author: {
        name: string;
    }
}

export const useBlog = (id: string) => {
    const [blog, setBlogs] = useState<Blog>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setBlogs(response.data.blog);
                setLoading(false);
            })
    }, [id])

    return { blog, loading };
}

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, [])

    return { blogs, loading };
}