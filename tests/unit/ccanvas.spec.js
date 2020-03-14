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
  describe('when circles is set to 3', () => {
      it('should display 3 circle', () => {
        const wrapper = shallowMount(CCanvas, {
            propsData: {
                circles: 3
            }
        })
        const truc = wrapper.findAll('[data-test="fabricCircle"]')
        expect(truc.at(0).exists()).toBe(true)
        expect(truc.at(1).exists()).toBe(true)
        expect(truc.at(2).exists()).toBe(true)
      })
  })
})
