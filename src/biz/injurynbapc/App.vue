<template>
  <div id="injury"
       class="injury-nbapc-page">
  </div>
</template>

<style lang="less">
@import "~src/common/less/common.less";
/*
骑士:#88023f      cavaliers
公牛:#d3153b      bulls
雄鹿:#034b1d      bucks
开拓者:#d40f23    blazers
76人:#0151a8     seven6ers
凯尔特人:#01854c  celtics 
快船:#0354ad     clippers
灰熊:#5b76ad     grizzlies
老鹰:#e56e85     hawks
热火:#af1727     heat
黄蜂:#227aa8     hornets
爵士:#0d223d     jazz
国王:#6e2195     kings
尼克斯:#0341b0   knicks 
湖人:#ff9e00     lakers
魔术:#0373bb     magic
独行侠:#1e5b9a   mavericks
篮网:#000000     nets
掘金:#bb8b0f     nuggets
步行者:#fec810   pacers 
鹈鹕:#b48e4d     pelicans
活塞:#ed1248     pistons
猛龙:#d02537     raptors
火箭:#d31145     rockets
马刺:#05181f     spurs
奇才:#d3042e     wizards  
勇士:#f4c221     warriors
森林狼:#005083   timberwolves
雷霆:#e64004     thunder
太阳:#2b2370     suns
*/
.injury-nbapc-page{
    .cavaliers{
        background-color: #88023f;
    }
    .blazers{
        background-color: #d40f23;
    }
    .seven6ers{
        background-color: #0151a8;
    }
    .bulls{
        background-color: #d3153b;
    }
    .bucks{
        background-color: #034b1d;
    }

    .celtics{
        background-color: #01854c;
    }
    .clippers{
        background-color: #0354ad;
    }
    .grizzlies{
        background-color: #5b76ad;
    }
    .hawks{
        background-color: #e14261;
    }
    .heat{
        background-color: #af1727;
    }

    .hornets{
        background-color: #227aa8;
    }
    .jazz{
        background-color: #0d223d;
    }
    .kings{
        background-color: #6e2195;
    }
    .knicks{
        background-color: #0341b0;
    }
    .lakers{
        background-color: #ff9e00;
    }

    .magic{
        background-color: #0373bb;
    }
    .mavericks{
        background-color: #1e5b9a;
    }
    .nets{
        background-color: #000000;
    }
    .nuggets{
        background-color: #bb8b0f;
    }
    .pacers{
        background-color: #fec810;
    }

    .pelicans{
        background-color: #b48e4d;
    }
    .pistons{
        background-color: #ed1248;
    }
    .raptors{
        background-color: #d02537;
    }
    .rockets{
        background-color: #d31145;
    }
    .spurs{
        background-color: #05181f;
    }

    .wizards{
        background-color: #d3042e;
    }
    .warriors{
        background-color: #f4c221;
    }
    .timberwolves{
        background-color: #005083;
    }
    .thunder{
        background-color: #e64004;
    }
    .suns{
        background-color: #2b2370;
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

