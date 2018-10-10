export interface Photo {
    id: number;
    postDate: Date;
    url: string;
    description: String;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}
