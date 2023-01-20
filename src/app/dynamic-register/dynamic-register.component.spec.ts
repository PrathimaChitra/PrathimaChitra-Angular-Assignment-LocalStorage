import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRegisterComponent } from './dynamic-register.component';

describe('DynamicRegisterComponent', () => {
  let component: DynamicRegisterComponent;
  let fixture: ComponentFixture<DynamicRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
