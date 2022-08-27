<template>
  <div id="detail"
       class="news-detail">
  </div>

</template>

<style lang="less">
@import "~src/common/less/common.less";
.news-detail{
    font-weight: 440;
    /*
    公牛:#d3153b      bulls
    老鹰:#d0032a     hawks
    */
    .bulls{
        background-color: #d3153b;
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

    .nav li{
        float:left;
        margin-left:0;
        margin-right:50 / @b;
        font-size:24 / @b;
        a{
            display: block;
            width:120 / @b;
            font-weight: bold;
            text-align:center;
            color:#ffffff;
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
        table-layout:fixed;
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
        color:#d3153b;
    }
    .name-low{
        width: 210 / @b;
        color:#5e8610;
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
        padding:8 / @b 0 8 / @b 15 / @b;
        vertical-align: middle;
        color:#ffffff;
    }
    .th-title{
        display: inline-block;
        margin-top: 8 / @b;
        margin-left: 12 / @b;
    }
    td{
        border: 1 / @b solid #666666;
        padding:8 / @b 4 / @b 8 / @b 15 / @b;
        vertical-align: middle;
    }
    .td-title{
        font-weight: bold;
        color:#333333;
    }
    .win-rate{
        color:#d3153b;
        margin-left: 12 / @b;
    }
    .win-rate-low{
        color:#5e8610;
        margin-left: 12 / @b;
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
    .rank-team-up{
        background: #d3153b;
        img{
            width: 99 / @b;
            height: 54 / @b;
        }
    }
    .rank-team-down{
        background: #000000;
        img{
            width: 99 / @b;
            height: 54 / @b;
        }
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
    .detail-page{
        margin:160 / @b 0 0 0;
        font-size:24 / @b;
        color:#333333;
        padding:0;
        line-height: 32 / @b;
    }
    .detail-title{
        font-size:40 / @b;
        text-align: left;
        font-weight: bold;
        line-height: 50 / @b;
        margin:0 30 /@b;
    }
    .detail-img{
        width:100%;
        text-align: center;
        margin:15 / @b 0 25 /@b 0;
    }
    .detail-img img{
        width:680 / @b;
        height:388 / @b;
    }
    .detail-content{
        color:#000000;
        font-size:28 / @b;
        line-height: 40 / @b;
        margin:0 30 /@b;
    }
    .detail-lable{
        font-size:24 / @b;
        color:#666666;
        margin:10 / @b 0 0 32 / @b;
    }
    .detail-author{
        margin-right:20 / @b;
    }
    .detail-time{
    }
    .detail-return{
        margin:0 0 15/@b 30/@b;
        display: block;
        color:#333333;
        font-size:24 / @b;
        position: relative;
        z-index: 9999;
    }
    .detail-dot{
        margin-right:20 / @b;
    }
    .article-title{
        color:#cc0000;
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
    },
    gotoPage(target){
        window.location.href = "/injury" + target;
    }
  },
  mounted() {
  }
}
</script>

