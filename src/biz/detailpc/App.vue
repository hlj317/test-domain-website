<template>
  <div id="detail"
       class="news-detail">
  </div>
</template>

<style lang="less">
@import "~src/common/less/common.less";
.news-detail{

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
    .scan{
        color:#cc0000;
        font-weight: bold;
    }

    .text-game{
        font-size:18px;
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
        color:#cccccc;
        font-size:20px;
        &.vote-ratio a{
            width: 150px;    
        }
    }
    .nav li a{
        display: block;
        font-weight: bold;
        text-align:center;
        cursor: pointer;
        color:#cccccc;
        width: 100px;                
        height: 40px;
        &.selected{               
            height: 40px;
            color:#ffffff;
            background: #cc0000;
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
        margin:10px 0 10px 39px;
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
        width: 210px;
        color:#d3153b;
    }
    .name-low{
        width: 210px;
        color:#5e8610;
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
    .th-title{
        display: inline-block;
        margin-top: 8px;
        margin-left: 12px;
    }
    td{
        border: 1px solid #333333;
        padding:8px;
        vertical-align: middle;
    }
    .td-title{
        font-weight: bold;
        color:#333333;
        width:95px;
    }
    .win-rate{
        color:#d3153b;
        margin-left: 12px;
    }
    .win-rate-low{
        color:#5e8610;
        margin-left: 12px;
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
    .rank-team-up{
        background: #d3153b;
        img{
            width: 75px;
            height: 41px;
        }
    }
    .rank-team-down{
        background: #000000;
        img{
            width: 75px;
            height: 41px;
        }
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
        left:0;
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
    .detail-page{
        margin:20px 0 0 0;
        font-size:24px;
        color:#333333;
        padding:0;
        line-height: 32px;
    }
    .detail-title{
        font-size:40px;
        text-align: left;
        font-weight: bold;
        line-height: 50px;
        margin:0 30px;
    }
    .detail-img{
        width:100%;
        text-align: center;
        margin:15px 0 25px 0;
    }
    .detail-img img{
        width:680px;
        height:388px;
    }
    .detail-content{
        color:#000000;
        font-size:28px;
        line-height: 40px;
        margin:0 30px;
    }
    .detail-lable{
        font-size:24px;
        color:#666666;
        margin:10px 0 0 32px;
    }
    .detail-author{
        margin-right:20px;
    }
    .detail-time{
    }
    .detail-return{
        margin:0 0 15px 30px;
        display: block;
        color:#333333;
        font-size:24px;
    }
    .detail-dot{
        margin-right:20px;
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
    this.init();
  },
  methods: {
    init () {
    }
  },
  mounted() {
  }
}
</script>

