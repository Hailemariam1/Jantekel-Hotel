export class RegisterDto {
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  phoneNumber?: string;
}

export class LoginDto {
  email!: string;
  password!: string;
}
