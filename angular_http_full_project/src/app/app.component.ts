import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import {Post} from "./post.model";
import { PostService } from './post.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  iserror = null;
  private errorSub : Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.errorSub =  this.postService.error.subscribe(errorMessage =>{
      this.iserror = errorMessage
    });
    this.isFetching = true
    this.postService.fetchPost().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts
    }, error =>{
      this.isFetching = false;
      this.iserror = `${error.status} - ${error.statusText}`;
    })
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData);
    this.postService.createAndStorePost(postData.title, postData.content)

  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true
    this.postService.fetchPost().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts
    }, error =>{
      this.isFetching = false;
      this.iserror = `${error.status} - ${error.statusText}`;
    })
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePost().subscribe(() =>{
      this.loadedPosts =[]
    })
  }

  onHandleError(){
    this.iserror = null;
  }


  ngOnDestroy() {
    this.errorSub.unsubscribe()
  }

}
