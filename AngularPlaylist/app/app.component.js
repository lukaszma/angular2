System.register(['angular2/core', './config.service', './video', './videolist.component', './videodetail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_service_1, video_1, videolist_component_1, videodetail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (video_1_1) {
                video_1 = video_1_1;
            },
            function (videolist_component_1_1) {
                videolist_component_1 = videolist_component_1_1;
            },
            function (videodetail_component_1_1) {
                videodetail_component_1 = videodetail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_config) {
                    this.title = _config.TITLE_PAGE;
                    this.videos = [
                        new video_1.Video(1, "Who got the funk", "https://www.youtube.com/embed/zMBTvuUlm98", "Trochę funky"),
                        new video_1.Video(2, "Down the road", "https://www.youtube.com/embed/YzR8BCmV9Ew", "electro music with funk")
                    ];
                }
                AppComponent.prototype.onSelectVideo = function (video) {
                    console.log('da');
                    // console.log(JSON.stringify(video));
                    this.selectedVideo = video;
                };
                AppComponent.prototype.onCloseDetailForm = function (event) {
                    this.selectedVideo = null;
                };
                AppComponent.prototype.newVideo = function () {
                    var v = new video_1.Video(this.videos.length + 1, "New video");
                    this.videos.push(v);
                    this.selectedVideo = v;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [videolist_component_1.VideoListComponent, videodetail_component_1.VideoDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [config_service_1.Config])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map