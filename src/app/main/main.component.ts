import { LoggedInUser } from './../core/domain/loggedin.user';
import { AuthenService } from './../core/services/authen.service';
import { UtilityService } from './../core/services/utility.service';
import { SystemeConstants } from './../core/common/systeme.constants';
import { Component, OnInit } from '@angular/core';
import { urlConstants } from '../core/common/url.constants';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user: LoggedInUser;

  constructor(private UtilityService: UtilityService, private authenService: AuthenService) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem(SystemeConstants.CURRENT_USER));
  }

  logout() {
    localStorage.removeItem(SystemeConstants.CURRENT_USER);
    this.UtilityService.navigate(urlConstants.LOGIN);
  }

}
