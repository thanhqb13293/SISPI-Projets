import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksSpiComponent } from './stocks-spi.component';

describe('StocksSpiComponent', () => {
  let component: StocksSpiComponent;
  let fixture: ComponentFixture<StocksSpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksSpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksSpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
