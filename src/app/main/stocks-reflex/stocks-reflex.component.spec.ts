import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksReflexComponent } from './stocks-reflex.component';

describe('StocksReflexComponent', () => {
  let component: StocksReflexComponent;
  let fixture: ComponentFixture<StocksReflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksReflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksReflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
