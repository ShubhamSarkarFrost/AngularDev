import {HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {tap} from "rxjs/operators";


export class authInterceptorsService implements HttpInterceptor {
   intercept(req: HttpRequest<any>, next: HttpHandler) {
     const modifyRequest = req.clone({
       headers : req.headers.append('Auth', 'xyz')
       })
     return next.handle(modifyRequest)
     }

}
