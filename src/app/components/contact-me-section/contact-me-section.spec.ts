import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeSection } from './contact-me-section';

describe('ContactMeSection', () => {
  let component: ContactMeSection;
  let fixture: ComponentFixture<ContactMeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMeSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
