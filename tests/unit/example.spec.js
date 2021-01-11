import { shallowMount } from '@vue/test-utils';
import hrmPlayer from '@/components/index.vue'

describe('hrmPlayer.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(hrmPlayer, {
      propsData: {
        source: 'rtmp://58.200.131.2:1935/livetv/cctv1',
        type: 'rtmp/flv'
      }
    })
  })
  // 验证props，打印快照
  it('renders', () => {
    expect(wrapper.vm.source).toEqual('rtmp://58.200.131.2:1935/livetv/cctv1')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
