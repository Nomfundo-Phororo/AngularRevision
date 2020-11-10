import { CourseService } from './courses.service';
import { Component } from '@angular/core';  

@Component({
    selector:'Courses',
    template:` 
    {{text | summary}}
    `


}) 
export class CoursesComponent {
    title='My Courses';
    courses=[];
    imageUrl="http://lorempixel.com/400/200/";
    isActive=false;
    colSpan=2;
    email="nomfundo@fa.com";
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    course={
        title:"Complete Angular Course",
        rating:4.7658,
        students:856777,
        price:76638,
        releaseDate:new Date(2020,2,10)

    }
constructor(private courseService:CourseService)
{
    this.courses = courseService.getCourse();
 
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