import { observable, action } from 'mobx';

import Api from 'helpers/api';

class User {
  @observable isLoading = false;

  createSession(email, password) {
    console.log(email);
    console.log(password);
  }
}

export default new User();
