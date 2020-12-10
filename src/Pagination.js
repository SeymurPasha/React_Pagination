import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Pagination({comments,commentsPerPage,moveToNextPage}) {

    const pageNumbers = comments/commentsPerPage
    const pages = []

    for(let i=1; i<=pageNumbers; i++) {
        pages.push(i)
    }

    return (
        <div className = 'column'>
        {pages.map(page => 
        <a 
        className = "col-md-3"
        href = '#'
        style = {{cursor:'pointer'}}
        key = {page} 
        onClick = {() => moveToNextPage(page)}>{page}</a>)}
        </div>
    )
}

