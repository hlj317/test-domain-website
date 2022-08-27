<template>
  <div id="injury"
       class="injury-page">
    <div class="top-part">
        <div class="top-menu">
            <div class="portait-img">
                <img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/portait.png"/>
            </div>
            <div class="portait-text">
                <div class="text-name"><span class="text-game">每日红单推荐</span>请关注微信公众号：<strong>[篮彩老黑]</strong></div>
                <div class="text-notice">NBA伤病名单实时更新、篮彩投注热度更新、WNBA伤病名单实时更新</div>
            </div>
        </div>
        <div class="clear"></div>
        <ul class="nav">
            <li><a href="/injurynba.html">NBA</a></li>
            <li class="vote-ratio"><a href="#">盘口投注率</a><span class="selected"></span></li>
            <li><a href="/injurywnba.html">WNBA</a></li>
            <li class="vote-ratio"><a href="/info.html">WNBA新闻</a></li>
        </ul>
    </div>
    <div class="clear"></div>
    <div class="updatetime">最近更新时间：<strong>{{udpatetime}}</strong>（在开赛前，投注率会一直变化）</div>
    <div class="pick">
        <span class="pick-time">
            <span class="arrow-left" @click="cal('left')">
                <img :src="arrowLeftImg"/>
            </span>
            <span class="arrow-text">{{currentDate}}</span>
            <span class="arrow-right" @click="cal('right')">
                <img :src="arrowRightImg"/>
            </span>
        </span>
        <span class="source">投注率来源：</span>
        <span class="source-name">NBA Las Vegas Odds</span>
    </div>
    <table class="list" border="0" cellspacing="1" cellpadding="0">

        <tr>
            <th class="th-time">比赛时间</th>
            <th class="th-verse">比赛对阵双方</th>
            <th class="th-trend">让分盘口趋势变化</th>
            <th class="th-ratio">让分投注比例</th>
        </tr>

        <template v-for="(item,index) in currentData">
            <tr class="play-time-tr" :key="index">  
                <td rowspan="3" class="play-time">{{item.time}}</td>
            </tr> 
        
            <tr :key="index">  
                <td class="verse-logo"><img :src="getTeam(item.awayName).img" /><span class="verse-name">{{getTeam(item.awayName).name}}</span></td>
                <td class="verse-trend"><span class="verse-left">{{item.awayLeftPoints}}</span><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/arrow.png" /><span class="verse-right">{{item.awayRightPoints}}</span></td>
                <td class="verse-ratio">{{item.awayRatio}}%<span class="verse-wrapper"><span class="verse-inner" v-bind:style="{ width: item.awayRatio + '%' }"></span></span></td>
            </tr> 
            <tr :key="index">  
                <td class="verse-logo"><img :src="getTeam(item.homeName).img" /><span class="verse-name">{{getTeam(item.homeName).name}}[主]</span></td>
                <td class="verse-trend"><span class="verse-left">{{item.homeLeftPoints}}</span><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/arrow.png" /><span class="verse-right">{{item.homeRightPoints}}</span></td>
                <td class="verse-ratio">{{item.homeRatio}}%<span class="verse-wrapper"><span class="verse-inner" v-bind:style="{ width: item.homeRatio + '%' }"></span></span></td>
            </tr> 
            <tr class="empty" :key="index" v-if="index !== (lastTrIndex-1)"><td colspan="4"></td></tr> 
        </template>

    </table>
    <div class="bottom">
        <div class="bottom-text">
            本网站服务由[篮彩老黑]独家提供<br/>
            <span>版权所有ICP证：</span>
            <a href="https://beian.miit.gov.cn/" target="_blank" class="bottom-link">浙ICP备17001885号-5</a><br/>
            Copyright © 2022 cbdyou.com.cn 保留一切权利
        </div>
        <div class="bottom-qrcode"><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/lancai_qrcode_plus.jpg" /></div>
    </div>
  </div>

</template>

