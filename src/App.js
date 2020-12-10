import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

import Comments from './Comments';
import Pagination from './Pagination';


function App() {
  
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [commentsPerPage] = useState(25)

  useEffect(() => {
 const fetchPosts = async () => { 
  setLoading(true);
 const res = await axios('https://jsonplaceholder.typicode.com/comments/')
  setComments(res.data)
  setLoading(false)
  }
  fetchPosts()
}, [])

  const indexOfLastComment = currentPage*commentsPerPage
  const indexOfFirstComment = indexOfLastComment - commentsPerPage

  const moveToNextPage = (currentPage)=> {
    setCurrentpage(currentPage)
  }
  
  return (
    <div className="App">
     <Comments comments = {comments} loading = {loading} indexOfLastComment = {indexOfLastComment} indexOfFirstComment = {indexOfFirstComment} />
     <Pagination comments = {comments.length} commentsPerPage = {commentsPerPage} moveToNextPage = {moveToNextPage} />
    </div>
  );
}

export default App;
