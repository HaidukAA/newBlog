import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../models/data.model';
import { articles } from '../moockdata/data.moock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles=articles;
  article: IArticle | undefined;

  constructor(
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
      
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = Number(routeParams.get('articleId'));

    // Find the product that correspond with the id provided in route.
    this.article = articles.find(article => article.id === articleIdFromRoute);
  }

}
