import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {VideoListComponent} from './videolist.component';
import {VideoDetailComponent} from './videodetail.component';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [VideoListComponent, VideoDetailComponent]
})
export class AppComponent { 
    title :string;
    videos: Array<Video>;
    selectedVideo: Video;
    
    constructor(_config: Config){
        this.title = _config.TITLE_PAGE;
        this.videos = [
            new Video(1,"Who got the funk","https://www.youtube.com/embed/zMBTvuUlm98","Trochę funky"),
            new Video(2,"Down the road","https://www.youtube.com/embed/YzR8BCmV9Ew","electro music with funk")
        ]
        
    }

    
    onSelectVideo(video){
        console.log('da');
        // console.log(JSON.stringify(video));
        this.selectedVideo = video;
    }
    onCloseDetailForm(event){
        this.selectedVideo = null;  
    }
    newVideo(){
        var v: Video = new Video(this.videos.length +1, "New video");
        this.videos.push(v);
        this.selectedVideo = v;       
    }
}