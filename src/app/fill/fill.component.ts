import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, MatTabsModule],
  templateUrl: './fill.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideImgixLoader('https://fpoimg.com/')],
})
export class FillComponent {}
