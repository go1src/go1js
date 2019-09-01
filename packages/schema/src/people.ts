import { Entity } from "./ddd";
import { Role } from "./security";

export interface Organization extends Entity {

}

export interface Person extends Entity {

}

export interface Membership extends Entity {
  person: Person;
  organization: Organization;
  since: Date;
}

export interface User extends Entity {
  roles: Role[];
  accessProfile: AccessProfile;
//  plan: AppConfig;
}

export interface AccessProfile {
  [authProvider: string]: Login;
}

export interface Login extends Entity {

}

export interface AppRole {

}
