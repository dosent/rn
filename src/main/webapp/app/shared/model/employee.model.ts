import { IDepartment } from '@/shared/model/department.model';
import { IRegion } from '@/shared/model/region.model';
import { IGroups } from '@/shared/model/groups.model';

export interface IEmployee {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  hireDate?: Date | null;
  salary?: number | null;
  portalId?: string | null;
  login?: string | null;
  active?: boolean | null;
  createDate?: Date | null;
  department?: IDepartment | null;
  region?: IRegion | null;
  groups?: IGroups[] | null;
}

export class Employee implements IEmployee {
  constructor(
    public id?: number,
    public firstName?: string | null,
    public lastName?: string | null,
    public email?: string | null,
    public phoneNumber?: string | null,
    public hireDate?: Date | null,
    public salary?: number | null,
    public portalId?: string | null,
    public login?: string | null,
    public active?: boolean | null,
    public createDate?: Date | null,
    public department?: IDepartment | null,
    public region?: IRegion | null,
    public groups?: IGroups[] | null
  ) {
    this.active = this.active ?? false;
  }
}
