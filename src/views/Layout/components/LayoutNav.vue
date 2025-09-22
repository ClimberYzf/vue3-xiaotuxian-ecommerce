<script setup>
</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
        <!-- 为 true 时，显示“已登录”相关内容,这里先写死，后续改-->
        <template v-if="true">
            <li>
                <a href="javascript:;">
                    <i class="iconfont icon-user"></i>
                    周深                    
                </a>
            </li>
            <li>
                <el-popconfirm title="确认退出吗？" confirm-button-text="确认" cancel-button-text="取消">
                    <template #reference>
                        <a href="javascript:;">退出登录</a>
                    </template>
                </el-popconfirm>
            </li>
            <li><a href="javascript:;">我的订单</a></li>
            <li><a href="javascript:;">会员中心</a></li>
        </template>
        <!-- 为 false 时，显示“未登录”相关内容 -->
        <template v-else>
            <li><a href="javascript:;">请先登录</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
            <li><a href="javascript:;">关于我们</a></li>
        </template>
    </ul>
        </div>
        
    </nav>
</template>

<style scoped lang="scss">
    .app-topnav {
        background-color: #333;
         ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;
        li {
            a {
                display:inline-block;
                padding: 0 15px;
                color: #cdcdcd;
                line-height:1;    
                i {
                    font-size: 14px;
                    margin-right: 2px;
                }
                &:hover {
                    color:$xtxColor;
                }
                }
                
            ~li {
                a{
                    border-left: 2px solid #666;
                }
            }
            }
        }
    }

    
   
</style>