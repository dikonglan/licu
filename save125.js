var storyContent = ﻿{"inkVersion":19,"root":[["^这里是《5Days》，游戏为黄景瑜视角，内含明暗双数值系统，进行分支选择时请认真对待。","\n","^除DAY1外一日可行动三次，剧情触发无保底。","\n","^tips：对于成年人来说，欠债不是好事，对吗?","\n","^简介：S级alpha黄景瑜因负担不起特型抑制剂的价格，即将背起债务，而在人生中最困窘的时刻，他遇到了自己的心动对象——王子奇（江浙沪独生子、beta版）","\n","^如果你已经准备好了，那么——","\n",["ev",{"^->":"0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^DAY1",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.10.s"},[{"#n":"$r2"}],"\n","^[存款：","ev",{"VAR?":"money"},"out","/ev","^][外貌：","ev",{"VAR?":"face"},"out","/ev","^][体力：","ev",{"VAR?":"strength"},"out","/ev","^][心情：","ev",{"VAR?":"emotion"},"out","/ev","^][抑制剂存量：","ev",{"VAR?":"YZJ"},"out","/ev","^]","\n","^六点钟的早晨还泛着蓝调的阴沉，上海这地方，春秋都施舍得非常吝啬，昨晚开了条缝透气的窗户不断灌进冷风，黄景瑜翻个身，剪得极短的头发压在枕头上。","\n","^他的眼睛没睁开，眉头皱着。","\n","^这间日租房唯二的优点除了便宜外就是卧室摆着一张还算舒服的床。","\n","^黄景瑜并非享乐主义者，筋骨强健的青年对“舒适”这个词几乎抱着蔑视的态度。","\n","^但从客观来讲，现在靠年轻力胜维持的生活要求他必须保持充足的体力。","\n","^来上海打拼的人不在少数，甚至可以说是这座繁华都市的常驻人口主力军，可像黄景瑜这样落魄非常偏偏又行事正派的就比较少见了。","\n","^他的第二性别等级是S，可以说是潜在危险人物，在18到25岁期间被禁止进入人群聚集的地方工作的，除非通过考试拿到了合格证书，也就是俗称的“狗证”。","\n","^相关培训一般只在211及以上的大学开设，跟三好学生的奖状一样，是部分人群履历上的一个添头。","\n","^黄景瑜这种辍学出来打拼的人当然跟狗证无缘。","\n","^他在少年时期就毫不怀疑自己的第二性别会是alpha。大院儿里的孩子王怎么会不是A，怎么能不是A？","\n","^但现实却狠狠给了黄景瑜一个勾拳。","\n","^他独自去医院领报告，18岁的生日礼物是公共服务部门送来的抑制项圈，冰冷的金属扣在脖颈，连着禁锢住下半张脸的口笼。","\n","^S级的alpha99%都出生在凤凰窝里，他们自呱呱坠地起就只需要享受鲜花美酒和大好人生，针对这群人推出的特型抑制剂无需考虑价格，却几乎压断一个普通少年的脊梁。","\n","^黄景瑜的自尊不允许他向家人盘剥这笔钱，在电话里简单交代了自己的分化结果，对着白墙发了两小时呆，当晚他立刻就去找兼职。","\n","^一天打三份工，总够了吧？","\n","^每天睁开眼就要给人送钱，有种在为呼吸交税的错觉……黄景瑜在手机上付了昨天的房钱，自嘲地笑了笑。","\n","^/存款-100","\n","ev",{"VAR?":"money"},100,"-",{"VAR=":"money","re":true},"/ev","^以极快的速度洗漱完毕，黄景瑜几乎是逃离了他阴暗潮湿的暂时居所，屋里的环境太不适宜人类生存，倒不如早点出门干活。","\n",{"->":"day1mor"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"day1mor":[["ev","str","^吃早饭","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^去打工的餐馆","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":".^.^.^.eatbreakfast_day1"},"\n",{"#f":5}],"c-1":[{"->":".^.^.^.gotowork_day1"},"\n",{"#f":5}]}],{"eatbreakfast_day1":["^黄景瑜在楼下的早餐摊子处买了一份饭，老板娘很热情，他觉得今天的开头似乎还不错。","\n","^/存款-8、体力+5","\n","ev",{"VAR?":"money"},8,"-",{"VAR=":"money","re":true},"/ev","ev",{"VAR?":"strength"},5,"+",{"VAR=":"strength","re":true},"/ev",{"->":".^.^"},{"#f":1}],"gotowork_day1":[["ev",{"CNT?":".^.^.^.eatbreakfast_day1"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","^上班这条路黄景瑜闭着眼都不会出错，他骑着电车穿过巷子，转向大街时突然发现了个有点稀奇的生面孔，似乎年纪不大。","\n","^对方骑着自行车和黄景瑜擦身而过，脸嫩得很，眼睛圆且亮，一看就是个学生。","\n","^淡淡的香味儿萦绕在鼻尖，黄景瑜想，香水还是信息素？","\n","^/心情+10","\n","ev",{"VAR?":"emotion"},10,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"H_love"},10,"+",{"VAR=":"H_love","re":true},"/ev",{"->":".^.^.^.5"},null]}],"nop","\n","^黄景瑜白天的工作是去给一对老夫妇开的餐馆清理后厨，工作量不大，薪水三天一结，有时候两人留他吃午饭，极其偶尔早午饭全包。","\n","^这对于一个二十岁出头的alpha简直可以说是恩情。","\n","^后厨的工作很快被干完，帮着上了会儿菜之后，黄景瑜还顺便给店里换了个灯泡。","\n","^/体力-30","\n","ev",{"VAR?":"strength"},30,"-",{"VAR=":"strength","re":true},"/ev","^回家之后，下午有足够的休息时间。","\n","ev","str","^直接回家睡觉","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^回家先看会儿手机再睡","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^上街逛逛再回家睡觉","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":[{"->":"day1mor.midsleep_day1"},"\n",{"#f":5}],"c-1":[{"->":"day1mor.phone_day1"},"\n",{"#f":5}],"c-2":[{"->":"day1mor.street_day1"},"\n",{"#f":5}]}],{"#f":1}],"midsleep_day1":["^黄景瑜考虑到今晚要去便利店值夜班，果断地跑回家睡觉了。","\n","^/体力+20","\n","ev",{"VAR?":"strength"},20,"+",{"VAR=":"strength","re":true},"/ev",{"->":"day1night"},{"#f":1}],"phone_day1":["^黄景瑜有点担心自己的脑子进太多刷碗水会变成白痴，于是忧心忡忡地玩了大半个小时手机预防老年痴呆，带着不安入眠了。","\n","^/心情+5、体力+10","\n","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"strength"},10,"+",{"VAR=":"strength","re":true},"/ev",{"->":"day1night"},{"#f":1}],"street_day1":["^磨刀不误砍柴工，适量运动令人神清气爽。","\n","^很明显黄景瑜的“适量”和标准版有不小的区别，虽然工作细碎繁多让他没法进行系统性的健身，但是逛大街也可以勉强作为替代。","\n","ev",{"VAR?":"H_love"},10,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^黄景瑜突然想起了上午遇到的那个学生，较真地说，自己当时的想法简直可以称为意淫。","\n","^一个a去揣测别人身上的气味，藏在心里算恶俗，说出来更不得了——属于性骚扰。","\n","^更别提他还是要被居委会定期寻访的敏感身份。","\n",{"->":".^.^.^.10"},null]}],"nop","\n","^不知道他这种把走路往半马方向发展的人再其他地方是什么待遇，周围的居民已经见怪不怪了。","\n","^但对于初到此地的人来说，还是很具有冲击力。","\n","^/体力+10、外貌+5","\n","ev",{"VAR?":"strength"},10,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"face"},5,"+",{"VAR=":"face","re":true},"/ev","ev",{"VAR?":"W_love"},5,"+",{"VAR=":"W_love","re":true},"/ev",{"->":"day1night"},{"#f":1}],"#f":1}],"day1night":[["^醒来的时候天色已经漆黑，黄景瑜习惯使然，一秒钟都没有多睡，独居和沉眠导致的面无表情让他现在看上去格外锋利。","\n","^这个时候，他才真的符合人们对S级alpha的认知。","\n","^黄景瑜也无数次感慨过，怎么这么小机率的事情会发生在他身上呢？难道说他天生就是要干大事的人？","\n","^而现在，未来的成功人士要准备去上夜班了。","\n","^便利店的工作有规范的流程任务，黄景瑜只需要按部就班地卖卖体力，打起精神应付那些酒鬼醉汉和真的有紧急需求的顾客。","\n","^他的身形和肌肉让店长十分确定这个年轻人能干好这份工作。","\n","^凌晨，黄景瑜看了看有什么自己可以带回家的临期食品，当早餐或者午餐。","\n","^漫长的夜晚像一场没有尽头的苦刑，但太阳从地平线升起，带来第一缕光线的时候，那种感觉又出人意料的震撼。","\n","^黄景瑜经常可以看到日出，每周一三五七的早晨。","\n","^自动门的声音突然响起，黄景瑜朝门口望过去，发现居然是他白天见到的那个生面孔。","\n","^衣服没有换，面带倦色，买了……两瓶可乐？","\n","^“七块。”黄景瑜言简意赅，等着对方把付款码亮出来。","\n","^对方像是困晕了，动作慢半拍地把手机掏出来，又是面部识别又是输密码，头发乱糟糟的，看起来有种钝感的萌。","\n","ev","str","^搭话","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^沉默","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":".^.^.^.talkday1"},"\n",{"#f":5}],"c-1":[{"->":".^.^.^.silenceday1"},"\n",{"#f":5}]}],{"talkday1":["^“这里治安不太好，你要是在这儿租房子的，晚上尽量少出门。”黄景瑜没忍住多嘴，实在是这人看着就像不食人间烟火的大少爷，说难听点儿，生瓜蛋子。","\n","^大少爷愣了下，有些迟疑地说：“嗯？谢谢。”","\n","^黄景瑜莫名有点受不了他眨巴着眼睛看自己，别过头，摆摆手表示没事儿。","\n","ev",{"VAR?":"W_love"},5,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^“那你在这里看夜班就没事吗？”对方不知道是出于什么心理问道，随后上下看了黄景瑜一眼，又自顾自地说：“嗯，你没事。”突然笑起来。”","\n","^“店长也是这么想的。”","\n","^“店长慧眼识珠啊。”他给出一个肯定的眼神，沉吟了会儿，“诶，你有没有想过去做模特？”","\n","^黄景瑜神色复杂地看着他。","\n","^这小年轻不自在地撇了下嘴，只道：“要不，你加下我微信？咱们有空了聊。”","\n","^黄景瑜心动了。先不说做模特的事情，他摸着自己的良心，也许是夜色作祟，真觉得没法拒绝对方的抛来的橄榄枝。","\n","^不就是加微信吗，你个alpha有啥不好意思的？","\n","^等等，alpha……","\n","^“我先问问哈，请问你是？”黄景瑜轻声说。","\n","^“beta，我叫王子奇。”王子奇露出一个了然的表情，笑笑，“被误会是我的命运，我认了。”","\n","ev",{"VAR?":"WZQinform"},1,"+",{"VAR=":"WZQinform","re":true},"/ev","ev",{"VAR?":"W_love"},10,"+",{"VAR=":"W_love","re":true},"/ev","ev",{"VAR?":"emotion"},20,"+",{"VAR=":"emotion","re":true},"/ev",{"->":".^.^.^.12"},null]}],"nop","\n","^那人离开之后今晚没有别的插曲，黄景瑜收拾东西下班时便利店外已经天色大亮。","\n","^/心情-20、外貌-10、体力-40","\n","ev",{"VAR?":"emotion"},20,"-",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},10,"-",{"VAR=":"face","re":true},"/ev","ev",{"VAR?":"strength"},40,"-",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"H_love"},10,"+",{"VAR=":"H_love","re":true},"/ev","ev",{"VAR?":"W_love"},5,"+",{"VAR=":"W_love","re":true},"/ev",{"->":".^.^.gohomeday1"},{"#f":1}],"silenceday1":["^黄景瑜心里一跳，微妙的不祥预感来自本能预警，他足够敏锐，能够提前提防一切足以威胁他的事物。此前的二十多年里，一贯如此。","\n","^但是他怎么都想不明白，眼前这个还带着学生稚气的男人为什么能按响警报。","\n","^黄景瑜从十几岁就开始疲于奔命，一方面算得上见多识广，但在某些方面又单纯得可怕。","\n","^比如，他没看过哈利波特，自然也就不知道某位白胡子校长重申多次的名言——爱是足以战胜黑魔王的魔法。","\n","^再悟已是书中人。","\n","^那人离开之后今晚没有别的插曲，黄景瑜收拾东西下班时便利店外已经天色大亮。","\n","ev",{"VAR?":"emotion"},20,"-",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},10,"-",{"VAR=":"face","re":true},"/ev","ev",{"VAR?":"strength"},40,"-",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"H_love"},10,"+",{"VAR=":"H_love","re":true},"/ev","ev",{"VAR?":"W_love"},5,"+",{"VAR=":"W_love","re":true},"/ev","^/心情-20、外貌-10、体力-40","\n",{"->":".^.^.gohomeday1"},{"#f":1}],"gohomeday1":["ev",{"VAR?":"WZQinform"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^是否察看手机？","\n","ev","str","^察看","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^睡觉","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.6"},{"c-0":["\n","^黄景瑜看着联系人里多出来的那个头像，发了一会儿呆。","\n","^轻薄的窗帘挡不住日光，黄景瑜面对着窗户侧躺，心里纳闷，搞得跟王子奇自拍的头像在发光似的。","\n","^都什么跟什么啊？","\n","^/心情+5","\n","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev",{"->":"day1night.yzjbuyornot1"},{"#f":5}],"c-1":[{"->":"day1night.yzjbuyornot1"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"yzjbuyornot1":[["^DAY1结束，是否购入抑制剂？","\n","ev","str","^是","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^否","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":".^.^.^.^.buyYZJ"},"\n",{"#f":5}],"c-1":[{"->":"DAY2"},"\n",{"#f":5}]}],{"#f":1}],"buyYZJ":["^/存款-2000","\n","^/抑制剂存量+1","\n","ev",{"VAR?":"money"},2000,"-",{"VAR=":"money","re":true},"/ev","ev",{"VAR?":"YZJ"},1,"+",{"VAR=":"YZJ","re":true},"/ev",{"->":"DAY2"},{"->":"DAY2"},{"#f":1}],"#f":1}],"DAY2":["^DAY2","\n","ev",{"VAR?":"renthouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^每日交租：存款-100","\n","ev",{"VAR?":"money"},100,"-",{"VAR=":"money","re":true},"/ev","^低于平均水平的房间：体力+50","\n","ev",{"VAR?":"strength"},50,"+",{"VAR=":"strength","re":true},"/ev",{"->":"DAY2.8"},null]}],"nop","\n","ev",{"VAR?":"lovehouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^溢满爱的房间：体力+70、心情+20","\n","ev",{"VAR?":"strength"},70,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},20,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"esteem"},2,"-",{"VAR=":"esteem","re":true},"/ev",{"->":"DAY2.16"},null]}],"nop","\n","ev",{"VAR?":"couple"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^良好的激素水平：心情+5、外貌+3","\n","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},3,"+",{"VAR=":"face","re":true},"/ev",{"->":"DAY2.24"},null]}],"nop","\n","^[存款：","ev",{"VAR?":"money"},"out","/ev","^][外貌：","ev",{"VAR?":"face"},"out","/ev","^][体力：","ev",{"VAR?":"strength"},"out","/ev","^][心情：","ev",{"VAR?":"emotion"},"out","/ev","^][抑制剂存量：","ev",{"VAR?":"YZJ"},"out","/ev","^]","\n","ev",{"VAR?":"money"},0,"<=","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"endpoor"},{"->":"DAY2.59"},null]}],"nop","\n",{"->":".^.mor2"},{"mor2":[["^上午","\n","ev","str","^打工","/str",{"VAR?":"strength"},10,">=","/ev",{"*":".^.c-0","flg":21},"ev","str","^回家睡觉","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^约会","/str",{"VAR?":"strength"},10,">=",{"VAR?":"couple"},1,">=","&&","/ev",{"*":".^.c-2","flg":21},{"c-0":[{"->":"DAY2.dagongmor2"},"\n",{"#f":5}],"c-1":[{"->":"DAY2.sleepmor2"},"\n",{"#f":5}],"c-2":[{"->":"DAY2.meetingmor2"},"\n",{"#f":5}]}],{"#f":1}],"dagongmor2":["^/体力-20、心情-10、外貌-5","\n","ev",{"VAR?":"work"},1,"+",{"VAR=":"work","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},10,"-",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},5,"-",{"VAR=":"face","re":true},"/ev",{"->":"DAY2.after2"},{"#f":1}],"sleepmor2":["^/体力+20、心情+5","\n","ev",{"VAR?":"strength"},20,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev",{"->":"DAY2.after2"},{"#f":1}],"meetingmor2":["ev",{"VAR?":"emotion"},10,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev",{"->":"DAY2.after2"},{"#f":1}],"after2":[["^下午","\n","ev","str","^打工","/str",{"VAR?":"strength"},10,">=","/ev",{"*":".^.c-0","flg":21},"ev","str","^回家睡觉","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^约会","/str",{"VAR?":"strength"},10,">=",{"VAR?":"couple"},1,">=","&&","/ev",{"*":".^.c-2","flg":21},{"c-0":[{"->":"DAY2.dagongafter2"},"\n",{"#f":5}],"c-1":[{"->":"DAY2.sleepafter2"},"\n",{"#f":5}],"c-2":[{"->":"DAY2.meetingafter2"},"\n",{"#f":5}]}],{"#f":1}],"dagongafter2":["^/体力-20、心情-10、外貌-5","\n","ev",{"VAR?":"work"},1,"+",{"VAR=":"work","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},10,"-",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},5,"-",{"VAR=":"face","re":true},"/ev",{"->":"DAY2.nig2"},{"#f":1}],"sleepafter2":["^/体力+20、心情+5","\n","ev",{"VAR?":"strength"},20,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev",{"->":"DAY2.nig2"},{"#f":1}],"meetingafter2":["ev",{"VAR?":"emotion"},10,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev",{"->":"DAY2.nig2"},{"#f":1}],"nig2":[["^晚上","\n","ev","str","^打工","/str",{"VAR?":"strength"},10,">=","/ev",{"*":".^.c-0","flg":21},"ev","str","^回家睡觉","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^约会","/str",{"VAR?":"strength"},10,">=",{"VAR?":"couple"},1,">=","&&","/ev",{"*":".^.c-2","flg":21},{"c-0":[{"->":"DAY2.dagongnig2"},"\n",{"#f":5}],"c-1":[{"->":"DAY2.sleepnig2"},"\n",{"#f":5}],"c-2":[{"->":"DAY2.meetingnig2"},"\n",{"#f":5}]}],{"#f":1}],"dagongnig2":["^/体力-20、心情-10、外貌-5","\n","ev",{"VAR?":"work"},1,"+",{"VAR=":"work","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},10,"-",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},5,"-",{"VAR=":"face","re":true},"/ev",{"->":"DAY3"},{"#f":1}],"sleepnig2":["^/体力+20、心情+5","\n","ev",{"VAR?":"strength"},20,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev",{"->":"DAY3"},{"#f":1}],"meetingnig2":["ev",{"VAR?":"emotion"},10,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev",{"->":"DAY3"},{"->":"DAY3"},{"#f":1}],"#f":1}],"DAY3":["^DAY3","\n","ev",{"VAR?":"renthouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^每日交租：存款-100","\n","ev",{"VAR?":"money"},100,"-",{"VAR=":"money","re":true},"/ev","^低于平均水平的房间：体力+50","\n","ev",{"VAR?":"strength"},50,"+",{"VAR=":"strength","re":true},"/ev",{"->":"DAY3.8"},null]}],"nop","\n","ev",{"VAR?":"lovehouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^溢满爱的房间：体力+70、心情+20","\n","ev",{"VAR?":"strength"},70,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},20,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"esteem"},2,"-",{"VAR=":"esteem","re":true},"/ev",{"->":"DAY3.16"},null]}],"nop","\n","ev",{"VAR?":"couple"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^良好的激素水平：心情+5、外貌+3","\n","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},3,"+",{"VAR=":"face","re":true},"/ev",{"->":"DAY3.24"},null]}],"nop","\n","^[存款：","ev",{"VAR?":"money"},"out","/ev","^][外貌：","ev",{"VAR?":"face"},"out","/ev","^][体力：","ev",{"VAR?":"strength"},"out","/ev","^][心情：","ev",{"VAR?":"emotion"},"out","/ev","^][抑制剂存量：","ev",{"VAR?":"YZJ"},"out","/ev","^]","\n","ev",{"VAR?":"money"},0,"<=","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"endpoor"},{"->":"DAY3.59"},null]}],"nop","\n",{"->":".^.mor3"},{"mor3":[["^上午","\n","ev","str","^打工","/str",{"VAR?":"strength"},10,">=","/ev",{"*":".^.c-0","flg":21},"ev","str","^回家睡觉","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^约会","/str",{"VAR?":"strength"},10,">=",{"VAR?":"couple"},1,">=","&&","/ev",{"*":".^.c-2","flg":21},{"c-0":[{"->":"DAY3.dagongmor3"},"\n",{"#f":5}],"c-1":[{"->":"DAY3.sleepmor3"},"\n",{"#f":5}],"c-2":[{"->":"DAY3.meetingmor3"},"\n",{"#f":5}]}],{"#f":1}],"dagongmor3":["^/体力-20、心情-10、外貌-5","\n","ev",{"VAR?":"work"},1,"+",{"VAR=":"work","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},10,"-",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},5,"-",{"VAR=":"face","re":true},"/ev",{"->":"DAY3.after3"},{"#f":1}],"sleepmor3":["^/体力+20、心情+5","\n","ev",{"VAR?":"strength"},20,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev",{"->":"DAY3.after3"},{"#f":1}],"meetingmor3":["ev",{"VAR?":"emotion"},10,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev",{"->":"DAY3.after3"},{"#f":1}],"after3":[["^下午","\n","ev","str","^打工","/str",{"VAR?":"strength"},10,">=","/ev",{"*":".^.c-0","flg":21},"ev","str","^回家睡觉","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^约会","/str",{"VAR?":"strength"},10,">=",{"VAR?":"couple"},1,">=","&&","/ev",{"*":".^.c-2","flg":21},{"c-0":[{"->":"DAY3.dagongafter3"},"\n",{"#f":5}],"c-1":[{"->":"DAY3.sleepafter3"},"\n",{"#f":5}],"c-2":[{"->":"DAY3.meetingafter3"},"\n",{"#f":5}]}],{"#f":1}],"dagongafter3":["^/体力-20、心情-10、外貌-5","\n","ev",{"VAR?":"work"},1,"+",{"VAR=":"work","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},10,"-",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},5,"-",{"VAR=":"face","re":true},"/ev",{"->":"DAY3.nig3"},{"#f":1}],"sleepafter3":["^/体力+20、心情+5","\n","ev",{"VAR?":"strength"},20,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev",{"->":"DAY3.nig3"},{"#f":1}],"meetingafter3":["ev",{"VAR?":"emotion"},10,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev",{"->":"DAY3.nig3"},{"#f":1}],"nig3":[["^晚上","\n","ev","str","^打工","/str",{"VAR?":"strength"},10,">=","/ev",{"*":".^.c-0","flg":21},"ev","str","^回家睡觉","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^约会","/str",{"VAR?":"strength"},10,">=",{"VAR?":"couple"},1,">=","&&","/ev",{"*":".^.c-2","flg":21},{"c-0":[{"->":"DAY3.dagongnig3"},"\n",{"#f":5}],"c-1":[{"->":"DAY3.sleepnig3"},"\n",{"#f":5}],"c-2":[{"->":"DAY3.meetingnig3"},"\n",{"#f":5}]}],{"#f":1}],"dagongnig3":["^/体力-20、心情-10、外貌-5","\n","ev",{"VAR?":"work"},1,"+",{"VAR=":"work","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},10,"-",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},5,"-",{"VAR=":"face","re":true},"/ev",{"->":"DAY4"},{"#f":1}],"sleepnig3":["^/体力+20、心情+5","\n","ev",{"VAR?":"strength"},20,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev",{"->":"DAY4"},{"#f":1}],"meetingnig3":["ev",{"VAR?":"emotion"},10,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"strength"},20,"-",{"VAR=":"strength","re":true},"/ev",{"->":"DAY4"},{"->":"DAY4"},{"#f":1}],"#f":1}],"DAY4":["^DAY4","\n","ev",{"VAR?":"renthouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^每日交租：存款-100","\n","ev",{"VAR?":"money"},100,"-",{"VAR=":"money","re":true},"/ev","^低于平均水平的房间：体力+50","\n","ev",{"VAR?":"strength"},50,"+",{"VAR=":"strength","re":true},"/ev",{"->":"DAY4.8"},null]}],"nop","\n","ev",{"VAR?":"lovehouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^溢满爱的房间：体力+70、心情+20","\n","ev",{"VAR?":"strength"},70,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},20,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"esteem"},2,"-",{"VAR=":"esteem","re":true},"/ev",{"->":"DAY4.16"},null]}],"nop","\n","ev",{"VAR?":"H_love"},20,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^良好的激素水平：心情+5、外貌+3","\n","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},3,"+",{"VAR=":"face","re":true},"/ev",{"->":"DAY4.24"},null]}],"nop","\n","^[存款：","ev",{"VAR?":"money"},"out","/ev","^][外貌：","ev",{"VAR?":"face"},"out","/ev","^][体力：","ev",{"VAR?":"strength"},"out","/ev","^][心情：","ev",{"VAR?":"emotion"},"out","/ev","^][抑制剂存量：","ev",{"VAR?":"YZJ"},"out","/ev","^]","\n","ev",{"VAR?":"money"},0,"<=","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"esteem"},20,"-",{"VAR=":"esteem","re":true},"/ev",{"->":"DAY4.59"},null]}],"nop","\n",{"->":"DAY5"},{"#f":1}],"DAY5":["^DAY5","\n","ev",{"VAR?":"renthouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^每日交租：存款-100","\n","ev",{"VAR?":"money"},100,"-",{"VAR=":"money","re":true},"/ev","^低于平均水平的房间：体力+50","\n","ev",{"VAR?":"strength"},50,"+",{"VAR=":"strength","re":true},"/ev",{"->":"DAY5.8"},null]}],"nop","\n","ev",{"VAR?":"lovehouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^溢满爱的房间：体力+70、心情+20","\n","ev",{"VAR?":"strength"},70,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},20,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"esteem"},2,"-",{"VAR=":"esteem","re":true},"/ev",{"->":"DAY5.16"},null]}],"nop","\n","ev",{"VAR?":"H_love"},20,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^良好的激素水平：心情+5、外貌+3","\n","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},3,"+",{"VAR=":"face","re":true},"/ev",{"->":"DAY5.24"},null]}],"nop","\n","^[存款：","ev",{"VAR?":"money"},"out","/ev","^][外貌：","ev",{"VAR?":"face"},"out","/ev","^][体力：","ev",{"VAR?":"strength"},"out","/ev","^][心情：","ev",{"VAR?":"emotion"},"out","/ev","^][抑制剂存量：","ev",{"VAR?":"YZJ"},"out","/ev","^]","\n","ev",{"VAR?":"money"},0,"<=","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"esteem"},20,"-",{"VAR=":"esteem","re":true},"/ev",{"->":"DAY5.59"},null]}],"nop","\n",{"->":"DAY6"},{"#f":1}],"DAY6":["^DAY6","\n","ev",{"VAR?":"renthouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^每日交租：存款-100","\n","ev",{"VAR?":"money"},100,"-",{"VAR=":"money","re":true},"/ev","^低于平均水平的房间：体力+50","\n","ev",{"VAR?":"strength"},50,"+",{"VAR=":"strength","re":true},"/ev",{"->":"DAY6.8"},null]}],"nop","\n","ev",{"VAR?":"lovehouse"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^溢满爱的房间：体力+70、心情+20","\n","ev",{"VAR?":"strength"},70,"+",{"VAR=":"strength","re":true},"/ev","ev",{"VAR?":"emotion"},20,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"esteem"},2,"-",{"VAR=":"esteem","re":true},"/ev",{"->":"DAY6.16"},null]}],"nop","\n","ev",{"VAR?":"H_love"},20,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^良好的激素水平：心情+5、外貌+3","\n","ev",{"VAR?":"emotion"},5,"+",{"VAR=":"emotion","re":true},"/ev","ev",{"VAR?":"face"},3,"+",{"VAR=":"face","re":true},"/ev",{"->":"DAY6.24"},null]}],"nop","\n","^[存款：","ev",{"VAR?":"money"},"out","/ev","^][外貌：","ev",{"VAR?":"face"},"out","/ev","^][体力：","ev",{"VAR?":"strength"},"out","/ev","^][心情：","ev",{"VAR?":"emotion"},"out","/ev","^][抑制剂存量：","ev",{"VAR?":"YZJ"},"out","/ev","^]","\n","ev",{"VAR?":"money"},0,"<=","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"esteem"},20,"-",{"VAR=":"esteem","re":true},"/ev",{"->":"DAY6.59"},null]}],"nop","\n","end",{"#f":1}],"endpoor":["^过于糟糕的财务情况让相关部门将黄景瑜认定为不稳定分子，被遣返回丹东。","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"W_love"},0,{"VAR=":"H_love"},70,{"VAR=":"face"},3000,{"VAR=":"money"},80,{"VAR=":"strength"},70,{"VAR=":"esteem"},40,{"VAR=":"emotion"},0,{"VAR=":"WZQinform"},1,{"VAR=":"YZJ"},1,{"VAR=":"renthouse"},0,{"VAR=":"lovehouse"},0,{"VAR=":"work"},0,{"VAR=":"couple"},"/ev","end",null],"#f":1}],"listDefs":{}};