/**
 * Created by Administrator on 2016/11/29.
 */
Core.$Defines("Game.Config")({
    init:function()
    {
        Game.Data.init();
    },
    Path:{
        DataPath:"res/Data/"
    },
    Data: {
        "StaticNames":
        {
            "Servers":[ "server","id","id"],
            "loadingtips_Table":[ "loadingtips","id","type", "id" ]
        }
    }
});