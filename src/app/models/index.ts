export class User {
    id: string;
    username: string;
    constructor(obj: any) {
        this.id  = obj.id || 'noID';
        this.username = obj.username || 'noName';
    }
}

export class Status {
    status: string;
    user: User;
    constructor(obj: any) {
      this.status = obj.status || 'noStatus';
      this.user = new User(obj.user);
  }
}
// TODO reexport other models
