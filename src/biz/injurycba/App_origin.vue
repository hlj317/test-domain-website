<template>
  <div id="injury"
       class="injury-page">
    <div class="top-part">
        <div class="top-menu">
            <div class="portait-img">
                <img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/portait.png"/>
            </div>
            <div class="portait-text">
                <div class="text-name">请关注微信公众号：<strong>[篮彩老黑]</strong></div>
                <div class="text-notice">NBA伤病名单实时更新/WNBA伤病名单实时更新/NBA伤病名单实时更新</div>
            </div>
        </div>
        <div class="clear"></div>
        <ul class="nav">
            <li><a href="/injurynba">NBA</a></li>
            <li><a href="/injurywnba">WNBA</a></li>
            <li><a href="#">CBA</a><span class="selected"></span></li>
            <li class="vote-ratio"><a href="/vote">NBA投注率</a></li>
        </ul>
    </div>
    <div class="clear"></div>
    <div class="updatetime">最近更新时间：<strong>{{udpatetime}}</strong>（开赛前持续更新，敬请关注）</div>
    <table class="list" border="0" cellspacing="1" cellpadding="0">

        <!-----B----北京鸭------>
        <tr>  
            <th colspan="4" class="team-name beijing">[B]]北京鸭<span class="en-name">BeiJing</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/beijing.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----B--北京紫禁勇士------>
        <tr>  
            <th colspan="4" class="team-name yongshi">[B]北京紫禁勇士<span class="en-name">BeiJing Royal Fighter</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/yongshi.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----F----福建中华鲟------>
        <tr>  
            <th colspan="4" class="team-name fujian">[F]福建中华鲟<span class="en-name">FuJian</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/fujian.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----G----广东华南虎------>
        <tr>  
            <th colspan="4" class="team-name guangdong">[G]广东华南虎<span class="en-name">GuangDong</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/guangdong.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----G--广州龙狮------>
        <tr>  
            <th colspan="4" class="team-name guangzhou">[G]广州龙狮<span class="en-name">GuangZhou</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/guangzhou.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----J--江苏龙------>
        <tr>  
            <th colspan="4" class="team-name jiangsu">[J]江苏龙<span class="en-name">JiangSu</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/jiangsu.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----J----吉林东北虎------>
        <tr>  
            <th colspan="4" class="team-name jilin">[J]吉林东北虎<span class="en-name">JiLin</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/jilin.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----L----辽宁飞豹------>
        <tr>  
            <th colspan="4" class="team-name liaoning">[L]辽宁飞豹<span class="en-name">LiaoNing</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/liaoning.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----N----南京大圣------>
        <tr>  
            <th colspan="4" class="team-name nanjing">[N]南京大圣<span class="en-name">NanJing</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/nanjing.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----Q----青岛雄鹰------>
        <tr>  
            <th colspan="4" class="team-name qingdao">[Q]青岛雄鹰<span class="en-name">QingDao</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/qingdao.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----S----山东王者------>
        <tr>  
            <th colspan="4" class="team-name shandong">[S]山东王者<span class="en-name">ShanDong</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/shandong.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----S----上海大鲨鱼------>
        <tr>  
            <th colspan="4" class="team-name shanghai">[S]上海大鲨鱼<span class="en-name">ShangHai</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/shanghai.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----S--深圳领航者------>
        <tr>  
            <th colspan="4" class="team-name shenzhen">[S]深圳领航者<span class="en-name">ShenZhen</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/shenzhen.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr> 

        <!-----S----山西猛龙------>
        <tr>  
            <th colspan="4" class="team-name shanxi">[S]山西猛龙<span class="en-name">ShanXi</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/shanxi.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----S----四川蓝鲸------>
        <tr>  
            <th colspan="4" class="team-name sichuan">[S]四川蓝鲸<span class="en-name">SiChuan</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/sichuan.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  

        <!-----T----天津先行者------>
        <tr>  
            <th colspan="4" class="team-name tianjin">[T]天津先行者<span class="en-name">TianJin</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/tianjin.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----X----新疆飞虎------>
        <tr>  
            <th colspan="4" class="team-name xinjiang">[X]新疆飞虎<span class="en-name">XinJiang</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/xinjiang.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>  


        <!-----Z--浙江金牛------>
        <tr>  
            <th colspan="4" class="team-name zhejiang">[Z]浙江金牛<span class="en-name">ZheJiang</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/zhejiang.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 
        <tr class="empty"><td colspan="4"></td></tr>

        <!-----Z----浙江猛狮------>
        <tr>  
            <th colspan="4" class="team-name mengshi">[Z]浙江猛狮<span class="en-name">ZheJiang Lions</span></th>
        </tr> 
        <tr class="title">  
            <td rowspan="2" class="team_logo"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/cba-logo/mengshi.jpeg" /></td>
            <th class="name">姓名</th>
            <th class="status">状态</th>
            <th class="detail">详情</th>
        </tr> 
        <tr>  
            <td colspan="3" class="none">暂无，期待新赛季</td>
        </tr> 

    </table>
    <div class="bottom">
        <div class="bottom-text">
            本网站服务由[篮彩老黑]独家提供&nbsp;&nbsp;&nbsp;&nbsp;浙ICP备17001885号-4<br/>
            Copyright © 2021 lancailaohei.com 保留一切权利
        </div>
        <div class="bottom-qrcode"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/lancai_qrcode_plus.jpg" /></div>
    </div>
  </div>

