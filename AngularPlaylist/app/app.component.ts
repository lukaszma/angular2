import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import VideoListComponent from './videolist.component';
@Component({
    selector: 'my-app',
    template: '<h1 class="jumbotron">{{title}}</h1><videolist></videolist>',
    directives: [VideoListComponent]
})
export class AppComponent { 
    title = Config.TITLE_PAGE;
    videos: Array<Video>;
    
    constructor(){
        this.videos = [
            new Video(1,"Test","www.test.com","Test	Description"),
            new Video(2,"Test	2","www.test2.com","a")
        ]
    }
}