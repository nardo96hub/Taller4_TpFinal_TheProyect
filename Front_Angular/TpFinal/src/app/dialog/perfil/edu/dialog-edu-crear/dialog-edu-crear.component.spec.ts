import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEduCrearComponent } from './dialog-edu-crear.component';

describe('DialogEduCrearComponent', () => {
  let component: DialogEduCrearComponent;
  let fixture: ComponentFixture<DialogEduCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEduCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEduCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
