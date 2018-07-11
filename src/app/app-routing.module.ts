import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuildDetailComponent } from './components/guild-detail/guild-detail.component';
import { SoundFileUploadComponent } from './components/sound-file-upload/sound-file-upload.component';
import {VoiceChannelComponent } from './components/voice-channel/voice-channel.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'guild/:id', component: GuildDetailComponent },
  { path: 'guild/:id/upload', component: SoundFileUploadComponent },
  { path: 'guild/:id/soundboard', component: VoiceChannelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
