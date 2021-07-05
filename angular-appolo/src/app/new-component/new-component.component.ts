import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

  IsWait = true;
  result :any
  posts : any = []
  users : any = []
  constructor(private _http : HttpClient) { }

  ngOnInit(): void {
    this.getPosts()
    
  }

  getPosts() {
    this._http.get("http://localhost:3001/posts/").subscribe((res)=>{
      this.result = res
      this.posts = this.result.data
      this.getUserbyPost()
    });
  }

getUserbyPost() {
    let UserIds = this.posts.map( (post:any) => {return post.creator})    
    for(let i=0;i<=UserIds.length;i++){
      this._http.get("http://localhost:3001/users/" + UserIds[i]).subscribe((res)=>{
      this.result = res
      this.users.push(this.result.data)
      this.posts[i].name = this.result.data.name 
      })
    }
}

}
