import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslatePipe],
})
export class AppComponent implements OnInit {
  title = 'app2';
  langs = ['', 'tr', 'en'];

  constructor(private tService: TranslateService, private tp: TranslatePipe) {
    this.tService.addLangs(this.langs);
    // desteklenen dilleri tanıttık
  }

  ngOnInit(): void {
    this.tService.onLangChange.subscribe((cLang: any) => {
      // language değişiminde event tetiklenir.
      console.log('cLang', cLang);
    });
  }

  onLangChange(lng: string) {
    console.log('lng', lng);
    // translate service ile dil değişikliği yaptık

    this.tService.use(lng); // dil değişimi yaptık

    const value = this.tp.transform('hello');
    const val2 = this.tService.instant('validations.min', {
      min: 15,
      value: 10,
      max: 20,
    });
    console.log('translatePipe', value, val2);
  }
}
