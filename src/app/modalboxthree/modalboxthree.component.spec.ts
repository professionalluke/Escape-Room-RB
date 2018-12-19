import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalboxthreeComponent } from './modalboxthree.component';

describe('ModalboxthreeComponent', () => {
  let component: ModalboxthreeComponent;
  let fixture: ComponentFixture<ModalboxthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalboxthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalboxthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
