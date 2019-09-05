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
    console.info("constructor run");
  }

  ngOnInit() {
    console.info("ngOnInit run");
    // 对象实现数据绑定仍然存在问题
    // this.person.name = "春秋五霸";
    // this.person.age = 20;
    // this.person.sex = '保密';
  }

  onSubmit(){
    alert('你好，点击事件');
  }
}

interface Person {
  name: string;
  age: number;
  // 不确定的类型 用 any 修饰
  sex: any;
}
