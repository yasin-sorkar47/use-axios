export default function AllPosts({ posts, onEditClick, onDelete }) {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold">All Posts</h2>
      <ul className=" ml-7 mt-2">
        {posts.map((post) => (
          <li key={post?.id} className="flex">
            <span className="pr-2">{post?.id}</span>
            <span>{post?.title}</span>
            <div className="pl-4">
              <span
                className="m-2 cursor-pointer"
                onClick={() => onDelete(post?.id)}
              >
                ❌
              </span>
              <span
                className=" cursor-pointer"
                onClick={() => onEditClick(post)}
              >
                ✏️
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
