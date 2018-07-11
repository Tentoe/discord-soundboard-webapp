import { Component, OnInit } from '@angular/core';
import { DiscordBotApiService } from 'app/discord-bot-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  guilds = [];
  constructor(private botApi: DiscordBotApiService, ) { }

  ngOnInit() {
    this.botApi.getGuilds().subscribe(g => this.guilds = g);
  }

}
