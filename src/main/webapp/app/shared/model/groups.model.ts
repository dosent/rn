import { IEmployee } from '@/shared/model/employee.model';

export interface IGroups {
  id?: number;
  name?: string | null;
  employees?: IEmployee[] | null;
}

export class Groups implements IGroups {
  constructor(public id?: number, public name?: string | null, public employees?: IEmployee[] | null) {}
}
