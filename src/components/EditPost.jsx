import { useState } from "react";

export default function EditPost({ post, onEditPost }) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const hanSubmit = (e) => {
    e.preventDefault();

    const editPost = {
      id: post.id,
      title,
      body,
    };

    onEditPost(editPost);

    // reset the form
    setTitle("");
    setBody("");
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold">Edit post</h2>
      <form onSubmit={hanSubmit} action="">
        <p>
          <input
            className="border border-gray-700 outline-none p-1 mt-3"
            type="text"
            placeholder="Post Title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <input
            className="border border-gray-700 outline-none p-1 mt-3"
            type="text"
            placeholder="Post Body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </p>
        <div>
          <input className=" border border-gray-700 px-3 mt-2" type="submit" />
        </div>
      </form>
    </div>
  );
}
