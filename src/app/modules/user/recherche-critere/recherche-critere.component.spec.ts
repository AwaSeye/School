import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheCritereComponent } from './recherche-critere.component';

describe('RechercheCritereComponent', () => {
  let component: RechercheCritereComponent;
  let fixture: ComponentFixture<RechercheCritereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheCritereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
