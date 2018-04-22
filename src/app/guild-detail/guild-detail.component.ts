import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Channel } from '../models/channel';

import { DiscordBotApiService } from '../discord-bot-api.service';



@Component({
  selector: 'app-guild-detail',
  templateUrl: './guild-detail.component.html',
  styleUrls: ['./guild-detail.component.css']
})
export class GuildDetailComponent implements OnInit {
  guild: any = []; // TODO Type
  selecteChannelID = '';
  constructor(private route: ActivatedRoute, private botApi: DiscordBotApiService) {
  }

  ngOnInit() { // TODO create api getGuild()
    const guildID = this.route.snapshot.paramMap.get('id');
    this.botApi.getGuild(guildID).subscribe(guild => {
      this.guild = guild;
      this.selecteChannelID = this.guild.voiceChannel || '';
    });

  }

  joinVoiceChannel(): void {
  if (this.selecteChannelID) { this.botApi.joinVoiceChannel(this.selecteChannelID).subscribe(console.log); }
  }

  leaveVoiceChannel(): void {
    this.botApi.leaveVoiceChannel(this.guild.id).subscribe(console.log);
  }
}
