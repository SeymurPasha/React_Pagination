import React from 'react'

export default function Pagination({comments,commentsPerPage,moveToNextPage}) {

    const pageNumbers = comments/commentsPerPage
    const pages = []

    for(let i=1; i<=pageNumbers; i++) {
        pages.push(i)
    }

    return (
        <div>
        {pages.map(page => <a key = {page} onClick = {() => moveToNextPage(page)}>{page}</a>)}
        </div>
    )
}
