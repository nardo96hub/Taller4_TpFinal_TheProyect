import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSkillCrearComponent } from './dialog-skill-crear.component';

describe('DialogSkillCrearComponent', () => {
  let component: DialogSkillCrearComponent;
  let fixture: ComponentFixture<DialogSkillCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSkillCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSkillCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
