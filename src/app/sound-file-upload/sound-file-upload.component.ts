import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-sound-file-upload',
  templateUrl: './sound-file-upload.component.html',
  styleUrls: ['./sound-file-upload.component.css']
})
export class SoundFileUploadComponent implements OnInit {
  guildID = '';
  public uploader: FileUploader ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.guildID = this.route.snapshot.paramMap.get('id');
    this.uploader = new FileUploader({url: `/api/guilds/${this.guildID}/upload`});
  }

}
