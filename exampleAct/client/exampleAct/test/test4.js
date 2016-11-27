/**
 * Created by Administrator on 2016/11/27.
 */

var cards = [];
for(var i=0;i<1000;i++)
{
    var id = i;
    /// 等级 随机 1-100
    var lv = parseInt(Math.random()*100)+1;
    /// 品质 随机 1-5
    var quality = parseInt(Math.random()*5)+1;
    //星级 随机 1-10
    var star =  parseInt(Math.random()*10)+1;
    //攻击力随机 1-1000
    var atk = parseInt(Math.random()*1000)+1;
    //防御 随机 1-100
    var def =  parseInt(Math.random()*100)+1;
    cards.push(
        {
            id:id,
            lv:lv,
            quality:quality,
            star:star,
            atk:atk,
            def:def
        }
    )
}

var myCards = new Core.mapArray("id",[
    {"lv":true},
    {"quality":false},
    {"star":true},
    {"atk":true},
    {"def":true},
    {"id":true},{
}]);

for(var i=0;i<cards.length;i++)
{
    myCards.InsertValue(cards[i]);
}
// 获取 长度
console.log("ay.len :"+myCards.Ay.length);
// 获取 id为 345
console.log("ay.len :"+myCards.Map[345]);