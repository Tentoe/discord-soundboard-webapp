import { TestBed, inject } from '@angular/core/testing';

import { DiscordBotApiService } from './discord-bot-api.service';

describe('DiscordBotApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscordBotApiService]
    });
  });

  it('should be created', inject([DiscordBotApiService], (service: DiscordBotApiService) => {
    expect(service).toBeTruthy();
  }));
});
