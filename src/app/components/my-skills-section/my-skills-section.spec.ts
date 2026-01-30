import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsSection } from './my-skills-section';

describe('MySkillsSection', () => {
  let component: MySkillsSection;
  let fixture: ComponentFixture<MySkillsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySkillsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySkillsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
