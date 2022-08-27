const config = require("../../config/config");
const productionAsset = config.productionAsset;
const devStaticHost = config.devStaticHost;
const manifest = require("../../manifest.json");

const getTeam = (key) => {
	const nbaTeam = {
        hawks:{
            name:'亚特兰大老鹰',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/hawks.jpeg',
            chineseName:'[A]亚特兰大老鹰',
            enName:'Atlanta Hawks'
        },
        celtics:{
            name:'波士顿凯尔特人',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/celtics.jpeg',
            chineseName:'[B]波士顿凯尔特人',
            enName:'Boston Celtics'
        },
        nets:{
            name:'布鲁克林篮网',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/nets.jpeg',
            chineseName:'[B]布鲁克林篮网',
            enName:'Brooklyn Nets'
        },
        hornets:{
            name:'夏洛特黄蜂',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/hornets.jpeg',
            chineseName:'[C]夏洛特黄蜂',
            enName:'Charlotte Hornets'
        },
        bulls:{
            name:'芝加哥公牛',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/bulls.jpeg',
            chineseName:'[C]芝加哥公牛',
            enName:'Chicago Bulls'
        },
        cavaliers:{
            name:'克利夫兰骑士',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/cavaliers.jpeg',
            chineseName:'[C]克利夫兰骑士',
            enName:'Cleveland Cavaliers'
        },
        mavericks:{
            name:'达拉斯独行侠',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/mavericks.jpeg',
            chineseName:'[D]达拉斯独行侠',
            enName:'Dallas Mavericks'
        },
        nuggets:{
            name:'丹佛掘金',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/nuggets.jpeg',
            chineseName:'[D]丹佛掘金',
            enName:'Denver Nuggets'
        },
        pistons:{
            name:'底特律活塞',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pistons.jpeg',
            chineseName:'[D]底特律活塞',
            enName:'Detroit Pistons'
        },
        warriors:{
            name:'金州勇士',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/warriors.jpeg',
            chineseName:'[G]金州勇士',
            enName:'Detroit Pistons'
        },
        rockets:{
            name:'休斯顿火箭',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/rockets.jpeg',
            chineseName:'[H]休斯顿火箭',
            enName:'Houston Rockets'
        },
        pacers:{
            name:'印第安纳步行者',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pacers.jpeg',
            chineseName:'[I]印第安纳步行者',
            enName:'Indiana Pacers'
        },
        clippers:{
            name:'洛杉矶快船',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/clippers.jpeg',
            chineseName:'[L]洛杉矶快船',
            enName:'Los Angeles Clippers'
        },
        lakers:{
            name:'洛杉矶湖人',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/lakers.jpeg',
            chineseName:'[L]洛杉矶湖人',
            enName:'Los Angeles Lakers'
        },
        grizzlies:{
            name:'孟菲斯灰熊',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/grizzlies.jpeg',
            chineseName:'[M]孟菲斯灰熊',
            enName:'Memphis Grizzlies'
        },
        heat:{
            name:'迈阿密热火',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/heat.jpeg',
            chineseName:'[M]迈阿密热火',
            enName:'Miami Heat'
        },
        timberwolves:{
            name:'明尼苏达森林狼',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/timberwolves.jpeg',
            chineseName:'[M]明尼苏达森林狼',
            enName:'Minnesota Timberwolves'
        },
        bucks:{
            name:'密尔沃基雄鹿',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/bucks.jpeg',
            chineseName:'[M]密尔沃基雄鹿',
            enName:'Milwaukee Bucks'
        },
        pelicans:{
            name:'新奥尔良鹈鹕',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/pelicans.jpeg',
            chineseName:'[N]新奥尔良鹈鹕',
            enName:'New Orleans Pelicans'
        },
        knicks:{
            name:'纽约尼克斯',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/knicks.jpeg',
            chineseName:'[N]纽约尼克斯',
            enName:'New York Knicks'
        },
        thunder:{
            name:'俄克拉荷马城雷霆',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/thunder.jpeg',
            chineseName:'[O]俄克拉荷马城雷霆',
            enName:'Oklahoma City Thunder'
        },
        magic:{
            name:'奥兰多魔术',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/magic.jpeg',
            chineseName:'[O]奥兰多魔术',
            enName:'Orlando Magic'
        },
        seven6ers:{
            name:'费城76人',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/76ers.jpeg',
            chineseName:'[P]费城76人',
            enName:'Philadelphia 76ers'
        },
        suns:{
            name:'菲尼克斯太阳',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/suns.jpeg',
            chineseName:'[P]菲尼克斯太阳',
            enName:'Phoenix Suns'
        },
        blazers:{
            name:'波特兰开拓者',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/blazers.jpeg',
            chineseName:'[P]波特兰开拓者',
            enName:'Portland Trail Blazers'
        },
        kings:{
            name:'萨克拉门托国王',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/kings.jpeg',
            chineseName:'[S]萨克拉门托国王',
            enName:'Sacramento Kings'
        },
        spurs:{
            name:'圣安东尼奥马刺',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/spurs.jpeg',
            chineseName:'[S]圣安东尼奥马刺',
            enName:'San Antonio Spurs'
        },
        raptors:{
            name:'多伦多猛龙',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/raptors.jpeg',
            chineseName:'[T]多伦多猛龙',
            enName:'Toronto Raptors'
        },
        jazz:{
            name:'犹他爵士',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/jazz.jpeg',
            chineseName:'[U]犹他爵士',
            enName:'Utah Jazz'
        },
        wizards:{
            name:'华盛顿奇才',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/nba-logo/wizards.jpeg',
            chineseName:'[W]华盛顿奇才',
            enName:'Washington Wizards'
        }
    }
    return nbaTeam[key];
};

