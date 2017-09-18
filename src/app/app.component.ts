import { Component,
         trigger,
         state,
         animate,
         style,
         transition,
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
      transition('off=>on',[animate('2s')]),
      transition('on=>off',[animate('2s')])
    ])
  ]
})
export class AppComponent {
  title = 'app';
  roomState : string = 'off';

  change(){
    this.roomState = (this.roomState==='off') ? "on" : "off";
  }
}
