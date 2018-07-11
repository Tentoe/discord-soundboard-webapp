import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { DiscordBotApiService } from './discord-bot-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = '';
  constructor(private location: Location, private botApi: DiscordBotApiService) {}
  ngOnInit() {
    this.botApi.getStatus().subscribe(status => {
      const {user: {username}} = status;
      this.user = username ;
    });
  }
  goBack() { // TODO make back button a "directory up" button
    this.location.back();
  }

}
