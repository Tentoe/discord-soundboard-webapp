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
  stop() {
    console.log('clicked stop in voice :' + this.voiceChannelID);
    this.botApi.stop(this.voiceChannelID).subscribe(console.log);
  }

  joinVoiceChannel(): void {
    this.botApi.joinVoiceChannel(this.voiceChannelID).subscribe(console.log);
  }

  leaveVoiceChannel(): void {
    this.botApi.leaveVoiceChannel(this.voiceChannelID).subscribe(console.log);
  }
}
