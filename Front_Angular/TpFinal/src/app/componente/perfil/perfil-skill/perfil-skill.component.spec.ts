import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSkillComponent } from './perfil-skill.component';

describe('PerfilSkillComponent', () => {
  let component: PerfilSkillComponent;
  let fixture: ComponentFixture<PerfilSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
