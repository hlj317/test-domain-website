<template>
  <div id="injury" class="injury-wnbapc-page">
  </div>
</template>

<style lang="less">
@import "~src/common/less/common.less";
.injury-wnbapc-page{
    /*
    阳光:#c41330     sun
    自由人:#a45025   liberty
    神秘人:#05285e   mystics
    梦想:#538fcd     dream
    天空:#bf9b00     sky
    狂热:#c13b42     fever 
    风暴:#365a4e     storm
    王牌:#151e27     aces
    水星:#e6631f     mercury
    火花:#52247c     sparks
    飞翼:#11244c     wings
    山猫:#12805d     lynx
    */
    .sun{
        background-color: #c41330;
    }
    .liberty{
        background-color: #a45025;
    }
    .mystics{
        background-color: #05285e;
    }
    .dream{
        background-color: #538fcd;
    }
    .sky{
        background-color: #bf9b00;
    }
    .fever{
        background-color: #c13b42;
    }
    .storm{
        background-color: #365a4e;
    }
    .aces{
        background-color: #151e27;
    }
    .mercury{
        background-color: #e6631f;
    }
    .sparks{
        background-color: #52247c;
    }
    .wings{
        background-color: #11244c;
    }
    .lynx{
        background-color: #12805d;
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
            color:#cccccc;
            font-weight: bold;
            text-align:center;
            cursor: pointer;
            width: 100px;                
            height: 40px;
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

