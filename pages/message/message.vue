<template>
  <view :class="['message', containerClasses]">
    <!-- 顶部导航 -->
    

    <!-- 需配置bottom的偏移量, 用于底部留白 -->
    <mescroll-body :fixed="true" :top="10" height="auto" bottom="0" id="mescroll" class="mescroll" ref="mescrollRef"  @init="mescrollInit" :down="downOption" @down="downEvent" :up="upOption">
        <div class="msgList">
          <!-- 无更多消息 -->
          <view v-if="isEnd" class="msg-end">无更多消息</view>
          <msg :position="item.fromUserId!=0?'right':'left'" :avatar="item.fromUserId!=0?myAvatar:friendAvatar" :content="item.msgContent" :id="'msg_'+item.id" :msgType="item.msgType" :time="item.time"
               v-for="item in msgList" :msgId="item.id+''" :key="item.id" @msgHandle="msgHandle"></msg>
        </div>
    </mescroll-body>
    <inputBox @sendMsg="sendMsg"></inputBox>
  </view>
</template>

<script>
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
export default {
  mixins: [MescrollMixin], // 使用mixin
  components: {
    MescrollBody
  },
  data() {
    return {
      // mescroll对象
      mescroll: {},
      // 加载框状态
      status: 'loading ',
      // 消息列表
      msgList: [],
      // 好友Id
      friendId: '',
      // 用户Id
      userId: '',
      // 昵称
      nickname: '',
      // 我的头像
      myAvatar:'/static/logo3.png',
      // 朋友头像
      friendAvatar:'/static/logo2.png',
      // 是否最后
      downOption:{
        // 显示下拉刷新的进度条
        autoShowLoading: true,
        // 增大触发下拉刷新的角度,
        minAngle: 45,
        // 是否在初始化完毕之后自动执行一次上拉加载的回调
        auto: false,
        // 是否到顶部才触发
        mustToTop: true
      },
      upOption: {
        // 禁止上拉
        use: false,
        // 是否在初始化完毕之后自动执行一次上拉加载的回调
        auto: false,
        toTop: {
          // 不显示回到顶部按钮
          src: ''
        },
        isBounce: true
      },
      // 页码
      pageNum: 1,
      // 页长
      pageSize: 20,
      // 是否无消息
      isEnd: false,
      // 频次，用于实现打字机效果
      times:0,
      // 目标消息，用于实现打字机效果
      targetMsg:{},
      // 目标内容，用于实现打字机效果
      targetContent:'',
      // 定时器
      interval:{}
    }
  },
  methods: {
    async init() {
      // 初始化消息
      await this.msgPage(true);
    },
    // 滚动初始化
    async mescrollInit(mescroll) {
      await this.init();
      this.$nextTick(function () {
        this.mescroll = mescroll;
        this.mescroll.scrollTo(99999, 300)
      })
    },
    // 转化文字
    covertText(msg){
      const baseParam = uni.$u.deepClone(this.baseParam)
      let endMsg = {
        ...baseParam,
        ...msg
      }
      return endMsg
    },
    // 发送消息
    async sendMsg(msg) {
      console.log("msg",JSON.stringify(msg))
      // 初始化最终返回值
      let endMsg = this.covertText(msg)
      // 更新页面
      endMsg.position = 'right'
      this.pushMsg(endMsg)
      // 消息发送
      const result = await this.$api.message(endMsg)
      if (result.success) {
        const {data} = result
        // id回填
        endMsg.id = data.id
        data.position = 'left'
        this.pushMsg(data)
      }
    },
    // 塞入消息数组
    pushMsg(msg) {
      if(msg.position == 'left'){
        this.targetMsg = {};
        this.times = 0;
        this.targetMsg = uni.$u.deepClone(msg);
        this.targetContent = uni.$u.deepClone(this.targetMsg.msgContent)
        msg.msgContent = ''
        this.msgList.push(msg)
        this.interval = setInterval(this.intervalFunc, 50);
      }else{
        this.msgList.push(msg)
      }
      this.$nextTick(function () {
        this.mescroll.scrollTo(99999, 0)
      })
    },
    // interval
    intervalFunc(){
      // 深拷贝内容
      let content = uni.$u.deepClone(this.targetContent);
      // 记录次数
      this.times++;
      if(this.times == content.length){
        clearInterval(this.interval)
      }
      this.targetMsg.msgContent = content.substring(0,this.times);
      this.$set(this.msgList, this.msgList.length-1, this.targetMsg);
      this.$nextTick(function () {
        this.mescroll.scrollTo(99999, 0)
      })
    },
    // 下拉回调
    downEvent(){
      this.msgPage()
    },
    // 滚动到顶部触发
    async msgPage(flag){
      let _this = this
      // 参数
     const params = {
        'current': this.pageNum,
        'size': this.pageSize,
      }
      const result = await this.$api.messagePage(params)
      if (!result.success) {
        uni.$u.toast(result.message)
        return
      }
      // 需自行维护页码
      this.pageNum ++;
      // 先隐藏下拉刷新的状态
      this.mescroll.endSuccess(this.pageSize)
      const data = result.data;
      const {records} = data;
      // 不满一页,说明已经无更多消息
      if(records.length < this.pageSize){
        // 标记已无更多消息
        this.isEnd = true;
        this.mescroll.lockDownScroll(true); // 锁定下拉
      }
      const msgList = uni.$u.deepClone(this.msgList)
      const topMsg = msgList[0]
      const filterMsgList = this.msgFilter(records)
      this.msgList = filterMsgList.concat(msgList)
      this.$nextTick(()=>{
        if(this.pageNum <= 2){
          // 第一页直接滚动到底部 ( this.pageNum已在前面加1 )
          _this.mescroll.scrollTo(99999, 0)
        }else if(topMsg){
          // 保持顶部消息的位置
          let view = uni.createSelectorQuery().select('#msg_'+topMsg.id);
          view.boundingClientRect(v => {
            console.log("节点离页面顶部的距离=" + v.top);
            _this.mescroll.scrollTo(v.top - 100, 0) // 减去上偏移量100
          }).exec();
        }
        if(Boolean(flag)){
          // 第一页直接滚动到底部 ( this.pageNum已在前面加1 )
          _this.mescroll.scrollTo('msg_' +this.msgList[this.msgList.length-1].id , 300)
        }
      })
    },
    // 消息过滤
    msgFilter(msgList){
      const len = msgList.length
      const endMsgList = []
      for(let i=len-1; i>=0; i--){
        endMsgList.push(msgList[i])
      }
      return endMsgList
    },
    // 返回上一页
    goBack() {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
page {
  background: #f8fafc;
}

.message {
  min-height: 100vh;
  background: #f8fafc;
}

/* 顶部导航栏 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  border-bottom: 1rpx solid #e2e8f0;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  padding: 20rpx 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.back-arrow {
  font-size: 32rpx;
  color: #3b82f6;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-arrow:active {
  transform: scale(0.95);
  opacity: 0.7;
}

.header-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #1e293b;
  letter-spacing: 1rpx;
}

.header-subtitle {
  margin-top: 8rpx;
}

.subtitle-text {
  font-size: 24rpx;
  color: #64748b;
  font-weight: 400;
}

/* 无更多消息 */
.msg-end {
  padding: 30rpx 0;
  font-size: 24rpx;
  text-align: center;
  color: #94a3b8;
  background: #f1f5f9;
  margin: 20rpx 30rpx;
  border-radius: 12rpx;
  border: 1rpx solid #e2e8f0;
}

.msgList {
  padding: 120rpx 30rpx 120rpx;
  background: #f8fafc;
}

/* 消息容器优化 */
.mescroll {
  background: #f8fafc;
}

/* 输入框容器优化 */
.input-box-container {
  background: white;
  border-top: 1rpx solid #e2e8f0;
  box-shadow: 0 -2rpx 8rpx rgba(0, 0, 0, 0.05);
}

/* 消息气泡样式优化 */
.msg-bubble {
  border-radius: 16rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.08);
  border: 1rpx solid rgba(0, 0, 0, 0.05);
}

/* 时间戳样式优化 */
.msg-time {
  color: #94a3b8;
  font-size: 22rpx;
  background: rgba(255, 255, 255, 0.8);
  padding: 8rpx 16rpx;
  border-radius: 20rpx;
  backdrop-filter: blur(10rpx);
}

/* 头像样式优化 */
.msg-avatar {
  border: 2rpx solid #e2e8f0;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
}

/* 加载状态优化 */
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30rpx;
  color: #64748b;
  font-size: 24rpx;
}

/* 滚动条样式优化 */
::-webkit-scrollbar {
  width: 6rpx;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3rpx;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3rpx;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* 响应式优化 */
@media screen and (max-width: 750rpx) {
  .msgList {
    padding: 15rpx 20rpx 100rpx;
  }
  
  .msg-end {
    margin: 15rpx 20rpx;
    padding: 25rpx 0;
  }
}
</style>
