import { ImagePlaceholderConfig, NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, MatTabsModule],
  templateUrl: './placeholder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dnj0y4eck')],
})
export class PlaceholderComponent {
  placeholderConfig: ImagePlaceholderConfig = { blur: false };
}
