import { Component, Vue, Inject } from 'vue-property-decorator';

import EmployeeService from '@/entities/employee/employee.service';
import { IEmployee } from '@/shared/model/employee.model';

import { IGroups, Groups } from '@/shared/model/groups.model';
import GroupsService from './groups.service';

const validations: any = {
  groups: {
    name: {},
  },
};

@Component({
  validations,
})
export default class GroupsUpdate extends Vue {
  @Inject('groupsService') private groupsService: () => GroupsService;
  public groups: IGroups = new Groups();

  @Inject('employeeService') private employeeService: () => EmployeeService;

  public employees: IEmployee[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.groupsId) {
        vm.retrieveGroups(to.params.groupsId);
      }
      vm.initRelationships();
    });
  }

  created(): void {
    this.currentLanguage = this.$store.getters.currentLanguage;
    this.$store.watch(
      () => this.$store.getters.currentLanguage,
      () => {
        this.currentLanguage = this.$store.getters.currentLanguage;
      }
    );
    this.groups.employees = [];
  }

  public save(): void {
    this.isSaving = true;
    if (this.groups.id) {
      this.groupsService()
        .update(this.groups)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('rnApp.groups.updated', { param: param.id });
          return this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Info',
            variant: 'info',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    } else {
      this.groupsService()
        .create(this.groups)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('rnApp.groups.created', { param: param.id });
          this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Success',
            variant: 'success',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    }
  }

  public retrieveGroups(groupsId): void {
    this.groupsService()
      .find(groupsId)
      .then(res => {
        this.groups = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.employeeService()
      .retrieve()
      .then(res => {
        this.employees = res.data;
      });
  }

  public getSelected(selectedVals, option): any {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }
}
