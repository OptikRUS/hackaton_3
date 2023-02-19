import { Exhauster_1_u_171 } from './exhausters/exhauster_1_u_171'
import { Exhauster_2_u_172 } from './exhausters/exhauster_2_u_172'
import { Exhauster_3_f_171 } from './exhausters/exgauster_3_f_171'
import { Exhauster_4_f_172 } from './exhausters/exgauster_4_f_172'
import { Exhauster_5_x_171 } from './exhausters/exgauster_5_x_171'
import { Exhauster_6_x_172 } from './exhausters/exgauster_6_x_172'
import { Exgauster } from '@config/types'
import { computed } from 'mobx'
import { TimeStore } from '@config/store/time'


type ExClasses = Exhauster_1_u_171 | Exhauster_2_u_172 | Exhauster_3_f_171 | Exhauster_4_f_172 | Exhauster_5_x_171 | Exhauster_6_x_172

export class RootStore {


  public timeStore: TimeStore
  public exhauster_1_u_171: Exhauster_1_u_171
  public exhauster_2_u_172: Exhauster_2_u_172
  public exhauster_3_f_171: Exhauster_3_f_171
  public exhauster_4_f_172: Exhauster_4_f_172
  public exhauster_5_x_171: Exhauster_5_x_171
  public exhauster_6_x_172: Exhauster_6_x_172

  constructor() {
    this.timeStore = new TimeStore(this)
    this.exhauster_1_u_171 = new Exhauster_1_u_171(this)
    this.exhauster_2_u_172 = new Exhauster_2_u_172(this)
    this.exhauster_3_f_171 = new Exhauster_3_f_171(this)
    this.exhauster_4_f_172 = new Exhauster_4_f_172(this)
    this.exhauster_5_x_171 = new Exhauster_5_x_171(this)
    this.exhauster_6_x_172 = new Exhauster_6_x_172(this)
  }

  public getExgauster(exgausterID: Exgauster): ExClasses {
    const exgausters: Record<Exgauster, ExClasses> = {
      exgauster_1_u_171: this.exhauster_1_u_171,
      exgauster_2_u_172: this.exhauster_2_u_172,
      exgauster_3_f_171: this.exhauster_3_f_171,
      exgauster_4_f_172: this.exhauster_4_f_172,
      exgauster_5_x_171: this.exhauster_5_x_171,
      exgauster_6_x_172: this.exhauster_6_x_172,
    }
    return computed(() => exgausters[exgausterID]).get()
  }
}
