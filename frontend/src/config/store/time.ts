import { RootStore } from '@config/store'
import { makeAutoObservable } from 'mobx'

export class TimeStore {

  public root: RootStore

  private _moment: Date | null = null
  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this, {root: false}, {autoBind: true})
  }

  get moment() {
    return this._moment
  }
  public setMoment(moment: Date) {
    this._moment = moment
  }
}
