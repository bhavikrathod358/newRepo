import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHealthComponent } from './home-health.component';

describe('HomeHealthComponent', () => {
  let component: HomeHealthComponent;
  let fixture: ComponentFixture<HomeHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHealthComponent]
    });
    fixture = TestBed.createComponent(HomeHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
