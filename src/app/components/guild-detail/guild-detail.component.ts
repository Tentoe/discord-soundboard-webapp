import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Channel } from 'models/channel';
import { Guild } from 'models/guild';

import { DiscordBotApiService } from 'app/discord-bot-api.service';




@Component({
  selector: 'app-guild-detail',
  templateUrl: './guild-detail.component.html',
  styleUrls: ['./guild-detail.component.css']
})
export class GuildDetailComponent implements OnInit {
  guild: Guild ;
  guildID = '';
  selecteChannelID = '';
  constructor(private route: ActivatedRoute, private botApi: DiscordBotApiService) {
  }

  ngOnInit() {
    this.guildID = this.route.snapshot.paramMap.get('id');
    this.botApi.getGuild(this.guildID).subscribe(guild => {
      this.guild = guild;
      this.selecteChannelID = this.guild.voiceChannel || '';
    });

  }

  joinVoiceChannel(): void {
  if (this.selecteChannelID) { this.botApi.joinVoiceChannel(this.guildID, this.selecteChannelID).subscribe(console.log); }
  }

  leaveVoiceChannel(): void {
    this.botApi.leaveVoiceChannel(this.guild.id).subscribe(console.log);
  }
}
