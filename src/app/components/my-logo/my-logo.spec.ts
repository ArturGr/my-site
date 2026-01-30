import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLogo } from './my-logo';

describe('MyLogo', () => {
  let component: MyLogo;
  let fixture: ComponentFixture<MyLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
