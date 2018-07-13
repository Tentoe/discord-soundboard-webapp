import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';


import { DiscordBotApiService } from 'app/discord-bot-api.service';
import { SoundFile } from 'app/models/soundfile';


@Component({
  selector: 'app-voice-channel',
  templateUrl: './voice-channel.component.html',
  styleUrls: ['./voice-channel.component.css']
})
export class VoiceChannelComponent implements OnInit {
  soundFilesControl = new FormControl();
  guildID: string;
  soundFiles: SoundFile[];
  filteredsoundFiles: Observable<SoundFile[]>;
  selectedSoundFileID = '';


  constructor(private route: ActivatedRoute, private botApi: DiscordBotApiService) { }

  ngOnInit() {
    this.guildID = this.route.snapshot.paramMap.get('id');
    this.botApi.getSoundFiles(this.guildID).subscribe(sf => {
      this.soundFiles = sf;
      this.selectedSoundFileID = this.soundFiles[0].id;
      this.filteredsoundFiles = this.soundFilesControl.valueChanges
        .pipe(
          startWith<string | SoundFile>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.soundFiles)
        );
    });

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

  getName(soundfile?: SoundFile): string | undefined {
    return soundfile ? soundfile.name : undefined;
  }

  private _filter(name: string): SoundFile[] {
    const filterValue = name.toLowerCase();
    const filterdItems = this.soundFiles.filter(option => option.name.toLowerCase().includes(filterValue));
    this.selectedSoundFileID = filterdItems[0] ? filterdItems[0].id : '';
    return filterdItems;
  }

  onEnter() {
    this.soundFilesControl.setValue('', { emitEvent: true });

    if (this.selectedSoundFileID) {
      this.playSoundFile(this.selectedSoundFileID);
    }
  }

}
