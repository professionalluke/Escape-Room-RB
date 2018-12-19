import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalboxtextthreeComponent } from './modalboxtextthree.component';

describe('ModalboxtextthreeComponent', () => {
  let component: ModalboxtextthreeComponent;
  let fixture: ComponentFixture<ModalboxtextthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalboxtextthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalboxtextthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
