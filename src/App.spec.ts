import { mount } from '@vue/test-utils'

import App from './App.vue'

test('uses mounts', async () => {
  const wrapper = mount(App)
  expect(wrapper.html()).toContain('Vue app')
  expect(wrapper.html()).toContain('Count: 0')

  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Count: 1')
})
