import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorsaistButtonComponent } from './borsaist-button.component';

describe('BorsaistButtonComponent', () => {
  let component: BorsaistButtonComponent;
  let fixture: ComponentFixture<BorsaistButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorsaistButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorsaistButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
