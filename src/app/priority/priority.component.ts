import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, MatTabsModule],
  templateUrl: './priority.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriorityComponent {}
