import { CourseService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector:'Courses',
    template:` 
    <input [value]="email" (keyup.enter)="onKeyUp()"/>   
    
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

    `


})
export class CoursesComponent {
title='My Courses';
courses=[];
imageUrl="http://lorempixel.com/400/200/";
isActive=false;
colSpan=2;
email="nomfundo@fa.com";
course={
    title:"Complete Angular Course",
    rating:4.7658,
    student:856777,
    price:76638,
    releaseDate:new Date(2020,2,10)

}
constructor(private courseService:CourseService)
{
    this.courses=courseService.getCourse();
 
}

onSave($event)
{
    $event.stopPropagation();
    console.log("button was clicked",$event);
    
}
onKeyUp()
{
        console.log(this.email);
}
// onDivClick()
// {
//     console.log("Div was clicked");
// }

// getArrayItems()
// {
    
//     return this.courses.getCourse();
// }
getTitle()
{
    return this.title;
    
}
}