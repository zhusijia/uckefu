<template>
    <div>
        <div class="line"></div>
        <el-menu  class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"  style="height:70px;">
            <el-menu-item index="1">易能通客服系统</el-menu-item>
            <el-menu-item index="2" style="float: right;">坐席</el-menu-item>
            <el-menu-item index="3" style="float: right;">系统</el-menu-item>
            <el-menu-item index="4" style="float: right;">工单导出</el-menu-item>
        </el-menu>
    </div>
</template>

        <script>
            export default {
                data() {
                    return {
                        // activeIndex: '1',
                        // activeIndex2: '1'
                    };
                },
                methods: {
                    handleSelect(key, keyPath) {
                        console.log(key, keyPath);
                    }
                }
            }
        </script>
