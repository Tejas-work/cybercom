import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  base=environment.base;
  base_url =environment.base_url;
  constructor(private http:HttpClient) { }

  addUser(body: any){

    try {
      console.log(this.base+this.base_url);
      return this.http.post<any>(this.base+this.base_url,body);
    } catch (error:any) {
      return throwError(() => new Error(error));
    }

  }

  getUsers(){
    try
    {
      return this.http.get<any>(this.base+this.base_url)
    }catch(error:any){
      return throwError(()=> new Error(error));
    }
  }

  updateUser(id:any,user:any){

    try {
      return this.http.put<any>(this.base+this.base_url+"/"+id,user)
    } catch (error:any) {
      return throwError(()=>new Error(error));

    }
  }
  

  deleteUser(id:any){
    try {
     return this.http.delete<any>(this.base+this.base_url+"/"+id)

    } catch (error:any) {
      return throwError(()=>new Error(error));
    }
  }

  getUser(id:any){
    try {
      return this.http.get<any>(this.base+this.base_url+"/"+id)
    } catch (error:any) {
      return throwError(()=>new Error(error));

    }
  }

}
