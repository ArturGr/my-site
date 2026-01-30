import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaButtons } from './social-media-buttons';

describe('SocialMediaButtons', () => {
  let component: SocialMediaButtons;
  let fixture: ComponentFixture<SocialMediaButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaButtons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
