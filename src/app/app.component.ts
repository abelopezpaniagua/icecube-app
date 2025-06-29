import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService],
})
export class AppComponent {
  title = 'icecube-app';

  constructor(private messageService: MessageService) {}

  public showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Toast Test',
      detail: 'If you can see this message, that means toast works.',
      life: 3000,
    });
  }
}
