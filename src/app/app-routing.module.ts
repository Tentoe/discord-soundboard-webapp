import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GuildDetailComponent } from './guild-detail/guild-detail.component';
import { SoundFileUploadComponent } from './sound-file-upload/sound-file-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'guild/:id', component: GuildDetailComponent },
  { path: 'soundfileupload', component: SoundFileUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
