import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvDisplayComponent } from './rdv-display.component';

describe('RdvDisplayComponent', () => {
  let component: RdvDisplayComponent;
  let fixture: ComponentFixture<RdvDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
