import React from "react";
import blogData from "../data/blog";
import About from "../components/About"
import ArticleList from "./ArticleList"
import Header from "../components/Header"
// import Article from "../components/Article"
// import Article from "../components/Article"

console.log(blogData);

function App() {

  return (
    <div className="App">
        <Header name={blogData.name}/>
        <About img={blogData.image} pTag={blogData.about}/>
        <ArticleList posts={blogData.posts}/>
        {/* <Article /> */}
    </div>
  );
}

export default App;
