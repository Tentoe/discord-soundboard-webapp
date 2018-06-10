export class SoundFile {
    id: string;
    name: string;
    constructor(obj: any) {
      this.id = obj.id || 'noID';
      this.name = obj.name || 'noName';
    }
  }

