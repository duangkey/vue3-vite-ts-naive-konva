<template>
  <div class="layer_wrapper">
    <template-stage :layerInfo="layerInfo" :markResources="markResources" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import TemplateStage from '@/components/konvaTemplate/KonvaTemplateStage.vue'
import { getIamge } from '@/utils/tool'
import { getResourcesList } from '@/api/konvaDatas/layer'
import { useMessage } from 'naive-ui'
const RET_CODE = '0'

const layerImg = getIamge('layer', 'svg')
const layerInfo: object = ref({
  layer: layerImg,
})
const markResources: any = ref(null)
const message = useMessage()
onMounted(() => {
  handleResourceDatas()
})
const handleResourceDatas = async () => {
  try {
    const res: any = await getResourcesList()
    if (res.retCode === RET_CODE) {
      markResources.value = res.resultMap.resourceList
    } else {
      message.error(res.retMessage)
    }
  } catch (e) {
    console.log(e)
    message.error('请求错误，请联系管理员！')
  }
}
</script>

<style lang="scss" scoped>
.layer_wrapper {
  width: 100%;
  height: calc(100vh - 45px);
}
</style>
