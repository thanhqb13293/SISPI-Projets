import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AuthenService } from './authen.service';
import { urlConstants } from '../common/url.constants';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private _router: Router;
  constructor(router: Router, private http: Http, private authenService: AuthenService) {
    this._router = router;
  }

  convertDateTime(date: Date) {
    var _formattedDate = new Date(date.toString());
    return _formattedDate.toDateString();
  }
  navigate(path: string) {
    this._router.navigate([path]);
  }

  navigateToLogin() {
    this._router.navigate([urlConstants.LOGIN]);
  }

  Unflatten = (arr: any[]): any[] => {
    let map = {};
    let roots: any[] = [];
    for (var i = 0; i < arr.length; i++) {
      let node = arr[i];
      node.children = [];
      map[node.Id] = i;
      if (node.ParentId !== null) {
        arr[map[node.ParentId]].children.push(node);
      }
      else {
        roots.push(node);
      }
      return roots;
    }
  }
}
