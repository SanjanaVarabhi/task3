import { Component }from "@angular/core";
import {Http} from "@angular/http";

@Component({
    selector:"app-post",
    templateUrl:'./post.component.html'
})

export class postComponent{
    posts:any[];
    constructor(http:Http){
    http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res)=>{
        console.log(res.json());
        this.posts=res.json();
    })

}}