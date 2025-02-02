import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { GetInTouchComponent } from '@shared-components/get-in-touch/get-in-touch.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Settings, SettingsService } from '@services/settings.service';
import { MatDividerModule } from '@angular/material/divider';
import { ArtigosService } from '@services/artigos.service';
import { Artigos } from '@models/artigos';
import { environment } from '../../../environments/environment';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderImageComponent } from '@shared-components/header-image/header-image.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MonthlyPricingComponent } from '../pricing/monthly-pricing/monthly-pricing.component';
import { YearlyPricingComponent } from '../pricing/yearly-pricing/yearly-pricing.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-luxury',
  standalone: true,
  imports: [
    FlexLayoutModule,
    HeaderImageComponent,
    MatGridListModule,
    MatTabsModule,
    MonthlyPricingComponent,
    YearlyPricingComponent,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    GetInTouchComponent,
    MatDividerModule,
    RouterModule,
    TranslateModule,
    NgClass,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './luxury.component.html',
  styleUrl: './luxury.component.scss'
})
export class LuxuryComponent implements OnInit{
  public viewType: string = "grid";
  public viewColChanged: number = 0;
  public fullWidthPage: boolean = true;
  public column: number = 4; 
  public settings: Settings;
  public artigos: Artigos[];
  public loading: boolean = true;
  imagens: string = environment.imagensUrl;

  constructor(public settingsService: SettingsService) {
    this.settings = this.settingsService.settings;
  }

  ngOnInit() {
    
  }  
}
