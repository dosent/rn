import { Component, Vue, Inject } from 'vue-property-decorator';

import { IGroups } from '@/shared/model/groups.model';
import GroupsService from './groups.service';

@Component
export default class GroupsDetails extends Vue {
  @Inject('groupsService') private groupsService: () => GroupsService;
  public groups: IGroups = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.groupsId) {
        vm.retrieveGroups(to.params.groupsId);
      }
    });
  }

  public retrieveGroups(groupsId) {
    this.groupsService()
      .find(groupsId)
      .then(res => {
        this.groups = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