<style scoped lang="less">
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
    color:#ffffff;
    font-size:24 / @b;
    width:120 / @b;
    font-weight: bold;
    text-align:center;
    &.vote-ratio{
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
.pick{
    margin:3 / @b 0 0 0;
}
.pick-time{
   border:1 / @b solid #999999;
   border-radius: 4 / @b;
   padding:0;
   width:300 / @b;
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   margin:0 0 10 / @b 20 / @b;
}
.arrow-left{
    display: inline-flex;
    align-items: center;
    width:70 / @b;
    height:34 / @b;
    img{
        width:15 / @b;
        height:23 / @b;
    }
    margin-left:12 / @b;
}
.arrow-right{
    display: inline-flex;
    align-items: center;
    width:70 / @b;
    height:34 / @b;
    flex-direction: row-reverse;
    img{
        width:15 / @b;
        height:23 / @b;
    }
    margin-right:12 / @b;
}
.arrow-text{
    font-size:18 / @b;
}
.source{
    margin:0 0 0 10 / @b;
    font-size:20 / @b;
    display: inline-block;
    position: relative;
    top: -5 / @b;
}
.source-name{
    display: inline-block;
    font-size:20 / @b;
    font-weight: bold;
    position: relative;
    top: -5 / @b;
}
.th-time{
    width:120 / @b;
}
.th-verse{
    width:265 / @b;
}
.th-trend{
    width:175 / @b;
}
.th-ratio{

}
.play-time-tr{
    background: #efefef;
}
.play-time{
}
.verse-logo{
    img{
        width:55 / @b;
        height:55 / @b;
    }
}
.verse-name{
    display: inline-block;
    margin:14 / @b 0 0 10 / @b;
}
.verse-trend{
    font-weight: bold;
    img{
        width:20 / @b;
        height:21 / @b;
        margin:15 / @b 10 / @b 0 12 / @b;
    }
}
.verse-left,.verse-right{
    width:50 / @b;
    height:50 / @b;
    background:#999999;
    display:inline-flex;
    border-radius:50 / @b;
    justify-content:center;
    align-items:center;
    font-size:14 / @b;
    color:#ffffff;
}
.verse-right{
    background:#d16c73;
}
.verse-ratio{
    font-weight: bold;
    color:#000000;
    font-size:18 / @b;
}
.verse-wrapper{
    width:100 / @b;
    height:20 / @b;
    background:#cccccc;
    display:inline-block;
    border-radius:5 / @b;  
    margin:0 0 0 10 / @b;
    position: relative;
    top:4 / @b;
}
.verse-inner{
    width:50 / @b;
    height:20 / @b;
    background:#1dc25d;
    display:inline-block;
    border-radius:5 / @b;
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
    height:20 / @b;
    background: #ffffff;
    td{
        padding:0;
    }
}
th{
    border: 1 / @b solid #666666;
    border-top:none;
    border-bottom:none;
    background: #de4f67;
    font-weight: bold;
    padding:15 / @b 0 15 / @b 10 / @b;
    vertical-align: middle;
    color:#ffffff;
    font-size:18 / @b;
}
td{
    border: 1 / @b solid #666666;
    border-bottom:none;
    padding:12 / @b 0 12 / @b 10 / @b;
    vertical-align: middle;
    font-size:18 / @b;
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
</style>

<script>
import { myData } from '../common/data/mydata_vote_2.js';
import { getTeam } from '../common/js/utils.js';
export default {
  data () {
    return {
        udpatetime : '',
        currentData:{},
        currentDate: '',
        lastTrIndex : 0,
        currentIndex: 0,
        arrowLeftImg: '',
        arrowRightImg: ''
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
        this.currentIndex = myData.length-1;
        this.update();
    },
    update(){
        this.currentData = myData[this.currentIndex].list;
        this.currentDate = myData[this.currentIndex].date;
        this.lastTrIndex = myData[this.currentIndex].list.length;
        this.arrowLeftImg = (this.currentIndex === 0) ? "https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/arrow-left-grey.png" : "https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/arrow-left.png";
        this.arrowRightImg = (this.currentIndex === myData.length-1) ? "https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/arrow-right-grey.png" : "https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/arrow-right.png";
    },
    gotoPage(target){
        window.location.href = "/injury" + target;
    },
    getTeam(name){
        return getTeam(name);
    },
    cal(direction){
        if(direction === "left"){
            if(this.currentIndex === 0) return;
            this.currentIndex -= 1;
        }else{
            if(this.currentIndex === myData.length-1) return;
            this.currentIndex += 1;
        }
        this.update();
    }
  },
  mounted() {
      const udpatetime = document.getElementById("udpatetime").value;
      this.udpatetime = udpatetime || "2021-06-22[周二]09:50";
  }
}
</script>

