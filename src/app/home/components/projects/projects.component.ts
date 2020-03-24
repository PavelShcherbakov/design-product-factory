import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public slides: number[] = [1, 2, 3, 4, 5];
  @ViewChild('slickSlider') slider: SlickCarouselComponent;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() { }

  public nextSlide() {
    if (!this.slider) {
      return;
    }
    this.slider.slickNext();
  }

  public previosSlide() {
    if (!this.slider) {
      return;
    }
    this.slider.slickPrev();
  }

}
