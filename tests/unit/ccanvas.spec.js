import { shallowMount } from '@vue/test-utils'
import CCanvas from '@/components/CCanvas.vue'

describe('CEditor.vue', () => {
  it('should display a fabric canvas', () => {
      const wrapper = shallowMount(CCanvas)
      expect(wrapper.find('[data-test="fabricCanvas"]').exists()).toBe(true)
  })
  it('should display one fabric circle by default', () => {
    const wrapper = shallowMount(CCanvas)
    expect(wrapper.find('[data-test="fabricCircle"]').exists()).toBe(true)
  })
})
