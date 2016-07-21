import {Component, Inject} from 'angular2/core';
import {NewTodo} from './NewTodo';

import {TasksService} from '../services/TasksService';

@Component({
    selector: 'todo-list',
    directives: [NewTodo],
    template: `
        <ul class="nav nav-pills nav-stacked">
            <li role="presentation" *ngFor="#task of todos">
                <a href="#"
                   (click)="selectNewTask(task)"
                   [ngClass]="{'task-done': task.done}">
                    {{ task.name }}
                </a>
            </li>
        </ul>

        <new-todo></new-todo>
    `
})
export class TodoList {

    private todos = [];

    constructor(@Inject(TasksService) private TasksService) {
       // TasksService.tasks.subscribe(newTasks => this.todos = newTasks);

       // TasksService.fetchTasks();
        this.todos = [
                    {
                        id: "47665aae-4079-45ee-a789-e8145e1cde1e",
                        name: "Went to ECMAScript 6 conference",
                        description: "Great intro to ES6 features. The problem that still remains though is tooling. I find it pretty hard to decide on what to use, even though there are not many. I tried 6to5 and got pretty good results but Traceur is maintained by Google which makes the way to go hard to choose. I would be happy to hear some opinions on this.",
                        done: false
                    },
                    {
                        id: "bd3cd2f3-1889-4877-afa2-81fcea66c089",
                        name: "Learn Angular 2",
                        description: "Angular 2 is the next version of Google's massively popular MV* framework for building complex applications in the browser (and beyond).",
                        done: false
                    },
                    {
                        id: "256866d3-551c-431e-82bb-34cb65f59596",
                        name: "Buy book about TypeScript",
                        description: "TypeScript Revealed is a quick 100-page guide to Anders Hejlsberg's new take on JavaScript. With this brief, fast-paced introduction to TypeScript, .NET, Web and Windows 8 application developers who are already familiar with JavaScript will easily get up to speed with TypeScript",
                        done: true
                    }
                ];
    }

    selectNewTask(task) {
        //this.TasksService.selectTask(task);
        console.log(task);
    }
}
