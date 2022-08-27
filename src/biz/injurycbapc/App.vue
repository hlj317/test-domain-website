<template>
  <div id="injury" class="injury-cbapc-page">
  </div>

</template>

<style lang="less">
@import "~src/common/less/common.less";
.injury-cbapc-page{
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
        font-size:20px;
        color:#666666;
        font-weight: bold;
        margin:10px;
    }

    .top-menu{
        background-color:#ffffff;
        height:85px;
        width:100%;
    }

    .portait-img{
        float:left;
        margin:15px 0 0 15px;
        img{
            width:60px;
            height:60px;
        }
    }

    .portait-text{
        float:left;
        margin:15px 0 0 15px;
        line-height: 30px;
    }
    .portait-text strong{
        color:#000000;
    }

    .portait-qrcode{
        float:left;
        margin-left:15px;
        line-height: 30px;
    }

    .portait-qrcode img{
        width:90px;
        height:90px;
    }

    .text-name{
        font-size:18px;
        color:#666666;
        img{
            width:20px;
            height:21px;
            margin:5px 10px 0 12px;
        }
    }

    .text-game{
        font-size:18px;
        color:#cc0000;
        font-weight: bold;
    }

    .scan{
        color:#cc0000;
        font-weight: bold;
    }

    .text-notice{
        font-size:18px;
        color:#666666;
    }

    .clear{
        clear:both;
    }

    .nav{
        background:#20232c;
        width:100%;
        height:40px;
        line-height:40px;
        list-style: none;
        padding-left:40px;
    }

    .nav li{
        float:left;
        margin-left:0;
        margin-right:30px;
        font-size:20px;
        a{
            display: block;
            font-weight: bold;
            text-align:center;
            cursor: pointer;
            width: 100px;                
            height: 40px;
            color:#cccccc;
            &.selected {               
                height: 40px;
                color:#ffffff;
                background: #cc0000;
            }
        }
        &.vote-ratio a{
            width: 150px;    
        }
    }

    .news-nav{
        background:#ffffff;
        width:100%;
        height:1px;
        line-height:1px;
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

    .updatetime{
        text-align: left;
        margin-left: 20px;
        color:#333333;
        font-size:14px;
        margin:10px 0 5px 39px;
    }

    .injury-page{
        background: #ffffff;
    }
    .list{
        width:100%;
        font-size:16px;
        margin-top:5px;
        border: 1px solid #333333;
        border-spacing: 0;/*去掉单元格间隙*/
    }
    .team_logo{
        width: 140px;
        text-align: center;
    }
    .logo{
        width: 140px;
    }
    .name{
        width: 200px;
        color:#000000;
    }
    .status{
        width: 100px;
        color:#000000;
    }
    .detail{
        padding:8px;
        color:#000000;
    }
    .title td{
        padding-left:4px;
    }
    .empty{
        height:10px;
        line-height:10px;
    }
    th{
        border: 1px solid #333333;
        background: #a2cafd;
        font-weight: bold;
        padding:8px 0 8px 8px;
        vertical-align: middle;
        color:#ffffff;
    }
    td{
        border: 1px solid #333333;
        padding:8px;
        vertical-align: middle;
    }
    .none{
        text-align: center;
        color:#666666;
    }
    .title th{
        background: #f6f6f6;
    }
    .title img{
        width: 100px;
        height: 100px;
    }
    .team-name{
        padding:8px 0 8px 8px;
    }
    .en-name{
        margin-left:15px;
        font-size:14px;
    }
    .important{
        background-color:#f22c11;
        padding:3px;
        border-radius:5px;
        color:#ffffff;
        font-size:6px;
        position: relative;
        top:-2px;
        left:5px;
        z-index:99;
    }
    .bottom{
        margin-top:45px;
        height: 149px;
        background:#20232c;
        width:100%;
        color:#ffffff;
        font-size:18px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .bottom-text{
        float:left;
        margin:0;
        line-height: 35px;
    }
    a.bottom-link{
        color:#ffffff;
    }
    .bottom-qrcode{
        float:left;
        margin:0 0 0 40px;
    }
    .bottom-qrcode img{
        width:129px;
        height:149px;
    }
}
</style>

<script>

export default {
  data () {
    return {
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

