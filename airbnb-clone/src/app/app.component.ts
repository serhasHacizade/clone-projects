import { Component, inject } from '@angular/core';

import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ToastService } from './services/toast.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'airbnb-clone';
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);
  toastService = inject(ToastService);
  messageService = inject(MessageService);
  isListingView: boolean = true;

  ngOnInit(): void {
    this.initFontAwesome();
    this.listenToastService();
  }
  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  private listenToastService(): void {
    this.toastService.sendSub.subscribe({
      next: newMessage => {
        if (newMessage && newMessage.summary !== this.toastService.INIT_STATE) {
          this.messageService.add(newMessage)
        }
      }  
    });
  }
}
