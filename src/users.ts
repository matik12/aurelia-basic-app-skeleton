import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

@autoinject
export class Users {
  heading = 'Users';
  users = [];

  constructor(private http: HttpClient) {
    this.http.get('https://www.googleapis.com/oauth2/v2/userinfo')
      .then(response => console.log(response.content));
  }

  activate() {
    this.addMore();
  }

  addMore = () => {
    if (this.users.length >= 80) {
      return;
    }

    for (var index = 0; index < 16; index++) {
      this.users.push({
        id: (this.users.length + 1),
        firstName: 'Tom ' + (this.users.length + 1),
        familyName: 'Smith'
      });
    }
  }

  testAction() {
    alert('It works! :)');
  }
}