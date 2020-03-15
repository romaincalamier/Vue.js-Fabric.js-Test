import { shallowMount } from '@vue/test-utils'
import CEditor from '@/components/CEditor.vue'

describe('CEditor.vue', () => {
  it('should display a title with the right text', () => {
    const wrapper = shallowMount(CEditor)
    expect(wrapper.find('[data-test="title"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="title"]').text()).toBe('My Editor')
  })
  it('should display a canvas', () => {
      const wrapper = shallowMount(CEditor)
      expect(wrapper.find('[data-test="canvas"]').exists()).toBe(true)
  })
  it('should display the add circle button', () => {
    const wrapper = shallowMount(CEditor)
    expect(wrapper.find('[data-test="circle-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="circle-button"]').text()).toBe('Add circle')
  })
  describe('when I click on the add circle button', () => {
      it('should increase circlesNumber', () => {
        const wrapper = shallowMount(CEditor)
        expect(wrapper.vm.circlesNumber).toEqual(0)
        const circleButton = wrapper.find('[data-test="circle-button"]')
        circleButton.trigger('click')
        circleButton.trigger('click')
        expect(wrapper.vm.circlesNumber).toEqual(2)
      })
  })
  it('should display the add rectangle button', () => {
    const wrapper = shallowMount(CEditor)
    expect(wrapper.find('[data-test="rectangle-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="rectangle-button"]').text()).toBe('Add rectangle')
  })
  describe('when I click on the add rectangle button', () => {
      it('should increase rectanglesNumber', () => {
        const wrapper = shallowMount(CEditor)
        expect(wrapper.vm.rectanglesNumber).toEqual(0)
        const rectangleButton = wrapper.find('[data-test="rectangle-button"]')
        rectangleButton.trigger('click')
        rectangleButton.trigger('click')
        expect(wrapper.vm.rectanglesNumber).toEqual(2)
      })
  })
})