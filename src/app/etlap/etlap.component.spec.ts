import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtlapComponent } from './etlap.component';

describe('EtlapComponent', () => {
  let component: EtlapComponent;
  let fixture: ComponentFixture<EtlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtlapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
