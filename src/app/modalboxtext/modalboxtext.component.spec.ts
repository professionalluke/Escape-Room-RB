import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalboxtextComponent } from './modalboxtext.component';

describe('ModalboxtextComponent', () => {
  let component: ModalboxtextComponent;
  let fixture: ComponentFixture<ModalboxtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalboxtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalboxtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
