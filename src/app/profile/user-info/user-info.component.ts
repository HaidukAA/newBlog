import { Component, OnInit, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/data.model';
import { users } from '../../moockdata/data.moock';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  users=users;
  user: IUser | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));

    this.user = users.find(user => user.id === userIdFromRoute);
  
  }

}