</template>

<style scoped lang="less">
@import "~src/common/less/common.less";
/*
B 北京鸭  beijing       #241b16
B 北京紫禁勇士  yongshi  #502181
F 福建中华鲟  fujian     #d96b12
G 广东华南虎  guangdong  #c3261f
G 广州龙狮    guangzhou  #e6002e
J 江苏龙      jiangsu   #e97739
J 吉林东北虎   jilin     #bf2839
L 辽宁飞豹    liaoning   #2b0f3f
N 南京大圣   nanjing     #14264e
Q 青岛雄鹰   qingdao     #d9262c
S 山东王者   shandong    #4d2178
S 上海大鲨鱼  shanghai    #a82c2e
S 深圳领航者  shenzhen    #d2013a
S 山西猛龙    shanxi      #80030b
S 四川蓝鲸    sichuan     #091ab2
T 天津先行者  tianjin     #0345a3
X 新疆飞虎    xinjiang    #054189
Z 浙江金牛    zhejiang    #ad0131
Z 浙江猛狮    mengshi     #d79700
*/
.beijing{
    background-color: #241b16;
}
.yongshi{
    background-color: #502181;
}
.fujian{
    background-color: #d96b12;
}
.guangdong{
    background-color: #c3261f;
}
.guangzhou{
    background-color: #e6002e;
}
.jiangsu{
    background-color: #e97739;
}
.jilin{
    background-color: #bf2839;
}
.liaoning{
    background-color: #2b0f3f;
}
.nanjing{
    background-color: #14264e;
}
.qingdao{
    background-color: #d9262c;
}

.shandong{
    background-color: #4d2178;
}
.shanghai{
    background-color: #a82c2e;
}
.shenzhen{
    background-color: #d2013a;
}
.shanxi{
    background-color: #80030b;
}
.sichuan{
    background-color: #091ab2;
}

.tianjin{
    background-color: #0345a3;
}
.xinjiang{
    background-color: #054189;
}
.zhejiang{
    background-color: #ad0131;
}
.mengshi{
    background-color: #d79700;
}

.main-title{
    font-size:22 / @b;
    color:#666666;
    font-weight: bold;
    margin:10 / @b;
}

.top-part{
    position:fixed;
    top:0;
    left:0;
    height:200 / @b;
    width:100%;
    z-index:100;
}

.top-menu{
    background-color:#ffffff;
    height:85 / @b;
    width:100%;
    padding:10 / @b;
}

.portait-img{
    float:left;
    img{
        width:60 / @b;
        height:60 / @b;
    }
}

