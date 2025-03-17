import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Readfullblog } from "../components/Readfullblog";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/spinner";

export const Blog = () => {
    const {id} = useParams();
    const {blog, loading} = useBlog(id || "");

    if(loading){
        return(
            <div className="flex items-center justify-center h-screen">
                <Spinner/>
            </div>
        )
    }

    if(blog){
        return (
            <div>
                <Appbar/>
                <Readfullblog blog={blog}/>
            </div>
        )
    }
}