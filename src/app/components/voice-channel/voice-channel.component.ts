import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscordBotApiService } from 'app/discord-bot-api.service';

@Component({
  selector: 'app-voice-channel',
  templateUrl: './voice-channel.component.html',
  styleUrls: ['./voice-channel.component.css']
})
export class VoiceChannelComponent implements OnInit {

  constructor(private route: ActivatedRoute, private botApi: DiscordBotApiService) {
  }
  private guildID: string;
  soundFiles;
  ngOnInit() {
    this.guildID = this.route.snapshot.paramMap.get('id');
    this.botApi.getSoundFiles(this.guildID).subscribe(sf => this.soundFiles = sf);
  }
  playSoundFile(soundFileID: string) {
      console.log('clicked Soundfile:' + soundFileID + ' in voice :' + this.guildID);
      this.botApi.playSoundFile(this.guildID, soundFileID).subscribe(console.log);
  }
  stop() {
    console.log('clicked stop in guild :' + this.guildID);
    this.botApi.stop(this.guildID).subscribe(console.log);
  }
  random() {
      console.log('clicked Random');
      this.botApi.playRandomSoundFile(this.guildID).subscribe(console.log);
  }


}
