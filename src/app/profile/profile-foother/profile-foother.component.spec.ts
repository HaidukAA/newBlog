import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFootherComponent } from './profile-foother.component';

describe('ProfileFootherComponent', () => {
  let component: ProfileFootherComponent;
  let fixture: ComponentFixture<ProfileFootherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFootherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFootherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
