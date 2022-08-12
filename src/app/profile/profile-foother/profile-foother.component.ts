import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { footherArticles} from '../../moockdata/data.moock';

@Component({
  selector: 'app-profile-foother',
  templateUrl: './profile-foother.component.html',
  styleUrls: ['./profile-foother.component.scss']
})
export class ProfileFootherComponent implements OnInit {
  footherArticles=[...footherArticles]

  constructor() { }

  ngOnInit(): void {
  }

}
