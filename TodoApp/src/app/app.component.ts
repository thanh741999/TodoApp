import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos:any = [
    {title: 'Film introduction video',complete: false, date: 'Created Mar 21st @ 9:03 AM'},
    {title: 'Pay bills',complete: false, date: 'Created Mar 21st @ 9:03 AM'},
    {title: 'Walk with dog',complete: false, date: 'Created Mar 21st @ 9:03 AM'},
  ];
  title:string = '';
  isChecked = false;
  searchTodo:any;
  addTodo(e:any) {
    e.preventDefault();
    if(!(this.title == '') && (this.title >= 'A' && this.title <= 'z')) {
        this.todos.push({
        title: this.title,
        complete: false,
        date: 'Create '+ new DatePipe('en-US').transform(Date.now(),'medium'),
      })
      this.title = '';
    }
    else {
      alert('They cannot contain spaces and special characters and cannot begin with a digit');
    }
  }
  change(stt:number) {
    this.todos.map((todo:any,index:number)=>{
      if (stt == index) {
        todo.complete = !todo.complete;
      }
      return todo;
    })
  }
  onChecked() {
    this.isChecked = !this.isChecked;
  }
  deleteTodo(stt:number) {
    this.todos=this.todos.filter((todo:any,index:number)=>{
      if (stt != index) {
        return todo;
      }
    })
  }
}
