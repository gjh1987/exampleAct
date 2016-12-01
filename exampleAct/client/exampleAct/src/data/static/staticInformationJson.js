/**
 * Created by Administrator on 2016/11/29.
 */
Core.$Defines("Game.CStaticInformationClass")({
    addValueKey:function(key,value,map)
    {
        if( !map.$Length )
        {
            map.$Length=0;
        }
        map.$Length++;
        map[key] = value;
    },
    getJsonData:function(file)
    {
        return cc.loader.getRes(Game.Config.Path.DataPath + file + ".json");;
    },
    Create: function(keys) {
        var data = this.getJsonData(keys[0]);
        var map = {};
        for(var i=0;i<data.length;i++)
        {
            var temp = data[i];
            var tempMap = map;

            var count = keys.length;
            for(var j=1;j<count;j++)
            {
                var key = temp[keys[j]];
                if(j === count-1)
                {
                    this.addValueKey(key,temp,tempMap);
                }
                else
                {

                    if(tempMap.hasOwnProperty(key))
                    {
                        tempMap = tempMap[key];
                    }
                    else
                    {
                        this.addValueKey(key,{},tempMap);
                        tempMap = tempMap[key];
                    }
                }
            }
        }
        return map;
    }
});

