import { Component } from '@angular/core';
import { SampleService } from '../sample.service';
import { animate, state, style,keyframes, transition, trigger, group } from '@angular/animations';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  animations:[
    trigger('buttonTrigger', [
      state('small', style({
        transform:'scale(1)'
      })),
      state('large', style({
        transform:'scale(1.4)',
        color:'red'
      })),

      // transition('small=>large', animate(1000)),
      transition('large<=>small', animate('1s 0s ease-out'))
    ]),

    trigger('listTrigger', [
        state('liststate', style({
          opacity:'1'
        })),

        transition('void => *', [
          // style({
          //   opacity:'0',
          //   transform:'translateY(100px)'
          // }),
          // animate(1000)

          group([
            animate("1s", style({ background: "black" })),
            animate("2s", style({ color: "white" }))
          ])
        ]),

        transition('* =>void', [
          // style({
          //   opacity:'0',
          //   transform:'translateX(-100px)'
          // }),
          // animate(1000)

          animate(2000, keyframes([
            style({
                opacity:'0',
                transform:'translateX(-100px)',
                offset:0,
                color:'red'
              }),
              style({
                opacity:'0.3',
                transform:'translateX(-80px)',
                offset:0.4,
                color:'blue'
              }),
              style({
                opacity:'0.5',
                transform:'translateX(-70px)',
                offset:0.8,
                color:'purple'
              }),
              style({
                opacity:'1',
                transform:'translateX(-20px)',
                offset:1,
                color:'green'
              })
          ]))
        ])
    ])
  ]
})
export class SampleComponent {
  state='small'
  state1='liststate'
  items=['Javascript', 'Java', 'C#','GoLang']
  constructor(private sampleService:SampleService){}
  show(){
      // this.sampleService.showParagraph.next(true)
      this.state=this.state==='small'?'large':'small'
      this.items.push('C')
  }
  delete(id:number){
    this.items.splice(id,1)
  }
}
