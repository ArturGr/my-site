import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesSection } from './references-section';

describe('ReferencesSection', () => {
  let component: ReferencesSection;
  let fixture: ComponentFixture<ReferencesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
