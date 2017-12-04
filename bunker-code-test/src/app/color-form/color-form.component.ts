import { Component, OnInit } from '@angular/core';
import { FavoriteColor } from '../favorite-color';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  public favColor: FavoriteColor;

  constructor() {
    this.favColor = new FavoriteColor(null, null, null);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('form has been submitted');
    console.log(this.favColor);
    this.favColor.reset();
  };

}
