export class UserInfo{
    public name: any;
    public stars: number;
    public lastCommit: string;
    public path: string;
    public photo: string;
    public nickName: string;
    public linkToUser: string;
    public languages: string;
    public description: string;
    public mainContr: string;

    constructor(name: any, stars: number, lastCommit: string, path: string, photo: string, nickName: string,
        linkToUser: string, languages: string,  description: string,  mainContr: string  ){
            this.name = name;
            this.stars = stars;
            this.lastCommit = lastCommit;
            this.path = path;
            this.photo = photo;
            this.nickName = nickName;
            this.linkToUser = linkToUser;
            this.languages = languages;
            this.description = description;
            this.mainContr = mainContr;
    }
}