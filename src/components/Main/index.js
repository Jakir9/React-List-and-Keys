import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
  //In the `<Main/>` component (src/components/Main), use the `.map()` method to loop over the the 'posts' state. For each post in the array, return a `<Post/>` component.

  const [posts, setPosts] = useState(samplePosts);
  let listOfPosts = posts.map((post) => {
    return <Post />;
  });

  return <main id="main">{listOfPosts}</main>;
}

export default Main;
