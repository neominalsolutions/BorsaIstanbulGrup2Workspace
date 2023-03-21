import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BorsaistButtonComponent } from './components/borsaist-button/borsaist-button.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// allowedNonPeerDependencies bu libraryde kullanılan bütün dependencyleri tanımlamamız gerekir. yoksa library projesi build almaz yada public edilemez

@NgModule({
  declarations: [BorsaistButtonComponent],
  imports: [CommonModule, MatButtonModule, BrowserAnimationsModule],
  exports: [BorsaistButtonComponent],
})
export class Lib1Module {}
