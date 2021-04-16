export class Post {

    postId: number = 0;
    createdDate: Date = new Date(0,0,0,);
    title: string = '';
    content: string = '';
    userId: string = '';
    headerImage: string = '';
    lastUpdated: Date = new Date(0,0,0);

    constructor(postId: number, createDate: Date, title: string, content: string, userId: string, headerImage: string, lastUpdated:Date) {
        this.postId = postId,
        this.createdDate = createDate,
        this.title = title,
        this.content = content,
        this.userId = userId,
        this.headerImage = headerImage,
        this.lastUpdated = lastUpdated
    }

}
