import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'Angular';
  person: Person;
  name: string;

  constructor() {
    console.info('constructor run');
  }

  ngOnInit() {
    console.info('ngOnInit run');
    this.person = {
      name: '春秋五霸',
      age: 1,
      sex: '未知'
    };
  }

  onSubmit() {
    alert('你好，点击事件');
  }
}

interface Person {
  name: string;
  age: number;
  // 不确定的类型 用 any 修饰
  sex: any;
}
