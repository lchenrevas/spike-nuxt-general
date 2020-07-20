import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'example',
  stateFactory: true,
  namespaced: true
})
export default class ExampleStoreModule extends VuexModule {
  private _exampleData = '1'

  get exampleData () {
    return this._exampleData
  }

  @Mutation
  changeExampleDataSuccess(payload: string) {
    this._exampleData = payload
  }

  @Action
  changeExampleData(payload: string) {
    this.changeExampleDataSuccess(payload)
  }
}
