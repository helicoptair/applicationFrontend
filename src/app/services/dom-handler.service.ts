import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomHandlerService {

  public isBrowser: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) { 
    this.isBrowser = isPlatformBrowser(platformId); 
  }

  get winDocument(): Document {
    return this.document;
  }

  get window(): Window | undefined {
    return this.isBrowser ? window : undefined;
  }

  // Getter público para isBrowser
  get isBrowserPlatform(): boolean {
    return this.isBrowser;
  }

  winScroll(y: number, x: number): void {
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
    if (this.isBrowser && winDoc) {
      setTimeout(() => {
        const preloader = winDoc.getElementById('preloader');
        if (preloader) {
          preloader.classList.add('hide');
        }
      });
    }
  }
}
