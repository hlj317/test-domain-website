<template>
  <div id="injury" class="injury-cba-page">
  </div>

</template>

<style lang="less">
@import "~src/common/less/common.less";
.injury-cba-page{
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
        width:70 / @b;
        img{
            width:60 / @b;
            height:60 / @b;
        }
    }

    .portait-text{
        float:left;
        width:640 / @b;
    }

    .text-name{
        font-size:28 / @b;
        color:#666666;
    }

    .text-game{
        font-size:28 / @b;
        color:#cc0000;
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
        font-size:24 / @b;
        a{
            display: block;
            color:#ffffff;
            width:120 / @b;
            font-weight: bold;
            text-align:center;
        }
        &.vote-ratio a{
            width:140 / @b;   
        }
    }
    .nav li span{
        display: block;
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

    .news-nav{
        background:#ffffff;
        width:100%;
        height:1 / @b;
        line-height:1 / @b;
        list-style: none;
        padding:0;
        overflow: hidden;
        li{
        float:left;
        margin:0;
            a{
                display: block;
                color:#ffffff;
            }
            span{
                display: block;
            }
        }
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
        border: 1 / @b solid #666666;
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
        border: 1 / @b solid #666666;
        background: #a2cafd;
        font-weight: bold;
        padding:8 / @b 0 8 / @b 8 / @b;
        vertical-align: middle;
        color:#ffffff;
    }
    td{
        border: 1 / @b solid #666666;
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
        margin:20 / @b 0 0 30 / @b;
        width:560 / @b;
        line-height: 35 / @b;
    }
    a.bottom-link{
        color:#ffffff;
    }
    .bottom-qrcode{
        float:right;
        width:130/ @b;
        margin:0 20 / @b 0 0;
    }
    .bottom-qrcode img{
        width:129 / @b;
        height:149 / @b;
    }
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
  }
}
</script>

