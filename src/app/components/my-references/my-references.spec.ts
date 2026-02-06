import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReferences } from './my-references';

describe('MyReferences', () => {
  let component: MyReferences;
  let fixture: ComponentFixture<MyReferences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReferences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReferences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
