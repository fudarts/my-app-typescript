export class PostData {
    private userId: number;
    private id: number;
    private title: string;
    private body: string;
 
    constructor(UserID: number, ID: number, Title: string, Body: string) {
        this.userId = UserID;
        this.id = ID;
        this.title = Title;
        this.body = Body;
    }
   
}