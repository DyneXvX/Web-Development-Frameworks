import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctumComponent } from './sanctum.component';

describe('SanctumComponent', () => {
  let component: SanctumComponent;
  let fixture: ComponentFixture<SanctumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
