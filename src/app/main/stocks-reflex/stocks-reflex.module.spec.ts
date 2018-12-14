import { StocksReflexModule } from './stocks-reflex.module';

describe('StocksReflexModule', () => {
  let stocksReflexModule: StocksReflexModule;

  beforeEach(() => {
    stocksReflexModule = new StocksReflexModule();
  });

  it('should create an instance', () => {
    expect(stocksReflexModule).toBeTruthy();
  });
});
