/**
 * Created by Administrator on 2016/11/26.
 */
Class({
    ClassName:"Test.Class.A",
    a:7,
    c:2,
    testVale:{
        get:function(){ return this.a+this.c; },
        set:function(v){this.a *= v;}
    }
})

Class({
    ClassName:"Test.Class.B",
    Base:"Test.Class.A",
    newTestValue:
    {
        get:function()
        {
            return this.a*this.a+this.c;
        }
    }
}).Static({
    Instance:Core.Instance
})

var c = Test.Class.B.Instance;
console.log(c.testVale);
c.testVale = 100;
console.log(c.testVale);
console.log(c.newTestValue);