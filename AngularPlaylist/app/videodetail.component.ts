import {Component, EventEmitter} from 'angular2/core';
import {Video} from './video';

@Component({
    selector: 'video-detail',
    templateUrl: 'app/videodetail.component.html',
    inputs: ['video']
})
export class VideoDetailComponent{
    private editTitle: boolean = false;
    private closeForm = new EventEmitter;
    onTitleClick(){
        this.editTitle = true;
    }
    onButtonOkClick(){
        this.closeForm.emit({});
    }
    ngOnChanges(){
        this.editTitle = false;
    }
    
}