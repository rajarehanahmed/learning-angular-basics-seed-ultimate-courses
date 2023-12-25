import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <!-- load the donut list component -->
      <header class="header">
        <img src="/assets/img/logo.svg" alt="Ultimate Donuts" class="logo">
      </header>
      <app-donut-list></app-donut-list>
      <!-- <h1 #heading (click)="handleClick()">{{ newMessage }}</h1>
      <input #messageInput [value]="message" (input)="newMessage = messageInput.value" />
      <p> {{ heading.innerText }} </p> -->
    </div>
  `,
  styles: [
    `
      .app {
        background: #fff;
        border-radius: 8px;
        max-width: 500px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7;
      }
      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }
      .logo {
        width: 100px;
        height: 88px;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  ngOnInit() {
    this.message = "Hello Angular!";
  }

  handleClick() {
    console.log('clicked')
  }

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.newMessage = value;

    console.log(value)
  }
}
