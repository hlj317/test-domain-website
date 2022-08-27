<template>
  <div id="injury"
       class="injury-page">
    <div class="top-menu">
        <div class="portait-img">
            <img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/portait.png"/>
        </div>
        <div class="portait-text">
            <div class="text-name"><span class="text-game">每日红单推荐</span>请关注微信公众号：<strong>[篮彩老黑]</strong><img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/arrow.png" /><span class="scan">可扫一扫右侧二维码</span></div>
            <div class="text-notice">NBA伤病名单实时更新、篮彩投注热度更新、WNBA伤病名单实时更新</div>
        </div>
        <div class="portait-qrcode">
            <img src="https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/common/lancai_qrcode.jpg" />
        </div>
    </div>
    <div class="clear"></div>
    <ul class="nav">
        <li><a href="/injurynbapc.html">NBA</a></li>
        <li class="vote-ratio"><a class="selected" href="#">盘口投注率</a></li>
        <li><a href="/injurywnbapc.html">WNBA</a></li>
        <li class="vote-ratio"><a href="/infopc.html">WNBA新闻</a></li>
    </ul>
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
            本网站服务由[篮彩老黑]独家提供&nbsp;&nbsp;&nbsp;&nbsp;<span>版权所有ICP证：</span>
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
    width: 100px;                
    height: 40px;
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
    color:#333333;
    font-size:14px;
    margin:10px 0 5px 25px;
}
.pick{
    margin:3px 0 0 0;
}
.pick-time{
   border:1px solid #999999;
   border-radius: 4px;
   padding:0;
   width:300px;
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   margin:0 0 10px 20px;
}
.arrow-left{
    display: inline-flex;
    align-items: center;
    width:70px;
    height:34px;
    cursor: pointer;
    img{
        width:15px;
        height:23px;
    }
    margin-left:12px;
}
.arrow-right{
    display: inline-flex;
    align-items: center;
    width:70px;
    height:34px;
    cursor: pointer;
    flex-direction: row-reverse;
    img{
        width:15px;
        height:23px;
    }
    margin-right:12px;
}
.arrow-text{
    font-size:14px;
}
.source{
    margin:0 0 0 10px;
    font-size:14px;
    display: inline-block;
    position: relative;
    top: -7px;
}
.source-name{
    display: inline-block;
    font-size:14px;
    font-weight: bold;
    position: relative;
    top: -7px;
}
.th-time{
    width:180px;
}
.th-verse{
    width:230px;
}
.th-trend{
    width:200px;
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
        width:40px;
        height:40px;
    }
}
.verse-name{
    display: inline-block;
    margin:8px 0 0 10px;
}
.verse-trend{
    font-weight: bold;
    img{
        width:20px;
        height:21px;
        margin:10px 10px 0 12px;
    }
}
.verse-left,.verse-right{
    width:40px;
    height:40px;
    background:#999999;
    display:inline-flex;
    border-radius:40px;
    justify-content:center;
    align-items:center;
    font-size:12px;
    color:#ffffff;
}
.verse-right{
    background:#d16c73;
}
.verse-ratio{
    font-weight: bold;
    color:#000000;
    font-size:16px;
}
.verse-wrapper{
    width:200px;
    height:20px;
    background:#cccccc;
    display:inline-block;
    border-radius:5px;  
    margin:0 0 0 10px;
    position: relative;
    top:4px;
}
.verse-inner{
    width:100px;
    height:20px;
    background:#1dc25d;
    display:inline-block;
    border-radius:5px;
}

.selected {               
    height: 40px;
    color:#ffffff;
    background: #cc0000;
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
    height:8px;
    line-height:8px;
    background: #f1f8ff;
    td{
        padding:0;
    }
}
th{
    border: 1px solid #333333;
    background: #538fcd;
    font-weight: bold;
    padding:8px 0 8px 25px;
    vertical-align: middle;
    color:#ffffff;
    font-size:14px;
}
td{
    border: 1px solid #333333;
    padding:12px 0 12px 25px;
    vertical-align: middle;
    font-size:14px;
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

