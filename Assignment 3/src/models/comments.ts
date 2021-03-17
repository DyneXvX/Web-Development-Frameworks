class comment{
    commentId: number
    postId: number
    comment: string

    constructor(commentId: number, postId: number, comment: string)
    {
        this.commentId = commentId;
        this.postId = postId;
        this.comment = comment;
    }
}

export{comment}

