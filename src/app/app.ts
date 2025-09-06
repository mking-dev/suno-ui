import { Component, signal } from '@angular/core';
import { Suno } from './suno/suno';

@Component({
  selector: 'app-root',
  imports: [Suno],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('suno-ui');
}
