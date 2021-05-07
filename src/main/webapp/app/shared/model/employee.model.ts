import { IDepartment } from '@/shared/model/department.model';
import { IRegion } from '@/shared/model/region.model';

export interface IEmployee {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  hireDate?: Date | null;
  salary?: number | null;
  department?: IDepartment | null;
  region?: IRegion | null;
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
    public department?: IDepartment | null,
    public region?: IRegion | null
  ) {}
}
