import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalboxtwoComponent } from './modalboxtwo.component';

describe('ModalboxtwoComponent', () => {
  let component: ModalboxtwoComponent;
  let fixture: ComponentFixture<ModalboxtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalboxtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalboxtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
