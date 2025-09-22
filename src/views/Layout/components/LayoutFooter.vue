<script setup>
</script>
<template>
    <footer class="app-footer">
        <!-- 联系我们 -->
        <div class="contact">
            <div class="container">
                <dl>
                    <dt>客户服务</dt>
                    <dd><i class="iconfont icon-kefu"></i>在线客服</dd>
                    <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
                </dl>
                <dl>
                    <dt>关注我们</dt>
                    <dd><i class="iconfont icon-weixin"></i>公众号</dd>
                    <dd><i class="iconfont icon-weibo"></i>微博</dd>
                </dl>
                <dl>
                    <dt>下载APP</dt> 
                    <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
                    <dd class="download">
                        <span>扫描二维码</span>
                        <span>立马下载APP</span>
                        <a href="javascript:;">下载页面</a>
                    </dd>  
                </dl>
                <dl>
                    <dt>服务热线</dt>
                    <dd class="hotline">400-0000-000
                        <small>周一至周日 8:00-18:00</small>
                    </dd>
                </dl>
            </div>
        </div>
        <!-- 其他 -->
        <div class="extra">
            <div class="container">
                <div class="slogan">
                    <a href="javascript:;">
                        <i class="iconfont icon-footer01"></i>
                        <span>价格亲民</span>
                    </a>
                    <a href="javascript:;">
                        <i class="iconfont icon-footer02"></i>
                        <span>物流快捷</span>
                    </a>
                    <a href="javascript:;">
                        <i class="iconfont icon-footer03"></i>
                        <span>品质新鲜</span>
                    </a>
                </div>
                <!-- 版权信息 -->
                 <div class="copyright">
                    <p>
                        <a href="javascript:;">关于我们</a>
                        <a href="javascript:;">帮助中心</a>
                        <a href="javascript:;">售后服务</a>
                        <a href="javascript:;">配送与验收</a>
                        <a href="javascript:;">商务合作</a>
                        <a href="javascript:;">搜索推荐</a>
                        <a href="javascript:;">友情链接</a>
                    </p>
                    <p>CopyRight © 小兔鲜儿</p>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
    .app-footer {
        // overflow:hidden;//“小白菜”的项目中是在这里设置，我放在了.contact中
        background-color: #f5f5f5;
        padding-top: 20px;
        // border: 2px solid #e06969;
        .contact {
            overflow:hidden; //子元素dd设置了浮动
            // border: 2px solid #5fe3c2;
            background: #fff;
            .container {
                padding: 60px 0 40px 25px;
                display: flex;//子元素dl默认垂直排列，这里设置为水平排列
            }
            dl {
                // border: 2px solid #9d69e0;
                height: 190px;
                text-align: center;
                padding: 0 72px;
                border-right: 1px solid #f2f2f2;
                color:#999; //文字颜色
                
                &:first-child { //这里是dl:first-child，即所有同级 dl 标签中的第一个 dl 标签
                    padding-left: 0;
                }
                &:last-child { //所有同级 dl 标签中的最后一个 dl 元素
                    
                    border-right: none;//这里是“服务热线块的右侧边框”
                    padding-right: 0;
                }
            }
            
            dt {
                line-height: 1; //好像是一倍字体大小
                font-size: 18px;
            }
            dd {
                margin: 36px 12px 0 0;
                float: left;
                width: 92px;
                height: 92px;
                padding-top: 10px;
                border: 2px solid #ededed;

                .iconfont {
                    font-size: 36px;//图标大小
                    display: block; 
                    color: #666;
                }

                &:hover {
                    .iconfont {
                    color: $xtxColor;
                    }
                }

                &:last-child {
                    margin-right: 0;
                }
            }
            .qrcode {
                width: 92px;
                height: 92px;
                padding: 7px;
                border: 1px solid #ededed;
            }
            .download {
                padding-top: 5px;
                font-size: 14px;
                width: auto;
                height: auto;
                border: none;

                span {
                    display: block;//独占一行比较美观
                }
                 a {
                    display: block; //独占一行比较美观
                    line-height: 1;
                    padding: 10px 25px;
                    margin-top: 5px;
                    color: #fff;
                    border-radius: 2px;
                    background-color: $xtxColor;
                }
            }
            .hotline {
                padding-top: 20px;
                font-size: 22px;
                color: #666;
                width: auto;
                height: auto;
                border: none;
                small {
                    display: block; //块元素就不会并排，避免挤压到其他dl元素
                    font-size: 15px;
                    color: #999;
                }
            }
        }
        .extra {
            background-color: #333;
        }
        .slogan {
            height: 178px;
            line-height: 58px;
            padding: 60px 100px;
            border-bottom: 1px solid #434343;
            display: flex;
            justify-content: space-between;//让所有子元素在主轴上均匀分布，首尾子元素分别贴合父容器的两端，中间子元素之间的间距相等。
            a {
                height: 58px;
                line-height: 58px;
                color: #fff;
                font-size: 28px;

                i {
                    font-size: 50px;
                    vertical-align: middle;//垂直方向上，居中对齐
                    margin-right: 10px;
                    font-weight: 100;//字体粗细（字重）
                }

                span {
                    vertical-align: middle;
                    text-shadow: 0 0 1px #333;//文字边缘会有一圈非常淡的深色轮廓，增强文字与背景的对比度（尤其在浅色背景上）；相比无阴影的文字，会显得更清晰、更有 “立体感”（但效果非常 subtle，不仔细看可能察觉不到）。
                }
            }
        }

        .copyright {
            height: 170px;
            padding-top: 40px;
            text-align: center;
            color: #999;
            font-size: 15px;

            p {
                line-height: 1;
                margin-bottom: 20px;
            }

            a {
                color: #999;
                line-height: 1;
                padding: 0 10px;
                border-right: 1px solid #999;

                &:last-child {
                    border-right: none;
                }
            }
        }
    }
</style>