.portait-text{
    float:left;
    margin-left:10 / @b;
}

.text-name{
    font-size:28 / @b;
    color:#666666;
}

.text-notice{
    font-size:18 / @b;
    color:#999999
}

.clear{
    clear:both;
}

.nav{
    background:#0c859b;
    width:100%;
    height:60 / @b;
    line-height:60 / @b;
    list-style: none;
    padding:0;
}

.nav{
    background:#0c859b;
    width:100%;
    height:60 / @b;
    line-height:60 / @b;
    list-style: none;
    padding:0;
}

.nav li{
    float:left;
    margin-left:0;
    margin-right:50 / @b;
    color:#ffffff;
    font-size:24 / @b;
    &.vote-ratio a{
        width:140 / @b;   
    }
}
.nav li span{
    display: block;
}
.nav li a{
    display: block;
    width:120 / @b;
    font-weight: bold;
    text-align:center;
}
.updatetime{
    text-align: left;
    margin-left: 20 / @b;
    color:#333333;
    font-size:20 / @b;
    position: relative;
    top: -10 / @b;
    margin-top:170 / @b;
}

.selected {
    width: 0;                
    height: 0;
    border: 12 / @b solid #ffffff;
    border-top-color: transparent;    
    border-left-color: transparent;
    border-right-color: transparent;
    position: relative;
    left: 50 / @b;
    top: -22 / @b;
}

.to-link-img {
  width: 750 / @b;
  height: 200 / @b;

  img {
    width: 100%;
    height: 100%;
  }
}
.injury-page{
    background: #ffffff;
}
.list{
    width:100%;
    font-size:24 / @b;
    margin-top:5 / @b;
    border: 1 / @b solid #333333;
    border-spacing: 0;/*去掉单元格间隙*/
}
.team_logo{
    width: 128 / @b;
    text-align: center;
}
.logo{
    width: 128 / @b;
    padding-left:0;
}
.name{
    width: 210 / @b;
    color:#000000;
}
.status{
    width: 135 / @b;
    color:#000000;
}
.detail{
    padding:8 / @b;
    color:#000000;
}
.title td{
    padding-left:4 / @b;
}
.empty{
    height:10 / @b;
    line-height:10 / @b;
}
th{
    border: 1 / @b solid #333333;
    background: #a2cafd;
    font-weight: bold;
    padding:8 / @b 0 8 / @b 8 / @b;
    vertical-align: middle;
    color:#ffffff;
}
td{
    border: 1 / @b solid #333333;
    padding:8 / @b 4 / @b 8 / @b 8 / @b;
    vertical-align: middle;
}
.none{
    text-align: center;
    color:#666666;
}
.title th{
    background: #f6f6f6;
}
img{
    width: 110 / @b;
    height: 110 / @b;
}
.team-name{
    padding:8 / @b 0 8 / @b 8 / @b;
}
.en-name{
    margin-left:15 / @b;
    font-size:20 / @b;
}
.important{
    background-color:#f22c11;
    padding:3 / @b;
    border-radius:5 / @b;
    color:#ffffff;
    font-size:16 / @b;
    position: relative;
    top:-30 / @b;
    left:-18 / @b;
    z-index:99;
}
.bottom{
    margin-top:45 / @b;
    height: 149 / @b;
    background:#20232c;
    width:100%;
    color:#ffffff;
    font-size:20 / @b;
}
.bottom-text{
    float:left;
    margin:40 / @b 0 0 30 / @b;
    line-height: 35 / @b;
}
.bottom-qrcode{
    float:right;
    margin:0 20 / @b 0 0;
}
.bottom-qrcode img{
    width:129 / @b;
    height:149 / @b;
}
</style>

<script>

export default {
  data () {
    return {
       udpatetime : ''
    }
  },
  components: {
  },
  computed: {
  },
  created () {
  },
  methods: {
    init () {
    }
  },
  mounted() {
      const udpatetime = document.getElementById("udpatetime").value;
      this.udpatetime = udpatetime || "2021-06-22[周二]09:50";
  }
}
</script>

