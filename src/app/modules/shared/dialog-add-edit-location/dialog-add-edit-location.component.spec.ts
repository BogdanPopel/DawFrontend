import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEditLocationComponent } from './dialog-add-edit-location.component';

describe('DialogAddEditLocationComponent', () => {
  let component: DialogAddEditLocationComponent;
  let fixture: ComponentFixture<DialogAddEditLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddEditLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddEditLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
