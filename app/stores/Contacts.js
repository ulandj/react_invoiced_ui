import { action, observable } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: 'Example1', email: 'name1@example.com' },
    { id: 2, name: 'Example2', email: 'name2@example.com' },
    { id: 3, name: 'Example3', email: 'name3@example.com' },
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }

  @action find(contactId) {
    return (
      this.all.slice().filter(
        c => c.id === parseInt(contactId, 10)
      )[0]
    );
  }
}

export default new Contacts();
