import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonLivraisonReflexComponent } from './bon-livraison-reflex.component';

describe('BonLivraisonReflexComponent', () => {
  let component: BonLivraisonReflexComponent;
  let fixture: ComponentFixture<BonLivraisonReflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonLivraisonReflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonLivraisonReflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
