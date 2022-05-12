<template>
  <div
    class="slide-verify"
    :style="{ width: width + 'px' }"
    id="slideVerify"
    onselectstart="return false;"
  >
    <!-- 图片加载遮蔽罩 -->
    <div :class="{ 'slider-verify-loading': loadBlock }"></div>
    <canvas ref="canvasElement" :width="width" :height="height"></canvas>
    <div v-if="show" @click="refresh" class="slide-verify-refresh-icon"></div>
    <canvas
      ref="blockElement"
      :width="width"
      :height="height"
      class="slide-verify-block"
    ></canvas>
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
          @touchstart="touchStartEvent"
          @touchmove="touchMoveEvent"
          @touchend="touchEndEvent"
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
        sliderText
      }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
const PI = Math.PI
function sum(x: number, y: number) {
  return x + y
}
function square(x: number) {
  return x * x
}
const props = withDefaults(
  defineProps<{
    blockRadio?: number
    blockSize?: number
    canvasWidth?: number
    canvasHeight?: number
    promptInfo?: string
  }>(),
  {
    blockRadio: 10,
    blockSize: 50,
    canvasWidth: 350,
    canvasHeight: 210,
    promptInfo: '请按住左边按钮拖动完成上方拼图'
  }
)
const emit = defineEmits<{
  (e: 'refresh'): void
}>()
const activeStatus = ref<boolean>(false) // 按住时 active 状态
const successStatus = ref<boolean>(false) // 成功状态
const failStatus = ref<boolean>(false) // 失败状态
const canvasElement = ref<HTMLCanvasElement | null>() // canvas
const blockElement = ref<HTMLCanvasElement | null>() // 滑块
const loadImageStatus = ref<boolean>(false) // 是否图片加载完成状态
const blockLeft = ref<number>(0)
const blockTop = ref<number>(0)
onMounted(() => {
  initComponent()
})
function initComponent(): void {
  renderCanvas()
  initCanvasRef()
  bindEventFn()
}
function initCanvasRef() {}

