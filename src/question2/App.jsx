// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postData = await response.json();
      // console.log(postData);
      setPosts(postData);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>5 first posts</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <div className="flex flex-col">
            <button onClick={() => console.log(post.id)} key={post.id}>
              {post.title}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
