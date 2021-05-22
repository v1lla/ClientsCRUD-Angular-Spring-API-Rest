export class Cliente {
  id: number;
  name: String;
  surname: String;
  phone: String;
  createAt: String;


  constructor(name : String, surname : String, phone : String, createAt : String) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.createAt = createAt;
  }

}
