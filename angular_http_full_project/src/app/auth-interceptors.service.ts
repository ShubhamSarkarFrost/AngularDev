import {HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {tap} from "rxjs/operators";


export class authInterceptorsService implements HttpInterceptor {
   intercept(req: HttpRequest<any>, next: HttpHandler) {
     console.log("Request is on Its Way")
     console.log(req.url)
     const modifyRequest = req.clone({
       headers : req.headers.append('Auth', 'xyz')
       })
     return next.handle(modifyRequest).pipe(tap(event =>{
       console.log(event)
       if(event.type === HttpEventType.Response){
         console.log('Response Arrived ,Body Data :')
         console.log(event.body)
       }
     }));
     }

}
