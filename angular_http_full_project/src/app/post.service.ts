import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Post } from "./post.model";
import {map , catchError} from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import {errorObject} from "rxjs/internal-compatibility";


@Injectable({providedIn: "root"})
export class PostService {

  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title:string, content:string){
    //... send http request
    const postData: Post ={title:title, content:content}
    this.http.post<{name: string}>('https://angular-complete-guide-ef41a-default-rtdb.firebaseio.com/posts.json',postData).subscribe((responseData) =>
    {
      console.log(responseData)
    }, error =>{
      this.error.next(error.message)
    })
  }

  fetchPost(){
    //.... fetch http request
   return this.http.get<{ [key: string]: Post }>('https://angular-complete-guide-ef41a-default-rtdb.firebaseio.com/posts.json', {
     headers: new HttpHeaders({
       'Custom-Header': 'hello'
     }),
     params: new HttpParams().set('print', 'pretty')

   }
   )
        .pipe(map(responseData => {
            const postArray: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postArray.push({...responseData[key], id: key})
              }

            }
            return postArray;
          }),
          catchError(errorRes => {
            // send the error to analytics server
            return throwError(errorRes)
          })
        );
    }

   deletePost(){
      return  this.http.delete('https://angular-complete-guide-ef41a-default-rtdb.firebaseio.com/posts.json')
   }
}
