import { RootStore } from '@config/store'
import { WsExgausterMessage } from '@config/types'
import { makeAutoObservable } from 'mobx'

export class Exhauster_2_u_172 {

  public root: RootStore

  public name = 'Эксгаустер У-172'

  private _message: WsExgausterMessage['exgauster_2_u_172'] | null = null
  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this, {root: false}, {autoBind: true})
  }

  get message() {
    return this._message
  }
  public setMessage(message: WsExgausterMessage['exgauster_2_u_172']) {
    this._message = message
  }
}
