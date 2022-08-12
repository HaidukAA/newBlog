import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IReaction } from '../models/data.model';
import { reactions } from '../moockdata/data.moock';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss']
})



export class ReactionComponent implements OnInit {

  reactions = [...reactions];

  @Output() neweRactionEvent = new EventEmitter<any>();//---! doesn't use
  
  addNewReaction(value: string) {             
    this.neweRactionEvent.emit(value);//---! doesn't use
  }

  constructor(
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
      
  }

}
