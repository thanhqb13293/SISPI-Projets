import { BonReceptionReflexModule } from './bon-reception-reflex.module';

describe('BonReceptionReflexModule', () => {
  let bonReceptionReflexModule: BonReceptionReflexModule;

  beforeEach(() => {
    bonReceptionReflexModule = new BonReceptionReflexModule();
  });

  it('should create an instance', () => {
    expect(bonReceptionReflexModule).toBeTruthy();
  });
});
