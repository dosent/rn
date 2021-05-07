<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="groups">
        <h2 class="jh-entity-heading" data-cy="groupsDetailsHeading">
          <span v-text="$t('rnApp.groups.detail.title')">Groups</span> {{ groups.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('rnApp.groups.name')">Name</span>
          </dt>
          <dd>
            <span>{{ groups.name }}</span>
          </dd>
          <dt>
            <span v-text="$t('rnApp.groups.employee')">Employee</span>
          </dt>
          <dd>
            <span v-for="(employee, i) in groups.employees" :key="employee.id"
              >{{ i > 0 ? ', ' : '' }}
              <router-link :to="{ name: 'EmployeeView', params: { employeeId: employee.id } }">{{ employee.id }}</router-link>
            </span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="groups.id" :to="{ name: 'GroupsEdit', params: { groupsId: groups.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./groups-details.component.ts"></script>
