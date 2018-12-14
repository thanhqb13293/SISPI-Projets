import { UtilityService } from './../../core/services/utility.service';
import { DataService } from './../../core/services/data.service';
import { AuthenService } from './../../core/services/authen.service';
import { Component, OnInit } from '@angular/core';
import { SystemeConstants } from 'src/app/core/common/systeme.constants';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-bon-livraison-spi',
  templateUrl: './bon-livraison-spi.component.html',
  styleUrls: ['./bon-livraison-spi.component.css']
})
export class BonLivraisonSpiComponent implements OnInit {

  public baseFolder: string = SystemeConstants.BASE_API;
  public totalRow: number;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public BLSpi: any[];
  public filterKeyword: string = '';


  constructor(public _authenService: AuthenService, private _dataService: DataService,
    private notificationService: NotificationService,
    private _utilityService: UtilityService) {

  }

  ngOnInit() {
    this.search();
  }
  search() {
    this._dataService.get('/api/blSpi/getall?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '%keyword=' + this.filterKeyword)
      .subscribe((response: any) => {
        this.BLSpi = response.Items;
      }, error => this._dataService.handleError(error));
    
  }
}
