import React from "react";
import Comment from "./comment";

const CommentList = ({comments}) => {
    
    const commentComponents = comments.map((comment) => {
        return (
            <Comment author={comment.author}key={comment.id}>{comment.text}</Comment>
        )
    })

    return (
        <>
            {commentComponents}
        </>
    )
}

export default CommentList