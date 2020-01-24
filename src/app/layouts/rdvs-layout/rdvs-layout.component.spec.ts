import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvsLayoutComponent } from './rdvs-layout.component';

describe('RdvsLayoutComponent', () => {
  let component: RdvsLayoutComponent;
  let fixture: ComponentFixture<RdvsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
