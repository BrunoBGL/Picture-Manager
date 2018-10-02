import { HttpClient } from "@angular/common/http";
import { injectAttribute } from "@angular/core/src/render3";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService{
    constructor(private http: HttpClient){}

    listFromUser(userName: string){
       return this.http
         .get<Photo[]>(API+'/flavio/photos');
    }
}