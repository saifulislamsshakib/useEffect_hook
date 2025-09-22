import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });

  ///eivabe data api fetch korle unlimited re-render nibe api loop er moton,
  //ete kore application crash korte pare . eita dur kortei useEffect hook use kora hoy.
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className="Container">
      <h2>
        100 Posts description will show here, through using useEffect Hook and
        API.
      </h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
