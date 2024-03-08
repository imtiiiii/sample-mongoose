type Gender = "M" | "F";
type Role = "admin" | "user";
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
  gender: Gender;
  race: string;
  role: Role;
}
