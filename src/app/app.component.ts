import { Component,
         trigger,
         state,
         animate,
         style,
         transition,
         group
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('lightOnOff',[
      state('off',style({
        backgroundColor:'black'
      })),
      state('on',style({
        backgroundColor:'white'
      })),
      transition('off=>on',group([
        animate('2s',style({transform:'rotate(90deg)'})),
        animate("2s 1s",style({opacity:0}))
      ])),
      transition("on=>off",group([
        animate("2s",style({transform:'rotate(-90deg)'})),
        animate("1s",style({width:"30px"}))
      ]))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  roomState : string = 'off';

  change(){
    this.roomState = (this.roomState==='off') ? "on" : "off";
  }

  animationStart(event:any){
    console.log("start");
    console.log(event.totalTime);
    console.log(event.fromState);
    console.log(event.toState);
  };

  animationDone(event:any){
    console.log(event.totalTime);
    console.log(event.fromState);
    console.log(event.toState);
    console.log("Done");
  };

}
