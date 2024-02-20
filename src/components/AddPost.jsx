import { useState } from "react";

export default function AddPost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
    };

    onAddPost(newPost);

    // reset the form
    setTitle("");
    setBody("");
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold">Add new post</h2>
      <form onSubmit={handleSubmit} action="">
        <p>
          <input
            className="border border-gray-700 outline-none p-1 mt-3"
            type="text"
            placeholder="Post Title"
            name="title"
            value={title}
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
