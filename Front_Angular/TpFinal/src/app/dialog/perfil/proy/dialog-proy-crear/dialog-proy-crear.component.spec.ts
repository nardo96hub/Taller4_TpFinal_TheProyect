import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProyCrearComponent } from './dialog-proy-crear.component';

describe('DialogProyCrearComponent', () => {
  let component: DialogProyCrearComponent;
  let fixture: ComponentFixture<DialogProyCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProyCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProyCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
