<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2
          id="rnApp.employee.home.createOrEditLabel"
          data-cy="EmployeeCreateUpdateHeading"
          v-text="$t('rnApp.employee.home.createOrEditLabel')"
        >
          Create or edit a Employee
        </h2>
        <div>
          <div class="form-group" v-if="employee.id">
            <label for="id" v-text="$t('global.field.id')">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="employee.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.firstName')" for="employee-firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              name="firstName"
              id="employee-firstName"
              data-cy="firstName"
              :class="{ valid: !$v.employee.firstName.$invalid, invalid: $v.employee.firstName.$invalid }"
              v-model="$v.employee.firstName.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.lastName')" for="employee-lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              name="lastName"
              id="employee-lastName"
              data-cy="lastName"
              :class="{ valid: !$v.employee.lastName.$invalid, invalid: $v.employee.lastName.$invalid }"
              v-model="$v.employee.lastName.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.email')" for="employee-email">Email</label>
            <input
              type="text"
              class="form-control"
              name="email"
              id="employee-email"
              data-cy="email"
              :class="{ valid: !$v.employee.email.$invalid, invalid: $v.employee.email.$invalid }"
              v-model="$v.employee.email.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.phoneNumber')" for="employee-phoneNumber">Phone Number</label>
            <input
              type="text"
              class="form-control"
              name="phoneNumber"
              id="employee-phoneNumber"
              data-cy="phoneNumber"
              :class="{ valid: !$v.employee.phoneNumber.$invalid, invalid: $v.employee.phoneNumber.$invalid }"
              v-model="$v.employee.phoneNumber.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.hireDate')" for="employee-hireDate">Hire Date</label>
            <div class="d-flex">
              <input
                id="employee-hireDate"
                data-cy="hireDate"
                type="datetime-local"
                class="form-control"
                name="hireDate"
                :class="{ valid: !$v.employee.hireDate.$invalid, invalid: $v.employee.hireDate.$invalid }"
                :value="convertDateTimeFromServer($v.employee.hireDate.$model)"
                @change="updateInstantField('hireDate', $event)"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.salary')" for="employee-salary">Salary</label>
            <input
              type="number"
              class="form-control"
              name="salary"
              id="employee-salary"
              data-cy="salary"
              :class="{ valid: !$v.employee.salary.$invalid, invalid: $v.employee.salary.$invalid }"
              v-model.number="$v.employee.salary.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.portalId')" for="employee-portalId">Portal Id</label>
            <input
              type="text"
              class="form-control"
              name="portalId"
              id="employee-portalId"
              data-cy="portalId"
              :class="{ valid: !$v.employee.portalId.$invalid, invalid: $v.employee.portalId.$invalid }"
              v-model="$v.employee.portalId.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.login')" for="employee-login">Login</label>
            <input
              type="text"
              class="form-control"
              name="login"
              id="employee-login"
              data-cy="login"
              :class="{ valid: !$v.employee.login.$invalid, invalid: $v.employee.login.$invalid }"
              v-model="$v.employee.login.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.active')" for="employee-active">Active</label>
            <input
              type="checkbox"
              class="form-check"
              name="active"
              id="employee-active"
              data-cy="active"
              :class="{ valid: !$v.employee.active.$invalid, invalid: $v.employee.active.$invalid }"
              v-model="$v.employee.active.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.createDate')" for="employee-createDate">Create Date</label>
            <b-input-group class="mb-3">
              <b-input-group-prepend>
                <b-form-datepicker
                  aria-controls="employee-createDate"
                  v-model="$v.employee.createDate.$model"
                  name="createDate"
                  class="form-control"
                  :locale="currentLanguage"
                  button-only
                  today-button
                  reset-button
                  close-button
                >
                </b-form-datepicker>
              </b-input-group-prepend>
              <b-form-input
                id="employee-createDate"
                data-cy="createDate"
                type="text"
                class="form-control"
                name="createDate"
                :class="{ valid: !$v.employee.createDate.$invalid, invalid: $v.employee.createDate.$invalid }"
                v-model="$v.employee.createDate.$model"
              />
            </b-input-group>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.department')" for="employee-department">Department</label>
            <select class="form-control" id="employee-department" data-cy="department" name="department" v-model="employee.department">
              <option v-bind:value="null"></option>
              <option
                v-bind:value="
                  employee.department && departmentOption.id === employee.department.id ? employee.department : departmentOption
                "
                v-for="departmentOption in departments"
                :key="departmentOption.id"
              >
                {{ departmentOption.id }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('rnApp.employee.region')" for="employee-region">Region</label>
            <select class="form-control" id="employee-region" data-cy="region" name="region" v-model="employee.region">
              <option v-bind:value="null"></option>
              <option
                v-bind:value="employee.region && regionOption.id === employee.region.id ? employee.region : regionOption"
                v-for="regionOption in regions"
                :key="regionOption.id"
              >
                {{ regionOption.id }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
            <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
          </button>
          <button
            type="submit"
            id="save-entity"
            data-cy="entityCreateSaveButton"
            :disabled="$v.employee.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./employee-update.component.ts"></script>
