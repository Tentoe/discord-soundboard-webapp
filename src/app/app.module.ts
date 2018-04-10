import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DiscordBotApiService } from './discord-bot-api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuildDetailComponent } from './guild-detail/guild-detail.component';
import { SoundFileUploadComponent } from './sound-file-upload/sound-file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GuildDetailComponent,
    SoundFileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [DiscordBotApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
