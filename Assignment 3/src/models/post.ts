class post{
    postId: number;
    createdDate: Date;
    title: String;
    content: String;
    userId: String;
    headerImage: String;
    lastUpdated: Date;

    constructor(postId:number, createdDate:Date, title:String, content:String, userId:String, headerImage:String, lastUpdated:Date)
    {
    this.postId = postId;
    this.createdDate = createdDate;
    this.title = title;
    this.content = content;
    this.userId = userId;
    this.headerImage = headerImage;
    this.lastUpdated = lastUpdated;
    }

}

export{post}

