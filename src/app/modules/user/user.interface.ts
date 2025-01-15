import { Model } from "mongoose";

export interface IUser {
    _id?: number;
    name: string;
    email: string;
    password: string;
    role?: 'admin' | 'user';
    createdAt?: Date;
    updatedAt?: Date;
    address: string;
}


export interface UserStaticMethods extends Model<IUser> {
    isUserExist(email: string): Promise<IUser>;
    isPasswordMatch(
      plainPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
  }