import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  path = '';
  constructor(
    private route: Router
  ) {}

  ngOnInit(): void {
    this.path = this.route.url;
  }

}
