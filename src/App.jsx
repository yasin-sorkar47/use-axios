import { useEffect, useState } from "react";
import api from "./api/api";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import AllPosts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  // add new Post
  const handleAdd = async (newPost) => {
    try {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
      const finalPost = {
        id: id.toString(),
        ...newPost,
      };

      const response = await api.post("/posts", finalPost);

      setPosts([...posts, response.data]);
    } catch (error) {
      setError(error.message);
    }
  };

  // delete post
  const handleDelete = async (postId) => {
    if (confirm("Are you sure you want to delete the post?")) {
      try {
        await api.delete(`/posts/${postId}`);
        const filteredItem = posts.filter((item) => item.id !== postId);
        setPosts(filteredItem);
      } catch (error) {
        setError(error.message);
      }
    } else {
      console.log("you chose not to delete the post!");
    }
  };

  // edit post
  const handleEdit = async (updatePost) => {
    try {
      const response = await api.patch(`/posts/${updatePost.id}`, updatePost);

      const updatePosts = posts.map((post) => {
        return post.id === response.data.id ? response.data : post;
      });

      setPosts(updatePosts);
      setPost(null);
    } catch (error) {
      setError(error.message);
    }
  };

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/posts");

        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 mt-5">
      <h1 className="text-3xl font-bold mb-2">API Request with Axios</h1>
      <hr />
      <AllPosts onEditClick={setPost} posts={posts} onDelete={handleDelete} />
      <hr />
      {!post ? (
        <AddPost onAddPost={handleAdd} />
      ) : (
        <EditPost post={post} onEditPost={handleEdit} />
      )}

      {error && (
        <>
          <hr />
          <div className="bg-pink-600 text-white p-2 text-center">{error}</div>
        </>
      )}
    </div>
  );
}

export default App;
