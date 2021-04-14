import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostinstanceComponent } from './postinstance.component';

describe('PostinstanceComponent', () => {
  let component: PostinstanceComponent;
  let fixture: ComponentFixture<PostinstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostinstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostinstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
