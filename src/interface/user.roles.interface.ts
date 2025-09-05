export enum USER_ROLE {
  admin = "admin",
  student = "student",
}

export type IUserRoles = keyof typeof USER_ROLE;
