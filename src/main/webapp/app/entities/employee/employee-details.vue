<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="employee">
        <h2 class="jh-entity-heading" data-cy="employeeDetailsHeading">
          <span v-text="$t('rnApp.employee.detail.title')">Employee</span> {{ employee.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('rnApp.employee.firstName')">First Name</span>
          </dt>
          <dd>
            <span>{{ employee.firstName }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.lastName')">Last Name</span>
          </dt>
          <dd>
            <span>{{ employee.lastName }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.email')">Email</span>
          </dt>
          <dd>
            <span>{{ employee.email }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.phoneNumber')">Phone Number</span>
          </dt>
          <dd>
            <span>{{ employee.phoneNumber }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.hireDate')">Hire Date</span>
          </dt>
          <dd>
            <span v-if="employee.hireDate">{{ $d(Date.parse(employee.hireDate), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.salary')">Salary</span>
          </dt>
          <dd>
            <span>{{ employee.salary }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.portalId')">Portal Id</span>
          </dt>
          <dd>
            <span>{{ employee.portalId }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.login')">Login</span>
          </dt>
          <dd>
            <span>{{ employee.login }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.active')">Active</span>
          </dt>
          <dd>
            <span>{{ employee.active }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.createDate')">Create Date</span>
          </dt>
          <dd>
            <span>{{ employee.createDate }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.department')">Department</span>
          </dt>
          <dd>
            <div v-if="employee.department">
              <router-link :to="{ name: 'DepartmentView', params: { departmentId: employee.department.id } }">{{
                employee.department.id
              }}</router-link>
            </div>
          </dd>
          <dt>
            <span v-text="$t('rnApp.employee.region')">Region</span>
          </dt>
          <dd>
            <div v-if="employee.region">
              <router-link :to="{ name: 'RegionView', params: { regionId: employee.region.id } }">{{ employee.region.id }}</router-link>
            </div>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="employee.id" :to="{ name: 'EmployeeEdit', params: { employeeId: employee.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./employee-details.component.ts"></script>
