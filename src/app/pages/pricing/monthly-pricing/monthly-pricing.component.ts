import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-monthly-pricing',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    FlexLayoutModule
  ],
  templateUrl: './monthly-pricing.component.html'
})
export class MonthlyPricingComponent {
  public items = [
    { name: 'Other flights', champagne: '0', buque: '0', roteiro: '0', fotografia: '0', exclusivo: '0', gravacao: '0', transfer: '0' },
    { name: 'VIP Tour', champagne: '1', buque: '1', roteiro: '1', fotografia: '1', exclusivo: '1', gravacao: '1', transfer: '1' },
  ]
}
