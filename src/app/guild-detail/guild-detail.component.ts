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
  private guild: any = []; // TODO Type
  constructor(private route: ActivatedRoute, private botApi: DiscordBotApiService) {
  }

  ngOnInit() { // TODO create api getGuild()
    const guildID = this.route.snapshot.paramMap.get('id');
    this.botApi.getGuilds().subscribe(guilds => {
      this.guild = guilds.find(g => g.id === guildID);
    });

  }
  joinVoiceChannel(channel: Channel): void {

    this.botApi.joinVoiceChannel(channel.id).subscribe(console.log);

  }

}
