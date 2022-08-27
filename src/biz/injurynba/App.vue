<template>
  <div id="injury"
       class="injury-nba-page">
  </div>

</template>

<style lang="less">
@import "~src/common/less/common.less";
.injury-nba-page{
    font-weight: 440;
    /*
    骑士:#88023f      cavaliers
    公牛:#d3153b      bulls
    雄鹿:#034b1d      bucks
    开拓者:#d40f23    blazers
    76人:#0151a8     seven6ers
    凯尔特人:#01854c  celtics 
    快船:#0354ad     clippers
    灰熊:#5b76ad     grizzlies
    老鹰:#d0032a     hawks
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
        background-color: #d0032a;
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

