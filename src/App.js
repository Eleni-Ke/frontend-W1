import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    try {
      let res = await fetch(process.env.BE_PROD_URL + "/blogposts");
      if (res.ok) {
        let postArr = await res.json();
        setPosts(postArr);
      } else {
        console.log("There has been a error fetching the Posts");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        {posts.length > 0 && (
          <Route path="/" exact element={<Home postsArr={posts} />} />
        )}
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/new" element={<NewBlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
