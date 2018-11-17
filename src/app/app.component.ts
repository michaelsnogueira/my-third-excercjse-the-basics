import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .position {
        color: white;
      }
    `
  ]
})
export class AppComponent {
  countLogs = [];
  displayHidden = false;

  ngClick() {
    this.displayHidden = !this.displayHidden;

    this.countLogs.push(this.countLogs.length + 1);
  }
}
