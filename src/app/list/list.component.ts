
import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../userinfo.model'
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Output() featureSelected: EventEmitter<any> = new EventEmitter();
  
  userName: string = "";
  response: any;
  buttons : any;
  userDB = [];
  currentPage: number = 0;
  usersToShow = [];
  constructor(private http: HttpClient) {
  
  } 

    onSelect(num: any){
      this.featureSelected.emit(num);
    }

    choosePage(page: number){
      for (let i = 0; i < 10; i++){
        this.usersToShow[i] = this.userDB[page*10 + i];
      }
      function changeColor(i){

        this.buttons = document.querySelectorAll(".button_paginator");
        this.buttons.forEach(item =>{
          item.classList.remove("green");
        });
        this.buttons[i].classList.add("green");

        }
      
        setTimeout(changeColor, 1, page);
    }



   search(){
    this.http.get('https://api.github.com/search/repositories?q=' + this.userName + '+&sort=stars')
      .subscribe((response) => {
        this.response = response;  
        for (let i = 0; i < 30; i++){
          this.userDB[i] = new UserInfo(
            this.response['items'][i].name, 
            this.response['items'][i].stargazers_count,
            this.response['items'][i].updated_at,
            this.response['items'][i].owner.html_url,
            this.response['items'][i].owner.avatar_url,
            this.response['items'][i].owner.login,
            this.response['items'][i].owner.html_url,
            this.response['items'][i].languages_url,
            this.response['items'][i].description,
            this.response['items'][i].contributors_url
            )
        }  
        this.choosePage(0);
      })
   }

  
  ngOnInit(): void {
  }
}
