import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  array = ['aaa','bbb','ccc','ddd'];

  baiduImgUrl:string = "https://www.baidu.com/img/bd_logo1.png";

}
