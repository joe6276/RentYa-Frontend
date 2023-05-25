import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component  implements OnInit {
constructor(private sampleService:SampleService){}
  show!:boolean
ngOnInit(): void {
  this.sampleService.showParagraph.subscribe(value=>{
    this.show=value
  })

}
}
