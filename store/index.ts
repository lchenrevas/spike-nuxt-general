import { Store, ActionTree } from 'vuex'
import { initialiseStores, exampleStore } from '@/utils/store-accessor'

import Vue from 'vue'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '@/utils/store-accessor'

export const actions: ActionTree<any, any> = {
  async nuxtServerInit(_context, server: { req: any; app: Vue }) {
    exampleStore.changeExampleData(server.req.headers.host)
  }
}
