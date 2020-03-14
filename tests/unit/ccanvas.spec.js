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
        const wrapperCircleList = wrapper.findAll('[data-test="fabricCircle"]')
        expect(wrapperCircleList.at(0).exists()).toBe(true)
        expect(wrapperCircleList.at(1).exists()).toBe(true)
        expect(wrapperCircleList.at(2).exists()).toBe(true)
      })
  })
  describe('when I click on a circle', () => {
    it('should emit a selected circle event with the circle id', async () => {
        const wrapper = shallowMount(CCanvas, {
            propsData: {
                circles: 2
            }
        })
        const wrapperCircleList = wrapper.findAll('[data-test="fabricCircle"]')
        const selectedCircleWrapper = wrapperCircleList.at(0)
        selectedCircleWrapper.trigger('click')
        await wrapper.vm.$nextTick()
        expect(selectedCircleWrapper.emitted().selectedCircle[0]).toEqual(1)
    })
  })
})
