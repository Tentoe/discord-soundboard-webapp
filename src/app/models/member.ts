export class Member {
  id: string;
  name: string;
  constructor(obj: any) {
    const user = obj.user || {};
    this.id = user.id || 'noID';
    this.name = user.name || 'noName';
  }
}
