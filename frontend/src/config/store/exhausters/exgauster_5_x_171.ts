import { RootStore } from '@config/store'
import { WsExgausterMessage } from '@config/types'
import { makeAutoObservable } from 'mobx'

export class Exhauster_5_x_171 {

  public root: RootStore
  public name = 'Эксгаустер Х-171'
  private _message: WsExgausterMessage['exgauster_5_x_171'] | null = null

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this, { root: false }, { autoBind: true })
  }

  get message() {
    return this._message
  }

  public setMessage(message: WsExgausterMessage['exgauster_5_x_171']) {
    this._message = message
  }
}
