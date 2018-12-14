import { BonReceptionSpiModule } from './bon-reception-spi.module';

describe('BonReceptionSpiModule', () => {
  let bonReceptionSpiModule: BonReceptionSpiModule;

  beforeEach(() => {
    bonReceptionSpiModule = new BonReceptionSpiModule();
  });

  it('should create an instance', () => {
    expect(bonReceptionSpiModule).toBeTruthy();
  });
});
