<template>
  <div class="kovna_wrapper" ref="wrapper">
    <div class="kovna_container" ref="container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Konva from 'konva'
import { useResizeObserver } from '@vueuse/core'
import { getSvgNaturalSize } from '@/utils/tool'

//封装后使用props传--imgaes's path

const wrapper = ref(null)
const container = ref(null)
let stage: any = null
let layer: any = null
let inited = false
let mapPathSize = { width: 0, height: 0 }
let containerSize = { width: 0, height: 0 }

const props = defineProps({
  layerInfo: {
    type: Object,
    required: true,
    default: () => {},
  },
  markResources: {
    type: Array,
    required: false,
    default: () => [],
  },
})
const emit = defineEmits(['stage:dragmove'])
/**
 * 对DOM元素尺寸的监听
 */
useResizeObserver(wrapper, (entries) => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  containerSize = { width, height }
  if (stage) {
    stage.width(width)
    stage.height(height)
  }
})
onMounted(() => {
  if (!layer) {
    graphLayer(props.layerInfo?.layer)
  }
})
/**
 * 初始化标签及canvas容器
 */
const initGraph = () => {
  const { width, height } = containerSize
  const ufStage = new Konva.Stage({
    container: container.value, // id of container <div>
    width,
    height,
    draggable: true,
  })
  const ufLayer = new Konva.Layer()
  stage = ufStage
  layer = ufLayer
  ufStage.add(ufLayer)
  ufLayer.draw()
  ufStage.on('scale', () => {
    console.log('zoom')
  })
  ufStage.on('dragmove', () => {
    if (ufStage.x() > 0) {
      ufStage.x(0)
    }
    emit('stage:dragmove', { x: ufStage.x(), y: ufStage.y() })
  })
}
/**
 * 绘制底图
 */
const graphLayer = async (url: string = '') => {
  stage?.destroy()
  initGraph()
  const { width, height } = await getSvgNaturalSize(url)
  mapPathSize = { width, height }
  stage.scale({
    y: containerSize.height / height,
    x: containerSize.height / height,
  })
  Konva.Image.fromURL(url, (image: any) => {
    image.width(width)
    image.height(height)
    layer.add(image)
    layer.draw()
    inited = true
  })
}
</script>

<style lang="scss" scoped>
.kovna_wrapper {
  height: 100%;
  width: 100%;
}
</style>
