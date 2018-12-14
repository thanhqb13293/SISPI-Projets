import { StocksSpiModule } from './stocks-spi.module';

describe('StocksSpiModule', () => {
  let stocksSpiModule: StocksSpiModule;

  beforeEach(() => {
    stocksSpiModule = new StocksSpiModule();
  });

  it('should create an instance', () => {
    expect(stocksSpiModule).toBeTruthy();
  });
});
