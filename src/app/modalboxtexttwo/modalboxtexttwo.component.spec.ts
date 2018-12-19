import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalboxtexttwoComponent } from './modalboxtexttwo.component';

describe('ModalboxtexttwoComponent', () => {
  let component: ModalboxtexttwoComponent;
  let fixture: ComponentFixture<ModalboxtexttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalboxtexttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalboxtexttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
