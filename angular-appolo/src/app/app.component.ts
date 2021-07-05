import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular';
import { Post } from './models/Post';

const GET_POSTS = gql`
  query{
    posts{
      title
      description
      creator {
        name
      }
    }
  }`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-appolo';
  IsWait = true;

  posts : Post[] = [];

  constructor(private apollo: Apollo){}

  ngOnInit():void{
    this.apollo.watchQuery<any>({
      query : GET_POSTS
    }).valueChanges
    .subscribe(({data})=>{
      this.posts = data.posts
      console.log(data);
      
    })
  }
}
