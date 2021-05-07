import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore

// prettier-ignore
const Region = () => import('@/entities/region/region.vue');
// prettier-ignore
const RegionUpdate = () => import('@/entities/region/region-update.vue');
// prettier-ignore
const RegionDetails = () => import('@/entities/region/region-details.vue');
// prettier-ignore
const Department = () => import('@/entities/department/department.vue');
// prettier-ignore
const DepartmentUpdate = () => import('@/entities/department/department-update.vue');
// prettier-ignore
const DepartmentDetails = () => import('@/entities/department/department-details.vue');
// prettier-ignore
const Employee = () => import('@/entities/employee/employee.vue');
// prettier-ignore
const EmployeeUpdate = () => import('@/entities/employee/employee-update.vue');
// prettier-ignore
const EmployeeDetails = () => import('@/entities/employee/employee-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default [
  {
    path: '/region',
    name: 'Region',
    component: Region,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/region/new',
    name: 'RegionCreate',
    component: RegionUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/region/:regionId/edit',
    name: 'RegionEdit',
    component: RegionUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/region/:regionId/view',
    name: 'RegionView',
    component: RegionDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/department',
    name: 'Department',
    component: Department,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/department/new',
    name: 'DepartmentCreate',
    component: DepartmentUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/department/:departmentId/edit',
    name: 'DepartmentEdit',
    component: DepartmentUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/department/:departmentId/view',
    name: 'DepartmentView',
    component: DepartmentDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/employee/new',
    name: 'EmployeeCreate',
    component: EmployeeUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/employee/:employeeId/edit',
    name: 'EmployeeEdit',
    component: EmployeeUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/employee/:employeeId/view',
    name: 'EmployeeView',
    component: EmployeeDetails,
    meta: { authorities: [Authority.USER] },
  },
  // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
];
