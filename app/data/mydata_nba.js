const nbaData = {
    //亚特兰大老鹰
    hawks:[
        {
            'name':'卡佩拉',
            'status':'缺阵',
            'detail':'至少缺阵一周时间',
            'important':true
        },{
            'name':'路易斯.威廉姆斯',
            'status':'缺阵',
            'detail':'背部受伤，无法出战',
            'important':false
        }
    ],
    //波士顿凯尔特人
    celtics:[
        {        
            'name':'斯玛特',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':true
        },{        
            'name':'罗威',
            'status':'缺阵',
            'detail':'腿部受伤，每日观察',
            'important':true
        }
    ],
    //布鲁克林篮网
    nets:[
        {        
            'name':'本.西蒙斯',
            'status':'长期缺阵',
            'detail':'背部受伤，归期未定',
            'important':true
        },{
            'name':'乔.哈里斯',
            'status':'长期缺阵',
            'detail':'左脚踝二次手术，赛季报销',
            'important':true
        },{
            'name':'德拉季奇',
            'status':'缺阵',
            'detail':'因为健康安全协议，会缺阵数场比赛',
            'important':false
        },{
            'name':'詹姆斯.约翰逊',
            'status':'缺阵',
            'detail':'身体不适，无法出战周四对阵尼克斯的比赛',
            'important':false
        }
    ],
    //夏洛特黄蜂
    hornets:[
        {
            'name':'索尔',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战',
            'important':false
        },{
            'name':'海沃德',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周五对阵魔术的比赛',
            'important':true
        }
    ],
    //芝加哥公牛
    bulls:[
        {
            'name':'朗佐.鲍尔',
            'status':'长期缺阵',
            'detail':'膝盖手术，预计缺阵4-6周',
            'important':true
        },{
            'name':'卡鲁索',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周四对阵凯尔特人的比赛',
            'important':true
        }
    ],
    //克利夫兰骑士
    cavaliers:[
        {
            'name':'莫布利',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':true
        },{
            'name':'贾勒特.艾伦',
            'status':'缺阵',
            'detail':'手指骨折，归期未定',
            'important':true
        },{
            'name':'迪恩.韦德',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'塞克斯顿',
            'status':'缺阵',
            'detail':'左膝受伤，归期未定',
            'important':true
        }
    ],
    //达拉斯独行侠
    mavericks:[
        {
            'name':'小哈达威',
            'status':'长期缺阵',
            'detail':'腿部手术，归期未定',
            'important':true
        }
    ],
    //丹佛掘金
    nuggets:[
        {
            'name':'齐克.纳吉',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'钱查尔',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'小波特',
            'status':'长期缺阵',
            'detail':'背部受伤，预计会赛季报销',
            'important':true
        },{
            'name':'贾马尔.默里',
            'status':'长期缺阵',
            'detail':'遭受ACL膝伤，目前没有明确的复出时间',
            'important':true
        }    
    ],
    //底特律活塞
    pistons:[
        {        
            'name':'迪亚洛',
            'status':'缺阵',
            'detail':'左手指受伤，不会再出战本赛季的比赛',
            'important':false
        },{        
            'name':'约瑟夫',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周四对阵独行侠的比赛',
            'important':true
        },{        
            'name':'巴格利',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周四对阵独行侠的比赛',
            'important':true
        },{        
            'name':'麦格鲁德',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周四对阵独行侠的比赛',
            'important':false
        },{        
            'name':'奥利尼克',
            'status':'缺阵',
            'detail':'身体不适，无法出战周四对阵独行侠的比赛',
            'important':false
        },{        
            'name':'格兰特',
            'status':'缺阵',
            'detail':'身体不适，不会再出战本赛季的比赛',
            'important':true
        }
    ],
    //金州勇士
    warriors:[
        {
            'name':'伊戈达拉',
            'status':'出战存疑',
            'detail':'背部受伤，每日观察',
            'important':false
        },{
            'name':'怀斯曼',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'小佩顿',
            'status':'出战存疑',
            'detail':'手臂受伤，每日观察',
            'important':false
        },{
            'name':'奥托.波特',
            'status':'出战存疑',
            'detail':'腿部受伤，每日观察',
            'important':false
        }
    ],
    //休斯顿火箭
    rockets:[
        {
            'name':'施罗德',
            'status':'缺阵',
            'detail':'肩膀受伤，不会再出战本赛季的比赛',
            'important':true
        },{
            'name':'伍德',
            'status':'缺阵',
            'detail':'肌腱受伤，不会再出战本赛季的比赛',
            'important':true
        },{
            'name':'埃里克.戈登',
            'status':'缺阵',
            'detail':'腹股沟受伤，不会再出战本赛季的比赛',
            'important':true
        },{
            'name':'约翰.沃尔',
            'status':'长期缺阵',
            'detail':'跟球队协商后决定，新赛季不会为火箭出场比赛，但工资照拿',
            'important':false
        }
    ],
    //印第安纳步行者
    pacers:[
        {
            'name':'比塔泽',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周三对阵76人的比赛',
            'important':false
        },{
            'name':'杜阿尔特',
            'status':'缺阵',
            'detail':'左脚趾受伤，不会再出战本赛季的比赛',
            'important':false
        },{
            'name':'布罗格登',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周三对阵76人的比赛',
            'important':true
        },{
            'name':'迈尔斯.特纳',
            'status':'长期缺阵',
            'detail':'左脚受伤，预计还要缺阵3-4周',
            'important':true
        },{
            'name':'卢比奥',
            'status':'长期缺阵',
            'detail':'左膝前叉韧带断裂，赛季报销',
            'important':false
        },{
            'name':'TJ.麦克康奈尔',
            'status':'长期缺阵',
            'detail':'手腕受伤，周三对阵76人的比赛出战存疑',
            'important':false
        },{
            'name':'TJ.沃伦',
            'status':'长期缺阵',
            'detail':'已回家训练，本赛季报销',
            'important':false
        }
    ],
    //洛杉矶快船
    clippers:[
        {
            'name':'鲍威尔',
            'status':'复出',
            'detail':'可以出战周四对阵太阳的比赛',
            'important':true
        },{
            'name':'科怀.伦纳德',
            'status':'长期缺阵',
            'detail':'遭受膝盖ACL伤病，预计将缺阵整个赛季',
            'important':true
        },{
            'name':'普雷斯頓',
            'status':'长期缺阵',
            'detail':'本周四腿部接受了手术，本赛季将长期缺阵',
            'important':false
        }
    ],
    //洛杉矶湖人
    lakers:[
        {
            'name':'詹姆斯',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周五对阵对阵勇士的比赛',
            'important':true
        },{
            'name':'安东尼戴维斯',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周五对阵对阵勇士的比赛',
            'important':true
        },{
            'name':'威斯布鲁克',
            'status':'缺阵',
            'detail':'腿部受伤，无法出战周五对阵对阵勇士的比赛',
            'important':true
        },{
            'name':'纳恩',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        }      
    ],
    //孟菲斯灰熊
    grizzlies:[
        {
            'name':'狄龙布鲁克斯',
            'status':'出战存疑',
            'detail':'臀部受伤，周五对阵掘金的比赛出战存疑',
            'important':true
        },{
            'name':'贾.莫兰特',
            'status':'缺阵',
            'detail':'膝盖酸痛，预计两周之后回归球队',
            'important':true
        },{
            'name':'基利安.蒂利',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        }
    ],
    //迈阿密热火
    heat:[
        {
            'name':'洛瑞',
            'status':'缺阵',
            'detail':'腿筋拉伤，无法出战',
            'important':true
        }            
    ],
    //密尔沃基雄鹿
    bucks:[
        {
            'name':'格雷森.阿伦',
            'status':'缺阵',
            'detail':'臀部受伤，无法出战周五对阵凯尔特人的比赛',
            'important':true
        }
    ],
    //明尼苏达森林狼
    timberwolves:[
        {
            'name':'麦克丹尼尔斯',
            'status':'出战存疑',
            'detail':'脚踝受伤，周五对阵马刺的比赛出战存疑',
            'important':false
        },{
            'name':'拉塞尔',
            'status':'出战存疑',
            'detail':'腿部受伤，周五对阵马刺的比赛出战存疑',
            'important':true
        },{
            'name':'贝弗利',
            'status':'出战存疑',
            'detail':'脚踝受伤，周五对阵马刺的比赛出战存疑',
            'important':true
        }
    ],
    //新奥尔良鹈鹕
    pelicans:[
        {
            'name':'小刘易斯',
            'status':'长期缺阵',
            'detail':'右膝前叉十字韧带撕裂，赛季报销',
            'important':false
        },{
            'name':'锡安.威廉森',
            'status':'长期缺阵',
            'detail':'腿部受伤，归期不定',
            'important':true
        },{
            'name':'英格拉姆',
            'status':'缺阵',
            'detail':'肌腱受伤，无法出战周五对阵开拓者的比赛',
            'important':true
        }      
    ],
    //纽约尼克斯
    knicks:[
        {
            'name':'米切尔罗宾逊',
            'status':'缺阵',
            'detail':'身体不适，无法出战周四对阵篮网的比赛',
            'important':true
        },{
            'name':'兰德尔',
            'status':'缺阵',
            'detail':'腿部受伤，本赛季不会再出战',
            'important':true
        },{
            'name':'诺埃尔',
            'status':'长期缺阵',
            'detail':'腿部受伤，本赛季赛季报销',
            'important':false
        },{
            'name':'雷迪什',
            'status':'缺阵',
            'detail':'肩膀受伤，归期未定',
            'important':false
        },{
            'name':'德里克.罗斯',
            'status':'长期缺阵',
            'detail':'右脚踝二次手术，本赛季不会再出战',
            'important':true
        },{
            'name':'格兰姆斯',
            'status':'出战存疑',
            'detail':'膝盖受伤，周四对阵篮网的比赛出战存疑',
            'important':false
        },{
            'name':'麦克布莱德',
            'status':'出战存疑',
            'detail':'膝盖受伤，周四对阵篮网的比赛出战存疑',
            'important':false
        },{
            'name':'肯巴.沃克',
            'status':'长期缺阵',
            'detail':'跟球队友好协商，将会缺席本赛季剩余比赛',
            'important':false
        }
    ],
    //俄克拉荷马城雷霆
    thunder:[
        {
            'name':'曼恩',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'贝兹利',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'亚历山大',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':true
        },{
            'name':'费沃斯',
            'status':'缺阵',
            'detail':'背部受伤，归期未定',
            'important':false
        },{
            'name':'泰.杰罗姆',
            'status':'缺阵',
            'detail':'臀部受伤，归期未定',
            'important':false
        },{
            'name':'肯里奇.威廉姆斯',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        },{
            'name':'多尔特',
            'status':'长期缺阵',
            'detail':'肩膀受伤，赛季报销',
            'important':true
        },{
            'name':'约什.吉迪',
            'status':'长期缺阵',
            'detail':'臀部受伤，至少还要缺阵1个月时间',
            'important':true
        },{
            'name':'穆斯卡拉',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        },{
            'name':'厄尔',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        }
    ],
    //奥兰多魔术
    magic:[
        {
            'name':'温德勒.卡特',
            'status':'缺阵',
            'detail':'手腕受伤，无法出战周五对阵黄蜂的比赛',
            'important':true
        },{
            'name':'科尔.安东尼',
            'status':'缺阵',
            'detail':'脚趾受伤，无法出战周五对阵黄蜂的比赛',
            'important':true
        },{
            'name':'小瓦格纳',
            'status':'缺阵',
            'detail':'脚踝受伤，无法出战周五对阵黄蜂的比赛',
            'important':true
        },{
            'name':'艾萨克',
            'status':'长期缺阵',
            'detail':'左膝ACL伤病，赛季报销',
            'important':true
        },{
            'name':'波尔',
            'status':'缺阵',
            'detail':'膝盖受伤，归期未定',
            'important':false
        }
    ],
    //费城76人
    seven6ers:[
        {        
            'name':'斯普林格',
            'status':'缺阵',
            'detail':'左膝受伤，归期未定',
            'important':false
        }
    ],
    //菲尼克斯太阳
    suns:[
        {
            'name':'卡明斯基',
            'status':'长期缺阵',
            'detail':'右膝受伤，归期不明',
            'important':false
        },{
            'name':'沙里奇',
            'status':'长期缺阵',
            'detail':'右膝ACL伤病，预计本赛季不会回归',
            'important':false
        },{
            'name':'艾顿',
            'status':'轮休',
            'detail':'身体不适，无法出战周四对阵快船的比赛',
            'important':true
        },{
            'name':'杰.克劳德',
            'status':'轮休',
            'detail':'身体不适，无法出战周四对阵快船的比赛',
            'important':true
        },{
            'name':'保罗',
            'status':'轮休',
            'detail':'身体不适，无法出战周四对阵快船的比赛',
            'important':true
        },{
            'name':'布克',
            'status':'轮休',
            'detail':'身体不适，无法出战周四对阵快船的比赛',
            'important':true
        }
    ],
    //波特兰开拓者
    blazers:[
        {
            'name':'沃特福德',
            'status':'缺阵',
            'detail':'左膝受伤，归期未定',
            'important':false
        },{
            'name':'哈特',
            'status':'缺阵',
            'detail':'身体不适，归期未定',
            'important':true
        },{
            'name':'温斯洛',
            'status':'缺阵',
            'detail':'小腿受伤，归期未定',
            'important':false
        },{
            'name':'安芬尼.西蒙斯',
            'status':'缺阵',
            'detail':'腿部受伤，预计缺阵1-2周',
            'important':true
        },{
            'name':'布莱德索',
            'status':'缺阵',
            'detail':'刚被交易到开拓者，不确定何时可以出战',
            'important':false
        },{
            'name':'利特尔',
            'status':'缺阵',
            'detail':'肩膀受伤，大概率赛季报销',
            'important':true
        },{
            'name':'泽勒',
            'status':'缺阵',
            'detail':'腿部受伤，归期未定',
            'important':false
        },{
            'name':'利拉德',
            'status':'长期缺阵',
            'detail':'腹股沟受伤，有可能会赛季报销，六周之后再评估',
            'important':true
        },{
            'name':'英格尔斯',
            'status':'长期缺阵',
            'detail':'左膝ACL伤病，赛季报销',
            'important':false
        },{
            'name':'努尔基奇',
            'status':'长期缺阵',
            'detail':'足底肌膜炎，至少需要缺阵1个月',
            'important':true
        }
    ],
    //萨克拉门托国王
    kings:[
        {
            'name':'莱恩',
            'status':'缺阵',
            'detail':'背部受伤，周三对阵鹈鹕的比赛出战存疑',
            'important':false
        },{
            'name':'福克斯',
            'status':'缺阵',
            'detail':'右手受伤，本赛季不会再出战',
            'important':true
        },{
            'name':'霍姆斯',
            'status':'缺阵',
            'detail':'个人原因，本赛季不会再出战',
            'important':false
        },{
            'name':'萨博尼斯',
            'status':'缺阵',
            'detail':'膝盖受伤，本赛季不会再出战',
            'important':true
        },{
            'name':'特伦斯.戴维斯',
            'status':'缺阵',
            'detail':'手腕受伤，本赛季不会再出战',
            'important':false
        }
    ],
    //圣安东尼奥马刺
    spurs:[
        {
            'name':'兰福德',
            'status':'缺阵',
            'detail':'肌腱受伤，无法出战周三对阵掘金的比赛',
            'important':false
        },{
            'name':'麦克德莫特',
            'status':'长期缺阵',
            'detail':'脚踝受伤，缺席本赛季常规赛剩余的赛程',
            'important':true
        },{
            'name':'默里',
            'status':'缺阵',
            'detail':'身体不适，无法出战周五对阵森林狼的比赛',
            'important':true
        },{
            'name':'朗尼.沃克',
            'status':'缺阵',
            'detail':'背部受伤，无法出战周五对阵森林狼的比赛',
            'important':false
        }
    ],
    //多伦多猛龙
    raptors:[
        {
            'name':'阿奴诺比',
            'status':'缺阵',
            'detail':'小腿受伤，无法出战周五对阵76人的比赛',
            'important':true
        },{
            'name':'范弗利特',
            'status':'轮休',
            'detail':'身体不适，无法出战周五对阵76人的比赛',
            'important':true
        }  
    ],
    //犹它爵士
    jazz:[
        {
            'name':'阿祖布伊克',
            'status':'缺阵',
            'detail':'脚踝受伤，不会再出战本赛季剩余的比赛',
            'important':false
        },{
            'name':'福瑞斯特',
            'status':'缺阵',
            'detail':'脚踝受伤，归期未定',
            'important':false
        },{
            'name':'康利',
            'status':'轮休',
            'detail':'身体不适，无法出战周四对阵雷霆的比赛',
            'important':true
        },{
            'name':'米切尔',
            'status':'轮休',
            'detail':'身体不适，无法出战周四对阵雷霆的比赛',
            'important':true
        }                      
    ],
    //华盛顿奇才
    wizards:[
        {
            'name':'库兹马',
            'status':'缺阵',
            'detail':'肌腱受伤，归期未定',
            'important':true
        },{
            'name':'比尔',
            'status':'长期缺阵',
            'detail':'左手腕手术，赛季报销',
            'important':true
        }
    ]   
}

module.exports = nbaData;