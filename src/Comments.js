import React, {useState, useEffect} from 'react'


export default function Comments({comments, indexOfFirstComment,indexOfLastComment,loading}) {


   const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment)
  
    return (
        <div>
          {loading 
          ? <h2>Loading ...</h2>
          : currentComments.map(comment => <div key = {comment.id}>{comment.name}</div>)
          }
        </div>
    )
}
