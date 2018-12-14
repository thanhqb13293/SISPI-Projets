import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonReceptionSpiComponent } from './bon-reception-spi.component';

describe('BonReceptionSpiComponent', () => {
  let component: BonReceptionSpiComponent;
  let fixture: ComponentFixture<BonReceptionSpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonReceptionSpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonReceptionSpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
