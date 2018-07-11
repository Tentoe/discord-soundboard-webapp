import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'ng2-file-upload';
import { MatProgressBarModule, MatListModule, MatToolbarModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DiscordBotApiService } from './discord-bot-api.service';
import { DashboardComponent } from 'components/dashboard/dashboard.component';
import { GuildDetailComponent } from 'components/guild-detail/guild-detail.component';
import { SoundFileUploadComponent } from 'components/sound-file-upload/sound-file-upload.component';
import { VoiceChannelComponent } from 'components/voice-channel/voice-channel.component';


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
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [DiscordBotApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