function bindEventFn() {}
function renderCanvas() {
  const canvas = canvasElement.value!.getContext('2d')
  const block = blockElement.value!.getContext('2d')
  console.log(canvas)
  console.log(block)
  initImage(canvas, block)
}
function initImage(canvas: any, block: any) {
  const img = createImage(() => {
    // 加载完毕 关闭 loading
    loadImageStatus.value = false
    drawBlockImage(canvas, block)
  })
}
// 创建图片
function createImage(onload: any) {
  const img: HTMLImageElement = document.createElement('img')
  img.crossOrigin = 'Anonymous'
  img.onload = onload
  img.onerror = () => {
    img.src = getRandomImg()
  }
  img.src = getRandomImg()
  return img
}
function getRandomImg() {
  return (
    'https://picsum.photos/300/150/?image=' + getRandomNumberByRange(0, 1084)
  )
}
function getRandomNumberByRange(start: number, end: number) {
  return Math.round(Math.random() * (end - start) + start)
}
function refresh() {
  reset()
  emit('refresh')
}
function reset() {}
function drawBlockImage(canvas: any, block: any): void {
  blockLeft.value = getRandomNumberByRange(
    props.blockSize + 10,
    props.canvasWidth - (props.blockSize + 10)
  )
  blockTop.value = getRandomNumberByRange(
    props.blockRadio * 2 + 10,
    props.canvasHeight - (props.blockSize + 10)
  )
  drawCanvas(canvas, blockLeft.value, blockTop.value, 'fill')
  drawCanvas(block, blockLeft.value, blockTop.value, 'clip')
}
function drawCanvas(
  elementContext: any,
  left: number,
  top: number,
  operation: string
) {
  const size = props.blockSize
  const radio = props.blockRadio
  elementContext.beginPath()
  elementContext.moveTo(left, top)
  elementContext.arc(
    left + size / 2,
    top - radio + 2,
    radio,
    0.72 * PI,
    2.26 * PI
  )
  elementContext.lineTo(left + size, top)
  elementContext.arc(
    left + size + radio - 2,
    top + size / 2,
    radio,
    1.21 * PI,
    2.78 * PI
  )
  elementContext.lineTo(left + size, top + size)
  elementContext.lineTo(left, top + size)
  // ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
  elementContext.lineTo(left, top)
  elementContext.lineWidth = 2
  elementContext.fillStyle = 'rgba(0, 0, 0, 0.39)'
  elementContext.strokeStyle = 'rgba(255, 255, 255, 0.7)'
  elementContext.stroke()
  elementContext[operation]()
  // Bug Fixes 修复了火狐和ie显示问题
  elementContext.globalCompositeOperation = 'destination-over'
}
// export default {
//   name: 'SlideVerify',
//   props: {
//     // block length
//     l: {
//       type: Number,
//       default: 50
//     },
//     // block radius
//     r: {
//       type: Number,
//       default: 10
//     },
//     // canvas width
//     width: {
//       type: Number,
//       default: 340
//     },
//     // canvas height
//     height: {
//       type: Number,
//       default: 210
//     },
//     sliderText: {
//       type: String,
//       default: 'Slide filled right'
//     },
//     accuracy: {
//       type: Number,
//       default: 5 // 若为 -1 则不进行机器判断
//     },
//     show: {
//       type: Boolean,
//       default: true
//     },
//     imgs: {
//       type: Array,
//       default: () => []
//     }
//   },
//   data() {
//     return {
//       containerActive: false, // container active class
//       containerSuccess: false, // container success class
//       containerFail: false, // container fail class
//       canvasCtx: null,
//       blockCtx: null,
//       block: null,
//       block_x: undefined, // container random position
//       block_y: undefined,
//       L: this.l + this.r * 2 + 3, // block real lenght
//       img: undefined,
//       originX: undefined,
//       originY: undefined,
//       isMouseDown: false,
//       trail: [],
//       sliderLeft: 0, // block right offset
//       sliderMaskWidth: 0, // mask width,
//       success: false, // Bug Fixes 修复了验证成功后还能滑动
//       loadBlock: true, // Features 图片加载提示，防止图片没加载完就开始验证
//       timestamp: null
//     }
//   },
//   mounted() {
//     this.init()
//   },
//   methods: {
//     init() {
//       this.initDom()
//       this.initImg()
//       this.bindEvents()
//     },
//     initDom() {
//       this.block = this.$refs.block
//       this.canvasCtx = this.$refs.canvas.getContext('2d')
//       this.blockCtx = this.block.getContext('2d')
//     },
//     initImg() {
//       const img = this.createImg(() => {
//         // 图片加载完关闭遮蔽罩
//         this.loadBlock = false
//         this.drawBlock()
//         this.canvasCtx.drawImage(img, 0, 0, this.width, this.height)
//         this.blockCtx.drawImage(img, 0, 0, this.width, this.height)
//         let { block_x: x, block_y: y, r, L } = this
//         let _y = y - r * 2 - 1
//         let ImageData = this.blockCtx.getImageData(x, _y, L, L)
//         this.block.width = L
//         this.blockCtx.putImageData(ImageData, 0, _y)
//       })
//       this.img = img
//     },
//     drawBlock() {
//       this.block_x = this.getRandomNumberByRange(
//         this.L + 10,
//         this.width - (this.L + 10)
//       )
//       this.block_y = this.getRandomNumberByRange(
//         10 + this.r * 2,
//         this.height - (this.L + 10)
//       )
//       this.draw(this.canvasCtx, this.block_x, this.block_y, 'fill')
//       this.draw(this.blockCtx, this.block_x, this.block_y, 'clip')
//     },
//     draw(ctx, x, y, operation) {
//       let { l, r } = this
//       ctx.beginPath()
//       ctx.moveTo(x, y)
//       ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI)
//       ctx.lineTo(x + l, y)
//       ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI)
//       ctx.lineTo(x + l, y + l)
//       ctx.lineTo(x, y + l)
//       ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
//       ctx.lineTo(x, y)
//       ctx.lineWidth = 2
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.39)'
//       ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'
//       ctx.stroke()
//       ctx[operation]()
//       // Bug Fixes 修复了火狐和ie显示问题
//       ctx.globalCompositeOperation = 'destination-over'
//     },
//     createImg(onload) {
//       const img = document.createElement('img')
//       img.crossOrigin = 'Anonymous'
//       img.onload = onload
//       img.onerror = () => {
//         img.src = this.getRandomImg()
//       }
//       img.src = this.getRandomImg()
//       return img
//     },
//     // 随机生成img src
//     getRandomImg() {
//       // return require('../assets/img.jpg')
//       const len = this.imgs.length
//       return len > 0
//         ? this.imgs[this.getRandomNumberByRange(0, len)]
//         : 'https://picsum.photos/300/150/?image=' +
//             this.getRandomNumberByRange(0, 1084)
//     },
//     getRandomNumberByRange(start, end) {
//       return Math.round(Math.random() * (end - start) + start)
//     },
//     refresh() {
//       this.reset()
//       this.$emit('refresh')
//     },
//     sliderDown(event) {
//       if (this.success) return
//       this.originX = event.clientX
//       this.originY = event.clientY
//       this.isMouseDown = true
//       this.timestamp = +new Date()
//     },
//     touchStartEvent(e) {
//       if (this.success) return
//       this.originX = e.changedTouches[0].pageX
//       this.originY = e.changedTouches[0].pageY
//       this.isMouseDown = true
//       this.timestamp = +new Date()
//     },
//     bindEvents() {
//       document.addEventListener('mousemove', (e) => {
//         if (!this.isMouseDown) return false
//         const moveX = e.clientX - this.originX
//         const moveY = e.clientY - this.originY
//         if (moveX < 0 || moveX + 38 >= this.width) return false
//         this.sliderLeft = moveX + 'px'
//         let blockLeft = ((this.width - 40 - 20) / (this.width - 40)) * moveX
//         this.block.style.left = blockLeft + 'px'
//         this.containerActive = true // add active
//         this.sliderMaskWidth = moveX + 50 + 'px'
//         this.trail.push(moveY)
//       })
//       document.addEventListener('mouseup', (e) => {
//         if (!this.isMouseDown) return false
//         this.isMouseDown = false
//         if (e.clientX === this.originX) return false
//         this.containerActive = false // remove active
//         this.timestamp = +new Date() - this.timestamp
//         const { spliced, TuringTest } = this.verify()
//         if (spliced) {
//           if (this.accuracy === -1) {
//             this.containerSuccess = true
//             this.success = true
//             this.$emit('success', this.timestamp)
//             return
//           }
//           if (TuringTest) {
//             // succ
//             this.containerSuccess = true
//             this.success = true
//             this.$emit('success', this.timestamp)
//           } else {
//             this.containerFail = true
//             this.$emit('again')
//           }
//         } else {
//           this.containerFail = true
//           this.$emit('fail')
//           setTimeout(() => {
//             this.reset()
//           }, 1000)
//         }
//       })
//     },
//     touchMoveEvent(e) {
//       if (!this.isMouseDown) return false
//       const moveX = e.changedTouches[0].pageX - this.originX
//       const moveY = e.changedTouches[0].pageY - this.originY
//       if (moveX < 0 || moveX + 38 >= this.width) return false
//       this.sliderLeft = moveX + 'px'
//       let blockLeft = ((this.width - 40 - 20) / (this.width - 40)) * moveX
//       this.block.style.left = blockLeft + 'px'
//       this.containerActive = true
//       this.sliderMaskWidth = moveX + 'px'
//       this.trail.push(moveY)
//     },
//     touchEndEvent(e) {
//       if (!this.isMouseDown) return false
//       this.isMouseDown = false
//       if (e.changedTouches[0].pageX === this.originX) return false
//       this.containerActive = false
//       this.timestamp = +new Date() - this.timestamp
//       const { spliced, TuringTest } = this.verify()
//       if (spliced) {
//         if (this.accuracy === -1) {
//           this.containerSuccess = true
//           this.success = true
//           this.$emit('success', this.timestamp)
//           return
//         }
//         if (TuringTest) {
//           // succ
//           this.containerSuccess = true
//           this.success = true
//           this.$emit('success', this.timestamp)
//         } else {
//           this.containerFail = true
//           this.$emit('again')
//         }
//       } else {
//         this.containerFail = true
//         this.$emit('fail')
//         setTimeout(() => {
//           this.reset()
//         }, 1000)
//       }
//     },
//     verify() {
//       const arr = this.trail // drag y move distance
//       const average = arr.reduce(sum) / arr.length // average
//       const deviations = arr.map((x) => x - average) // deviation array
//       const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length) // standard deviation
//       const left = parseInt(this.block.style.left)
//       const accuracy =
//         this.accuracy <= 1 ? 1 : this.accuracy > 10 ? 10 : this.accuracy
//       return {
//         spliced: Math.abs(left - this.block_x) <= accuracy,
//         TuringTest: average !== stddev // equal => not person operate
//       }
//     },
//     reset() {
//       this.success = false
//       this.containerActive = false
//       this.containerSuccess = false
//       this.containerFail = false
//       this.sliderLeft = 0
//       this.block.style.left = 0
//       this.sliderMaskWidth = 0
//       // canvas
//       let { width, height } = this
//       this.canvasCtx.clearRect(0, 0, width, height)
//       this.blockCtx.clearRect(0, 0, width, height)
//       this.block.width = width
//       // generate img
//       this.img.src = this.getRandomImg()
//       this.$emit('fulfilled')
//     }
//   }
// }
</script>
<style scoped>
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
