import { Component, OnInit } from '@angular/core';
import { populars } from '../../moockdata/data.moock';

@Component({
  selector: 'app-popular-articles',
  templateUrl: './popular-articles.component.html',
  styleUrls: ['./popular-articles.component.scss']
})
export class PopularArticlesComponent implements OnInit {
  populars = [...populars];
  
  constructor() { }

  ngOnInit(): void {
  }
  
}



