import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'ng2-file-upload';
import { MatProgressBarModule, MatListModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DiscordBotApiService } from './discord-bot-api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuildDetailComponent } from './guild-detail/guild-detail.component';
import { SoundFileUploadComponent } from './sound-file-upload/sound-file-upload.component';
import { VoiceChannelComponent } from './voice-channel/voice-channel.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GuildDetailComponent,
    SoundFileUploadComponent,
    VoiceChannelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    MatProgressBarModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [DiscordBotApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
