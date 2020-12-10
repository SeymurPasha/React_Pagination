import React from 'react'
import 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from 'react-loader-spinner'

export default function Comments({comments, indexOfFirstComment,indexOfLastComment,loading}) {


   const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment)
  
    return (
        <div>
          {loading 
          ?  <Loader
          type="Oval"
          color="#00BFFF"
          height={150}
          width={150}
          timeout={3000} //3 secs
  
       />
          : currentComments.map(comment => 
          <div 
          key = {comment.id}
          style = {{width:'100%', display:'flex', flexDirection:'row', borderBottom:'1px solid #00BFFF'}}
          >
            <span style = {{marginRight:'10px'}}>{comment.id}</span> 
            <span>{comment.name}</span> 
          </div>
          )
          }
        </div>
    )
}
