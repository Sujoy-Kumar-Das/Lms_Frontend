import { ReactNode } from "react";
import { IUserRoles } from "./user.roles.interface";

export interface IDashboardRoute {
  text: string;
  link: string;
  icon: ReactNode;
  access?: IUserRoles[];
}
