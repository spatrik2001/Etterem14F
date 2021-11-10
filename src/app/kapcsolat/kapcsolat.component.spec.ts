import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapcsolatComponent } from './kapcsolat.component';

describe('KapcsolatComponent', () => {
  let component: KapcsolatComponent;
  let fixture: ComponentFixture<KapcsolatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KapcsolatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KapcsolatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
