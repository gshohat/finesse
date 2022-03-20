import { shallowMount } from '@vue/test-utils'
import Single from '@/components/Singles/Single/Single.vue'

describe('Single.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'Gilad';
    const wrapper = shallowMount(Single, {
      propsData: { name }
    });
    const titleText = wrapper.find('[data-testid="title"]').text();
    expect(titleText).toMatch(name);
  })
})
