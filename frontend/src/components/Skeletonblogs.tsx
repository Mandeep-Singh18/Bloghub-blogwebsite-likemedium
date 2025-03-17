
export const Skeletonblogs = () => {
    return (
        <div className="border-b p-3 border-gray-300 cursor-pointer animate-pulse">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="flex justify-center items-center">
                    <div className="w-20 h-4 bg-gray-300 rounded"></div>
                    <span className="p-1">.</span>
                    <div className="w-16 h-4 bg-gray-300 rounded"></div>
                </div>
            </div>
            <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-300 rounded mb-1"></div>
            <div className="w-full h-4 bg-gray-300 rounded mb-1"></div>
            <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
            <div className="w-24 h-4 bg-gray-300 rounded mt-2"></div>
        </div>
    )
}