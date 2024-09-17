import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css'

function News(){

  const [news,setNews] = useState([]);
  useEffect(()=>{
    fetchNews();
  },[])

  async function fetchNews(){
    try{
      const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=893c354a5976444db088b19b6bff96db");
      if(!res.ok){
        throw new Error("error msg");
      }

      const data = await res.json();
      // console.log(data.articles);
      setNews(data.articles);
    }catch(error){
      console.log(error);
    }
    
  }

  return(
    <div className="container">
      <h2 className="py-4">News App</h2>
      <div className="con2 m-0 p-0">
      {
        news ? news.map((blog,index)=>{
          return(
            <div className="card bg-dark text-light p-1 m-0" style={{width:'280px'}} key={index}>
              <img src={blog.urlToImage} className="" alt="image"></img>
              <div className="card-body">
                <p className="card-title">{blog.title}</p>
                <p className="card-text text-secondary ">{blog.description}</p>
              <a href={blog.url} className="bg-primary text-center text-light" alt="news">Watch</a>
              </div>
            </div>
          )
        }) :""
      }
      </div>
    </div>
  )
}

export default News;