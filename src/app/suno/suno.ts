import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suno.html',
  styleUrl: './suno.css'
})
export class Suno {
  prompt: string = '';
  response: string | null = null;

  callSuno() {
    // For now, just simulate
    this.response = `You entered: "${this.prompt}". (Suno API call would go here.)`;
  }
}