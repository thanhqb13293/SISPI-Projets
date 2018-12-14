import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonLivraisonSpiComponent } from './bon-livraison-spi.component';

describe('BonLivraisonSpiComponent', () => {
  let component: BonLivraisonSpiComponent;
  let fixture: ComponentFixture<BonLivraisonSpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonLivraisonSpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonLivraisonSpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
