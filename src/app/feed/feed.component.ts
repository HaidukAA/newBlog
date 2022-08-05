import { Component, OnInit } from '@angular/core';
import { articles } from '../moockdata/data.moock';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  articles = [...articles];
  constructor() { }

  ngOnInit(): void {
  }

}
