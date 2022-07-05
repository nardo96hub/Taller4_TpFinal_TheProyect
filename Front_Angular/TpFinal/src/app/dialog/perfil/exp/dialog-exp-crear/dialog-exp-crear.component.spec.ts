import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExpCrearComponent } from './dialog-exp-crear.component';

describe('DialogExpCrearComponent', () => {
  let component: DialogExpCrearComponent;
  let fixture: ComponentFixture<DialogExpCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExpCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExpCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
