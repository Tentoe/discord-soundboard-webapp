import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscordBotApiService } from '../discord-bot-api.service';

@Component({
  selector: 'app-voice-channel',
  templateUrl: './voice-channel.component.html',
  styleUrls: ['./voice-channel.component.css']
})
export class VoiceChannelComponent implements OnInit {

  constructor(private route: ActivatedRoute, private botApi: DiscordBotApiService) {
  }
  private voiceChannelID: string;
  soundFiles;
  ngOnInit() {
    this.voiceChannelID = this.route.snapshot.paramMap.get('id');
    this.botApi.getSoundFiles().subscribe(sf => this.soundFiles = sf);
  }
  playSoundFile(soundFileID: string) {
      console.log('clicked Soundfile:' + soundFileID + ' in voice :' + this.voiceChannelID);

      this.botApi.playSoundFile(this.voiceChannelID, soundFileID).subscribe(console.log);
  }
}
