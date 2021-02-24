import { defineComponent, reactive, h } from 'vue';
import { ElTooltip, ElForm, ElFormItem } from 'element-plus'
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const formData = reactive({name: 'name'})
    return () => (
      <>
      <ElTooltip content="content"><span>hover me work</span></ElTooltip>
      <ElForm model={formData}>
        <ElFormItem v-slots={{
          label: () => {
            return h(ElTooltip, {
              content: 'content'
            }, h('h3', 'I am in slot and not work'))
          }
        }}></ElFormItem>
      </ElForm>
      {
        h(ElTooltip, {
          content: 'content'
        }, h('h3', 'I am not in slot with `h` and work'))
      }
      </>
    )
  }
});