import { Component, OnInit } from '@angular/core';
import { newests } from '../../moockdata/data.moock';
@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss']
})
export class NewestComponent implements OnInit {
  newests = [...newests];
  constructor() { }

  ngOnInit(): void {
  }

}
