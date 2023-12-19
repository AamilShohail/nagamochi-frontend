import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Nagamochi Japanese Academy';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
