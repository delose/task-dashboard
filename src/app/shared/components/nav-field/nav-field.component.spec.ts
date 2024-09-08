import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFieldComponent } from './nav-field.component';

describe('NavFieldComponent', () => {
  let component: NavFieldComponent;
  let fixture: ComponentFixture<NavFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
