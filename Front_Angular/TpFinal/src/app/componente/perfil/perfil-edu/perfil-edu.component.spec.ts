import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEduComponent } from './perfil-edu.component';

describe('PerfilEduComponent', () => {
  let component: PerfilEduComponent;
  let fixture: ComponentFixture<PerfilEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
