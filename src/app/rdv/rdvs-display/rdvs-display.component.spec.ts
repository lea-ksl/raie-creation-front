import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvsDisplayComponent } from './rdvs-display.component';

describe('RdvsDisplayComponent', () => {
  let component: RdvsDisplayComponent;
  let fixture: ComponentFixture<RdvsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
