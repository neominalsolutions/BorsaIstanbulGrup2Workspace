import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en', // sayfalar varsıyalan olarak hangi dil üzerinde çalışsın
      loader: {
        provide: TranslateLoader, // ngxTranslate içerisinde TranslateLoader tipinde bir provider üzerinden işlem yap.
        useFactory: createTranslateLoader, // createTranslateLoader bir sınıf üzerinden dil dosyalarını
        deps: [HttpClient], // bu işlemin çalışması DI olarak service gönderilen deps tanımı
      },
    }), // lib için forRoot yazmaya gerek yok
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
