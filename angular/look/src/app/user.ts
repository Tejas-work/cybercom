import { EmailValidator } from "@angular/forms";

export class User {
  constructor(
    public name: String,
    public email: String,
    public password: String,
    public phone : Number
  ){}
}
