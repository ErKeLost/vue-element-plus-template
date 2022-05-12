<template>
  <el-button @click="reset">重置</el-button>
  <div
    class="slide-verify"
    :style="{ width: width + 'px' }"
    id="slideVerify"
    onselectstart="return false;"
  >
    <div relative>
      <img ref="dog" class="moveImage" absolute :src="dog1" alt="" />
      <img :src="dog2" alt="" />
      <div :class="{ 'slider-verify-loading': loadBlock }"></div>
    </div>
    <!-- 图片加载遮蔽罩 -->
    <div
      class="slide-verify-slider"
      :class="{
        'container-active': containerActive,
        'container-success': containerSuccess,
        'container-fail': containerFail
      }"
    >
      <div class="slide-verify-slider-mask" :style="{ width: sliderMaskWidth }">
        <!-- slider -->
        <div
          @mousedown="sliderDown"
          class="slide-verify-slider-mask-item"
          :style="{ left: sliderLeft }"
          flex
          items-center
          justify-center
        >
          <div text-3xl class="i-mdi-arrow-right-bold arrow-class"></div>
        </div>
      </div>
      <span text-1 ml-12 c-gray class="slide-verify-slider-text">{{
        promptInfo
      }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dog1 from '@/assets/dog1.png'
import dog2 from '@/assets/dog2.jpeg'
const props = withDefaults(
  defineProps<{
    width?: number
    promptInfo?: string
  }>(),
  {
    width: 350,
    blockSize: 50,
    canvasWidth: 350,
    canvasHeight: 210,
    promptInfo: '请按住左边按钮拖动完成上方拼图'
  }
)
const emit = defineEmits<{
  (e: 'refresh'): void
  (e: 'reset'): void
}>()
const activeStatus = ref<boolean>(false) // 按住时 active 状态
const successStatus = ref<boolean>(false) // 成功状态
const failStatus = ref<boolean>(false) // 失败状态
const loadImageStatus = ref<boolean>(false) // 是否图片加载完成状态
const isMouseDown = ref<boolean>(false) // 是否按下鼠标
const success = ref<boolean>(false) // 是否已经成功
const originX = ref<number>(0)
const originY = ref<number>(0)
const timestamp = ref<number>()
const sliderLeft = ref<string>('')
const dog = ref<HTMLElement | null>()
const sliderMaskWidth = ref<string>()
const trail: number[] = []
onMounted(() => {
  init()
})
function init() {
  bindEvents()
}
function sliderDown(event: any) {
  if (success.value) return
  originX.value = event.clientX
  originY.value = event.clientY
  isMouseDown.value = true
  timestamp.value = +new Date()
  console.log(originY.value)
}
function bindEvents() {
  document.addEventListener('mousemove', (e) => {
    if (!isMouseDown.value) return false
    console.log(!isMouseDown.value)
    dog.value!.style.transition = 'none'
    const moveX = e.clientX - originX.value
    const moveY = e.clientY - originY.value
    if (moveX < 0 || moveX >= props.width) return false
    sliderLeft.value = moveX + 'px'
    let blockLeft = ((props.width - 40 - 20) / (props.width - 40)) * moveX
    dog.value!.style.left = blockLeft + 'px'
    activeStatus.value = true // add active
    sliderMaskWidth.value = moveX + 50 + 'px'
    trail.push(moveY)
  })
  document.addEventListener('mouseup', (e) => {
    dog.value!.style.transition = 'left 0.3s ease-in-out'
    if (!isMouseDown.value) return false
    isMouseDown.value = false
    if (e.clientX === originX.value) return false
    activeStatus.value = false // remove active
    timestamp.value = +new Date() - timestamp.value!
    // const { spliced, TuringTest } = this.verify()
    // if (spliced) {
    //   if (this.accuracy === -1) {
    //     this.containerSuccess = true
    //     this.success = true
    //     this.$emit('success', this.timestamp)
    //     return
    //   }
    //   if (TuringTest) {
    //     // succ
    //     this.containerSuccess = true
    //     this.success = true
    //     this.$emit('success', this.timestamp)
    //   } else {
    //     this.containerFail = true
    //     this.$emit('again')
    //   }
    // } else {
    //   this.containerFail = true
    //   this.$emit('fail')
    //   setTimeout(() => {
    //     this.reset()
    //   }, 1000)
    // }
  })
}
function reset() {
  success.value = false
  activeStatus.value = false
  successStatus.value = false
  failStatus.value = false
  sliderLeft.value = '0px'
  dog.value!.style.left = ''
  sliderMaskWidth.value = ''
}
emit('reset')
</script>
<style scoped>
.moveImage {
  top: 140px;
}
.arrow-class {
  color: rgb(196, 196, 196);
}
.slide-verify {
  position: relative;
}
/* 图片加载样式 */
.slider-verify-loading {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 999;
  animation: loading 1.5s infinite;
}
@keyframes loading {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 9;
  }
}
.slide-verify-block {
  position: absolute;
  left: 0;
  top: 0;
}
.slide-verify-refresh-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 34px;
  height: 34px;
  cursor: pointer;
  background: url('../assets/icon_light.png') 0 -437px;
  background-size: 34px 471px;
}
.slide-verify-slider {
  position: relative;
  text-align: center;
  /* display: flex; */
  /* justify-content: flex-end; */
  width: calc(100%);
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  background: #f3f3f3;
  color: #45494c;
  border-radius: 5px;
}
.slide-verify-slider-mask {
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  border: 0 solid #1991fa;
  background: #d1e9fe;
}
.slide-verify-slider-mask-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 5px rgba(104, 104, 104, 0.2);
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s linear;
}
.slide-verify-slider-mask-item:hover .slide-verify-slider-mask-item-icon {
  background-position: 0 -13px;
}
.slide-verify-slider-mask-item-icon {
  position: absolute;
  top: 15px;
  left: 13px;
  width: 14px;
  height: 12px;
  background: url('../assets/icon_light.png') 0 -26px;
  background-size: 34px 471px;
}
.container-active .slide-verify-slider-mask-item {
  height: 38px;
  top: -1px;
  border: 1px solid transparent;
  transform: scale(1.05);
}
.container-active .slide-verify-slider-mask {
  height: 38px;
  border-width: 1px;
}
.container-success .slide-verify-slider-mask-item {
  height: 38px;
  top: -1px;
  border: 1px solid transparent;
  /* background-color: #68ebb4 !important; */
}
.container-success .slide-verify-slider-mask {
  height: 38px;
  border: 1px solid transparent;
  background-color: #d2f4ef;
}
.container-success .slide-verify-slider-mask-item-icon {
  background-position: 0 0 !important;
}
.container-fail .slide-verify-slider-mask-item {
  height: 38px;
  top: -1px;
  border: 1px solid transparent;
}
.container-fail .slide-verify-slider-mask {
  height: 38px;
  border: 1px solid transparent;
  background-color: #fce1e1;
}
.container-fail .slide-verify-slider-mask-item-icon {
  top: 14px;
  background-position: 0 -82px !important;
}
.container-active .slide-verify-slider-text,
.container-success .slide-verify-slider-text,
.container-fail .slide-verify-slider-text {
  display: none;
}
</style>
