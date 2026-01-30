import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectSection } from './my-project-section';

describe('MyProjectSection', () => {
  let component: MyProjectSection;
  let fixture: ComponentFixture<MyProjectSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProjectSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
