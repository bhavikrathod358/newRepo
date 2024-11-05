import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicecallComponent } from './voicecall.component';

describe('VoicecallComponent', () => {
  let component: VoicecallComponent;
  let fixture: ComponentFixture<VoicecallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoicecallComponent]
    });
    fixture = TestBed.createComponent(VoicecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
