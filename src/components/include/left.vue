<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    background-color="#545c64" text-color="#fff" router active-text-color="#ffd04b">
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="agent">
      <i class="el-icon-menu"></i>
      <span slot="title">坐席工作台</span>
    </el-menu-item>
    <el-submenu index="contacts">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>联系人</span>
      </template>
      <el-menu-item index="1-1">全部联系人</el-menu-item>
      <el-menu-item index="1-2">粉丝</el-menu-item>
      <el-menu-item index="1-2">注册会员</el-menu-item>
      <el-menu-item index="1-2">交互会员</el-menu-item>
      <el-menu-item index="1-2">用户</el-menu-item>
      <el-menu-item index="1-2">车主</el-menu-item>
    </el-submenu>
    <el-submenu index="/work/agent">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>工单创建</span>
      </template>
      <el-menu-item index="1-1">我的工单</el-menu-item>
      <el-menu-item index="1-2">创建工单</el-menu-item>
      <el-menu-item index="1-2">我的所有工单</el-menu-item>
      <el-menu-item index="1-2">所有工单</el-menu-item>
      <el-menu-item index="1-2">待审核工单</el-menu-item>
    </el-submenu>
    <el-submenu index="/work/admin">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>工单管理</span>
      </template>
      <el-menu-item index="1-1">我的工单</el-menu-item>
      <el-menu-item index="1-2">管理员工单</el-menu-item>
      <el-menu-item index="1-2">申领工单</el-menu-item>
      <el-menu-item index="1-2">我的所有工单</el-menu-item>
      <el-menu-item index="1-2">所有工单</el-menu-item>
    </el-submenu>
    <el-menu-item index="/topiclist">
      <i class="el-icon-menu"></i>
      <span slot="title">知识库</span>
    </el-menu-item>
    <el-submenu index="/notice">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>客服设置</span>
      </template>
      <el-menu-item-group>
        <template slot="title">公告设置</template>
        <el-menu-item index="1-1">公告管理</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">客服设置</template>
        <el-menu-item index="1-1">对话设置</el-menu-item>
        <el-menu-item index="1-1">黑名单</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/quickreply">
      <i class="el-icon-menu"></i>
      <span slot="title">快捷回复</span>
    </el-menu-item>
    <el-submenu index="history">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>会话历史</span>
      </template>
      <el-menu-item-group>
        <template slot="title">会话信息</template>
        <el-menu-item index="1-1">历史会话</el-menu-item>
        <el-menu-item index="1-1">当前会话</el-menu-item>
        <el-menu-item index="1-1">排队队列</el-menu-item>
        <el-menu-item index="1-1">访客留言</el-menu-item>
        <el-menu-item index="1-1">满意度评价</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">统计功能</template>
        <el-menu-item index="1-1">满意度统计</el-menu-item>
        <el-menu-item index="1-1">客服坐席</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">服务小结</template>
        <el-menu-item index="1-1">多媒体客服</el-menu-item>
        <el-menu-item index="1-1">已处理多媒体客服</el-menu-item>
        <el-menu-item index="1-1">呼叫中心</el-menu-item>
        <el-menu-item index="1-1">已处理呼叫中心</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">坐席信息</template>
        <el-menu-item index="1-1">在线坐席</el-menu-item>
        <el-menu-item index="1-1">全部坐席</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/xiaoe">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>智能机器人</span>
      </template>
      <el-menu-item-group>
        <template slot="title">智能机器人</template>
        <el-menu-item index="1-1">机器人选项</el-menu-item>
        <el-menu-item index="1-1">对话测试</el-menu-item>
        <el-menu-item index="1-1">用户提问历史</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">语料库配置</template>
        <el-menu-item index="1-1">词库配置</el-menu-item>
        <el-menu-item index="1-1">对话场景</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/callcenter">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>语音渠道</span>
      </template>
      <el-menu-item-group>
        <template slot="title">通话信息</template>
        <el-menu-item index="1-1">当前通话</el-menu-item>
        <el-menu-item index="1-1">排队队列</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">坐席信息</template>
        <el-menu-item index="1-1">在线坐席</el-menu-item>
        <el-menu-item index="1-1">全部坐席</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/softphone">
      <i class="el-icon-menu"></i>
      <span slot="title">弹屏测试</span>
    </el-menu-item>
    <el-menu-item index="/systemOutbound">
      <i class="el-icon-menu"></i>
      <span slot="title">系统弹屏</span>
    </el-menu-item>
    <el-submenu index="/visit">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>回访管理</span>
      </template>
      <el-menu-item index="1-1">我的回访</el-menu-item>
      <el-menu-item index="1-2">已关联的工单</el-menu-item>
    </el-submenu>
    <el-menu-item index="/form">
      <i class="el-icon-menu"></i>
      <span slot="title">统计</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="stylus">

</style>