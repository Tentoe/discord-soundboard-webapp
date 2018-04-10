import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


const URL = '/api/upload';

@Component({
  selector: 'app-sound-file-upload',
  templateUrl: './sound-file-upload.component.html',
  styleUrls: ['./sound-file-upload.component.css']
})
export class SoundFileUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL});
  constructor() { }

  ngOnInit() {
  }

}
