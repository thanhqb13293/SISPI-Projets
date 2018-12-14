import { BonLivraisonSpiModule } from './bon-livraison-spi.module';

describe('BonLivraisonSpiModule', () => {
  let bonLivraisonSpiModule: BonLivraisonSpiModule;

  beforeEach(() => {
    bonLivraisonSpiModule = new BonLivraisonSpiModule();
  });

  it('should create an instance', () => {
    expect(bonLivraisonSpiModule).toBeTruthy();
  });
});
