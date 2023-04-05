import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

export interface AuthResponseData {
  kind: string;
  idToken : string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId: string;
  registered?:	boolean;
}




@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpUGILFxegb3iWfLvkQB_KZVsyR6vfdZw'
      , {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError))
  }

  login(email: string, password: string){
     return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpUGILFxegb3iWfLvkQB_KZVsyR6vfdZw',{
         email: email,
         password: password,
         returnSecureToken: true
     }
     ).pipe(catchError(this.handleError))
  }

  private handleError(errorRes : HttpErrorResponse){
    let errorMessage = 'An unknown Error Occured'
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage)
    }
    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'This Email Exists Already!!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This Email does not exist in Database!!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The Password Entered is Invalid !';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'We Are Facing some Unusual Activity Please Try Again Later';
        break;

    }
    return  throwError(errorMessage)
  }
}
