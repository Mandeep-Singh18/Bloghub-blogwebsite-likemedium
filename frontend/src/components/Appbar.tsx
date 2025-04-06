import { Link } from "react-router-dom"

export const Appbar = () => {
    return (
        <div className="flex fixed top-0 left-0 right-0 bg-white border-b border-gray-300 justify-between items-center px-10 py-2">
            <Link to={'/blogs'} className="text-2xl font-bold font-serif cursor-pointer">
                Bloghub
            </Link>
            <div className="flex ">
                <Link to={'/publish'}>
                    <button className="border py-2 px-4 mx-4 rounded-full cursor-pointer">
                        Write
                    </button>
                </Link>
                <div className="w-10 h-10 flex items-center justify-center bg-slate-500 text-white text-lg font-bold rounded-full">
                    B
                </div>
            </div>
        </div>
    )
}