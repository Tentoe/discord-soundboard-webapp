import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundFileUploadComponent } from './sound-file-upload.component';

describe('SoundFileUploadComponent', () => {
  let component: SoundFileUploadComponent;
  let fixture: ComponentFixture<SoundFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
