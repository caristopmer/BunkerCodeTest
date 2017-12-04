import { Component, OnInit } from '@angular/core';
import { FavoriteColor } from '../favorite-color';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  public favColor: FavoriteColor;

  constructor(public http: Http) {
    this.favColor = new FavoriteColor(null, null, null);
  }

  ngOnInit() {
  }

  showResponse(data) {
    document.getElementById('#thanks').classList.remove('hidden');
  }

  onSubmit() {
    console.log(this.favColor);
    let apiUrl = 'https://bunkerdev.azure-api.net/codetest/api/people/add';
    let body = JSON.stringify(this.favColor);
    this.http.post(apiUrl, body)
    .subscribe(res => {
      document.getElementById('sentence').innerText = JSON.parse(res['_body'])['data']['summary'] + '!';
      document.getElementById('response').style.color = JSON.parse(res['_body'])['data']['favoriteColor'];
      document.getElementById('response').classList.remove('hidden');
    });
    document.getElementById('thanks').classList.remove('hidden');
    this.favColor.reset();
  };

}
