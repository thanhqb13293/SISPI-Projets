import { BonLivraisonReflexModule } from './bon-livraison-reflex.module';

describe('BonLivraisonReflexModule', () => {
  let bonLivraisonReflexModule: BonLivraisonReflexModule;

  beforeEach(() => {
    bonLivraisonReflexModule = new BonLivraisonReflexModule();
  });

  it('should create an instance', () => {
    expect(bonLivraisonReflexModule).toBeTruthy();
  });
});
