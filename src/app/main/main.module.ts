import { AuthenService } from './../core/services/authen.service';
import { UtilityService } from './../core/services/utility.service';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { BonLivraisonSpiComponent } from './bon-livraison-spi/bon-livraison-spi.component';
import { BonReceptionSpiComponent } from './bon-reception-spi/bon-reception-spi.component';
import { BonLivraisonReflexComponent } from './bon-livraison-reflex/bon-livraison-reflex.component';
import { BonReceptionReflexComponent } from './bon-reception-reflex/bon-reception-reflex.component';
import { StocksSpiComponent } from './stocks-spi/stocks-spi.component';
import { StocksReflexComponent } from './stocks-reflex/stocks-reflex.component';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    UserModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent, BonLivraisonSpiComponent, BonReceptionSpiComponent, BonLivraisonReflexComponent, BonReceptionReflexComponent, StocksSpiComponent, StocksReflexComponent],
  providers: [UtilityService, AuthenService]
})
export class MainModule { }
