import { mixins } from 'vue-class-component';

import { Component, Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IGroups } from '@/shared/model/groups.model';

import GroupsService from './groups.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
export default class Groups extends Vue {
  @Inject('groupsService') private groupsService: () => GroupsService;
  private removeId: number = null;

  public groups: IGroups[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllGroupss();
  }

  public clear(): void {
    this.retrieveAllGroupss();
  }

  public retrieveAllGroupss(): void {
    this.isFetching = true;

    this.groupsService()
      .retrieve()
      .then(
        res => {
          this.groups = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public handleSyncList(): void {
    this.clear();
  }

  public prepareRemove(instance: IGroups): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removeGroups(): void {
    this.groupsService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('rnApp.groups.deleted', { param: this.removeId });
        this.$bvToast.toast(message.toString(), {
          toaster: 'b-toaster-top-center',
          title: 'Info',
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000,
        });
        this.removeId = null;
        this.retrieveAllGroupss();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
