import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() feature: any;
  contributors: any = [];
  languages: any = [];
  responseLan: any;
  responseCon: any;
  constructor(private http: HttpClient) { 
    
}
  showContributors(){
    this.http.get(this.feature['mainContr'])
      .subscribe((response) => {
        this.responseCon = response;
        console.log(this.responseCon);
        for(let i = 0; i < 10; i++){
          this.contributors[i] = this.responseCon[i]['login'];
        }
            })  
  }
  showLanguages(){
    this.http.get(this.feature['languages'])
    .subscribe((response) => {
      this.responseLan = response;
      this.languages = Object.keys(this.responseLan);
          })  
  }
 
  ngOnInit(): void {
    
  }
}
