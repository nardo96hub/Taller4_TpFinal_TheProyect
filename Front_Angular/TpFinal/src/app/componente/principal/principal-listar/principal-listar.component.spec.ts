import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalListarComponent } from './principal-listar.component';

describe('PrincipalListarComponent', () => {
  let component: PrincipalListarComponent;
  let fixture: ComponentFixture<PrincipalListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
