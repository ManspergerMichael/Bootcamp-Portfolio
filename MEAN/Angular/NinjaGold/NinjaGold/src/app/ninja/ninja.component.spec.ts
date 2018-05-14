import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaComponent } from './ninja.component';

describe('NinjaComponent', () => {
  let component: NinjaComponent;
  let fixture: ComponentFixture<NinjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
