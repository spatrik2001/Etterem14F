import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooldalComponent } from './fooldal.component';

describe('FooldalComponent', () => {
  let component: FooldalComponent;
  let fixture: ComponentFixture<FooldalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooldalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
