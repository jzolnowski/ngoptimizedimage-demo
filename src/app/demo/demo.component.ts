import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  list = Array(16).fill('https://fpoimg.com/300x300?text=Preview');
}
