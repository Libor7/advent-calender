import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent implements OnInit, AfterViewInit, OnDestroy {
  private unlisten: () => void;
  @Input() parentWidth: number;
  @Input() imageNum: number;
  @ViewChild('door', {static: true}) door: ElementRef;
  @ViewChild('inner', {static: true}) innerImg: ElementRef;
  @ViewChild('song', {static: true}) song: ElementRef;
  private url: string;
  private audio = new Audio();

  constructor(private rend: Renderer2) {}

  ngOnInit(): void {
    setTimeout(() => {
// console.log(this.parentWidth);
    }, 0);
  }

  ngAfterViewInit() {
    this.audio.src = `../../assets/mp3/${ this.imageNum }/song.mp3`;
    this.url = `url('../../assets/calendar_img/${ this.imageNum }.jpg')`;
    this.unlisten = this.rend.listen(this.door.nativeElement, 'click', () => {
      if (this.door.nativeElement.classList.contains('doorOpen')) {
        this.pauseSong();
        this.rend.removeStyle(this.innerImg.nativeElement, 'background-image');
        this.rend.removeClass(this.door.nativeElement, 'doorOpen');
      } else {
        this.playSong();
        this.rend.setStyle(this.innerImg.nativeElement, 'background-image', this.url);
        this.rend.addClass(this.door.nativeElement, 'doorOpen');
      }
    });
  }

  private playSong(){
    this.audio.load();
    this.audio.loop = true;
    this.audio.play();
  }

  private pauseSong() {
    this.audio.pause();
  }

  ngOnDestroy() {
    this.unlisten();
  }
}
