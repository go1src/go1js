import { Entity } from "./ddd";
import { DescriptiveText } from "./common";

export interface Role extends Entity{
  name: DescriptiveText;
}

export interface RolePermission {
  [list: string]: PermissionList;
}

export interface Permission {
  permissionId: string;
  entityType: string;
  action: string;
  read: boolean;
  write: boolean;
  execute: boolean;
}

export interface PermissionList {
  [permission: string]: Permission;
}