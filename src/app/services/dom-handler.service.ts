import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomHandlerService {

  private isBrowser: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) { 
    this.isBrowser = isPlatformBrowser(platformId); 
  }

  get winDocument(): Document {
    return this.document;
  }

  get window(): Window | undefined {
    // Verifica se estamos no ambiente de browser
    return this.isBrowser && typeof window !== 'undefined' ? window : undefined;
  }

  winScroll(y: number, x: number): void {
    // Verifica se estamos no ambiente de browser e se `window` está disponível
    const win = this.window;
    if (win) { 
      setTimeout(() => {
        win.scroll({
          top: y,
          left: x,
          behavior: "smooth",
        });
      });
    } 
  }

  hidePreloader(): void {
    const winDoc = this.winDocument;
    // Verifica se estamos no ambiente de browser e se `window` e `document` estão disponíveis
    if (this.isBrowser && typeof window !== 'undefined' && winDoc) {
      setTimeout(() => {
        const preloader = winDoc.getElementById('preloader');
        if (preloader) {
          preloader.classList.add('hide');
        }
      });
    }
  }
}
