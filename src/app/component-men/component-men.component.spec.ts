import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMenComponent } from './component-men.component';

describe('ComponentMenComponent', () => {
  let component: ComponentMenComponent;
  let fixture: ComponentFixture<ComponentMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
