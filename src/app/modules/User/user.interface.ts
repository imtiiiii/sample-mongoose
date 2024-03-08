export interface IUser {
  first_name: string;
  last_name: string;
  middle_name?: string;
  email: string;
  password: string;
  phone_number: string;
  address: {
    line1: string;
    line2?: string;
  };
  dob: string;
  gender: string;
  race: string;
  role: "admin" | "user";
}
