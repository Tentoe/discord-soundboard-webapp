import { Member } from './member';
import { Channel } from './channel';

export class Guild {
  id: string;
  members: Member[];
  name: string;
  iconURL: string;
  voiceChannels: Channel[];

  constructor(obj: any) {
    this.id = obj.id || 'noID';
    this.members = obj.members.map(m => new Member(m)) || [];
    this.name = obj.name || 'noName';
    this.iconURL = obj.iconURL || 'noIconURL';
    this.voiceChannels = obj.channels.filter(c => c.type === 'voice').map(c => new Channel(c)) || [];
  }
}
