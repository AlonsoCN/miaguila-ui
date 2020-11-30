export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  status: boolean;
}

export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  status: boolean;

  constructor(data: IUser) {
    this.id = data.id;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.phone = data.phone;
    this.status = data.status;
  }

  get fullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
