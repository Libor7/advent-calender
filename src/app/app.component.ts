import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  mainElementWidth: number;
  images: number[] = [ 10, 4, 17, 3, 21, 13, 1, 16, 5, 11, 24, 6, 12, 7, 18, 15, 8, 20, 9, 19, 22, 14, 23, 2 ];
  @ViewChild('main', {static: true}) mainElement: ElementRef;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.mainElementWidth = this.mainElement.nativeElement.offsetWidth;
    this.cd.detectChanges();
  }
}
