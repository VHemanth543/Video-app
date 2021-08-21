import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public expandedKeys: any[] = ["0", "1"];
  public selectedKeys: any[] = ["Arial view of roads"];

  Val = 0;

  name = "Angular";
  @ViewChild("videoPlayer", { static: false })
  videoplayer!: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  mute(){
    var myVideo: any = document.getElementById("my_video_1");
    var img : any = document.getElementById("image");
    var slider : any = document.getElementById("myRange");
    if(myVideo.muted){
      myVideo.muted = false;
      img.src = "../../assets/download1.png";
      myVideo.volume = slider.value;
      slider.style.visibility = 'hide';

    }
    else{
      myVideo.muted = true;
      img.src = "../../assets/mute.png";
      slider.style.visibility = 'visible';
    }
  }
  volume(value : any){
    var myVideo : any = document.getElementById("my_video_1");
    var slider : any = document.getElementById("myRange");
    console.log(slider.value)
    if(myVideo.muted){
      return;
    }
    else{
      myVideo.volume = slider.value;
    }
    
  }
  play() {
    var myVideo: any = document.getElementById("my_video_1");
    var slider : any = document.getElementById("myRange");
    console.log("volume")
    console.log(slider.value)
    let vol = slider.value/10;
    myVideo.volume = vol;
    
    if (myVideo.paused)
    { 
      myVideo.play();
     
    }

    
  }

  pause(){
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.play) myVideo.pause();
  }

  skip(value: number) {
    let video: any = document.getElementById("my_video_1");
    let duration = video.duration/100;
    if(duration<30){
       if(duration==10){
          value=1;
          video.currentTime += value;
      }
      if(duration==20){
          value=2;
          video.currentTime += value;
      }
      else{
        video.currentTime += 3;
      }
    }
    else{
      video.currentTime += value;
    }
    
    
  }
  skip2x(value: number){
    let video: any = document.getElementById("my_video_1");
    let duration = video.duration;
    if(duration<30){
      if(duration==10){
          value=2;video.currentTime += value;
      }
      if(duration==20){
          value=4;video.currentTime += value;
      }else{
        video.currentTime += 6;
      }
    }
    else{
      video.currentTime += value;
    }

  }
  skip3x(value: number){
    let video: any = document.getElementById("my_video_1");
    let duration = video.duration;
    if(duration<30){
      if(duration==10){
          value=3;video.currentTime += value;
      }
      if(duration==20){
          value=6;video.currentTime += value;
      }else{
        video.currentTime += 7;
      }
    }else{
      video.currentTime += value;
    }

  }
  skip4x(value: number){
    let video: any = document.getElementById("my_video_1");
    let duration = video.duration;
    if(duration<30){
      if(duration==10){
          value=4;video.currentTime += value;
      }
      if(duration==20){
          value=8;video.currentTime += value;
      }else{
        video.currentTime += 8;
      }
    }else{
      video.currentTime += value;
    }

  }

  public data: any[] =
  [

         { name:'play1', 
           items:
           [
             {name: 'Arial view of roads',
               source: "../../assets/Ocean Sunset View.mp4",
               thumbnail: 'https://res.cloudinary.com/hackafro/image/upload/c_scale,h_100,w_150/v1554641467/Screenshot_2019-04-07_at_1.39.17_PM_purcgf.png'
             },
             {
              name: 'Blur colorful lights',
               source: '../../assets/Pexels Videos 1093664.mp4',
               thumbnail:'https://res.cloudinary.com/hackafro/image/upload/c_scale,h_100,w_150/v1554641309/Screenshot_2019-04-07_at_1.46.12_PM_ztnroy.png',
             },
             
            ]
      
          },
          {
            name:'play2',
            items:[
              {
                name: 'Amazing view of the sunset',
                 source:"../../assets/Pexels Videos 1204911.mp4",
                 thumbnail:'https://res.cloudinary.com/hackafro/image/upload/c_scale,h_100,w_150/v1554641380/Screenshot_2019-04-07_at_1.46.38_PM_f6nyr4.png',
              },
              { name:'plar2-1', 
                items:[{
                  name: 'Lighthouse by the sea',
                source: '../../assets/Pexels Videos 1536347.mp4',
                 thumbnail:'https://res.cloudinary.com/hackafro/image/upload/c_scale,h_100,w_150/v1554641395/Screenshot_2019-04-07_at_1.46.26_PM_xgbfdq.png',

                }]
                
              },

            ]
          }
    
  ];
  
  public hasChildren = (item: any) => item.items && item.items.length > 0;
  public fetchChildren = (item: any) => of(item.items);

  constructor() {
    


   }
  ngOnInit(): void {
   let dummy_item = ""
   console.log(this.data)
  }



 

}
