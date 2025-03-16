

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
}

export const BlogCard = ({ authorName, title, content, publishDate }: BlogCardProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 flex items-center justify-center bg-slate-500 text-white text-lg font-bold rounded-full">
          {authorName.charAt(0).toUpperCase()}
        </div>
        <div className="flex justify-center items-center">
          <p className="text-black-500 font-semibold">{authorName}</p>
          <span className="p-1">.</span>
          <p className="text-gray-500 text-sm">{publishDate}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-black">{title}</h2>
      <p className="text-gray-700 text-sm line-clamp-3">{content}</p>
      <div className="text-gray-700 text-sm line-clamp-3 pt-2">
        {`${Math.ceil(content.length / 100)} minute(s) read`}
      </div>
    </div>
  );
};


