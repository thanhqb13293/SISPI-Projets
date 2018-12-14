import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonReceptionReflexComponent } from './bon-reception-reflex.component';

describe('BonReceptionReflexComponent', () => {
  let component: BonReceptionReflexComponent;
  let fixture: ComponentFixture<BonReceptionReflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonReceptionReflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonReceptionReflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
