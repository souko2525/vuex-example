import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import AntiAir from '@/components/AntiAir'

describe('AntiAir.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AntiAir)
    const vm = new Constructor({router, store}).$mount()
    expect(vm.$el.querySelector('.antiair h1').textContent)
    .toEqual('対空計算機')
  })
})
