import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-demo';

  itens: any = [];

  ngOnInit() {
    setTimeout(() => {
      for (let i = 1; i < 100000; i++) {
        this.itens.push(`Item ${i}`);
      }
    }, 3000);
  }
}