const getWnbaTeam = (key) => {
	const wnbaTeam = {
        dream:{
            name:'亚特兰大梦想',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/dream.jpeg',
            chineseName:'[A]亚特兰大梦想',
            enName:'Atlanta Dream'
        },
        sky:{
            name:'芝加哥天空',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/sky.jpeg',
            chineseName:'[C]芝加哥天空',
            enName:'Chicago Sky'
        },
        sun:{
            name:'康涅狄克阳光',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/sun.jpeg',
            chineseName:'[C]康涅狄克阳光',
            enName:'Connecticut Sun'
        },
        wings:{
            name:'达拉斯飞翼',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/wings.jpeg',
            chineseName:'[D]达拉斯飞翼',
            enName:'Dallas Wings'
        },
        aces:{
            name:'拉斯维加斯王牌',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/aces.jpeg',
            chineseName:'[L]拉斯维加斯王牌',
            enName:'Las Vegas Aces'
        },
        fever:{
            name:'印第安纳狂热',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/fever.jpeg',
            chineseName:'[I]印第安纳狂热',
            enName:'Indiana Fever'
        },
        sparks:{
            name:'洛杉矶火花',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/sparks.jpeg',
            chineseName:'[L]洛杉矶火花',
            enName:'Los Angeles Sparks'
        },
        lynx:{
            name:'明尼苏达山猫',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/lynx.jpeg',
            chineseName:'[M]明尼苏达山猫',
            enName:'Minnesota Lynx'
        },
        liberty:{
            name:'纽约自由人',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/liberty.jpeg',
            chineseName:'[N]纽约自由人',
            enName:'New York Liberty'
        },
        mercury:{
            name:'凤凰城水星',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/mercury.jpeg',
            chineseName:'[P]凤凰城水星',
            enName:'Phoenix Mercury'
        },
        storm:{
            name:'西雅图风暴',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/storm.jpeg',
            chineseName:'[S]西雅图风暴',
            enName:'Seattle Storm'
        },
        mystics:{
            name:'华盛顿神秘人',
            img:'https://lancailaohei.oss-cn-hangzhou.aliyuncs.com/wnba-logo/mystics.jpeg',
            chineseName:'[W]华盛顿神秘人',
            enName:'Washington Mystics'
        }
    }
    return wnbaTeam[key];
};


let url = function (scope, option) {
    const param = option.params[0];
	const publicAsset = manifest[param];
	let path = null;
	if (productionAsset) {
		path = publicAsset;
	} else {
		path = `${devStaticHost}/${param}`;
	}

	console.log(path);
	return path;
};

let libsPath = function (scope, option) {
	let path = option.params[0];
	return `/assets/libs/${path}`;
};

let urlMd5 = function (scope, option) {
	const filter = /-([\w]+)\.js/;
	let urlPath = url(scope, option);
	let hashAry = filter.exec(urlPath);
	let hash = hashAry[1];
	return hash;
};

let urlWithoutMd5 = function (scope, option) {
	const filter = /-([\w]+)\.js/;
	let urlPath = url(scope, option);
	urlPath = urlPath.replace(filter, ".js");
	return urlPath;
};

exports.url = url;

exports.urlMd5 = urlMd5;

exports.urlWithoutMd5 = urlWithoutMd5;

exports.libsPath = libsPath;

exports.getTeam = function(name){
    const nbaObj = getTeam(name.affix.xindex);
    return nbaObj;
};

exports.getWnbaTeam = function(name){
    const wnbaObj = getWnbaTeam(name.affix.xindex);
    return wnbaObj;
};

exports.getLength = function(name){
    return name.data.length + 1;
};

exports.handleData = function(key){
    return key.data;
};


