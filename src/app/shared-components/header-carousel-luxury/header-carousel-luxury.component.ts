import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface, SwiperModule } from '../../theme/components/swiper/swiper.module';
import { Settings, SettingsService } from '@services/settings.service';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-carousel-luxury',
  standalone: true,
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    TranslateModule,
    MatIconModule,
    SwiperModule,
    MatCardModule,
    CurrencyPipe
  ],
  templateUrl: './header-carousel-luxury.component.html',
  styleUrls: ['./header-carousel-luxury.component.scss']
})
export class HeaderCarouselLuxuryComponent implements OnInit {
  @Input('slides') slides: Array<any> = [];
  @Input('contentOffsetToTop') contentOffsetToTop: boolean;
  @Input('fullscreen') fullscreen: boolean = false;
  public config: SwiperConfigInterface = {};
  public currentSlide: any;
  public settings: Settings;
  constructor(public settingsService: SettingsService, public router: Router) {
    this.settings = this.settingsService.settings;
  }

  ngOnInit() {
    if (this.contentOffsetToTop) {
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      });
    }
  }

  ngAfterViewInit() {
    this.initCarousel();
  }

  ngOnChanges() {
    if (this.slides.length > 0) {
      this.currentSlide = this.slides[0];
    }
  }

  public initCarousel() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide"
    }
  }

  ngOnDestroy() {
    setTimeout(() => {
      this.settings.contentOffsetToTop = false;
    });
  }

  public onIndexChange(index: number) {
    this.currentSlide = this.slides[index];
  }
}