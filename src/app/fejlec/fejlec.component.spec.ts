import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FejlecComponent } from './fejlec.component';

describe('FejlecComponent', () => {
  let component: FejlecComponent;
  let fixture: ComponentFixture<FejlecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FejlecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FejlecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
