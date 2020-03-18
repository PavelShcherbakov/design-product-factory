export class Session {
    public name: string;
    public duration: number;
    public date: Date;
    public authors: Author[];
    public description: string;

    constructor() {
        this.authors = [];
    }

}
export class Author {
    avatar: string;
    constructor(avatar = null) {
        this.avatar = avatar;
    }
}
