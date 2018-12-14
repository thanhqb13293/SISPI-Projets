import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../core/services/authen.service';
import { NotificationService } from '../core/services/notification.service';
import { MessageConstants } from '../core/common/message.constants';
import { SystemeConstants } from '../core/common/systeme.constants';
import { urlConstants } from '../core/common/url.constants';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  returnUrl: string;
  constructor(private authenService: AuthenService, private notificationService: NotificationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password).subscribe(data => {
      this.router.navigate([urlConstants.HOME]);
    }, error => {
      if (error.status == 400) {
        this.notificationService.printErrorMessage(MessageConstants.LOGIN_INFOS_NOT_CORRECT);
        this.loading = false;
      }
      else {
        this.notificationService.printErrorMessage(MessageConstants.SYSTEME_ERROR_MSG);
        this.loading = false;
      }
    });
  }
}
