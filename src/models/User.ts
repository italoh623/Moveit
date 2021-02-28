export default class User {
    gitHubUser: string;
    name: string;
    avatar: string;
    
  
    constructor(gitHubUser: string, name: string, avatar: string) {
        this.gitHubUser = gitHubUser;
        this.name = name;
        this.avatar = avatar;
    }
}