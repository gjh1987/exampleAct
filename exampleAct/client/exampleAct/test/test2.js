/**
 * Created by Administrator on 2016/11/25.
 */
 Class({
    ClassName:"Test.Class.A",
    a:7,
    c:2,
    testVale:{
        get:function(){ return this.a+this.c; },
        set:function(v){this.a *= v;}
    }
}).Static({
    Instance:Core.Instance
})

var c = Test.Class.A.Instance;
console.log(c.testVale);
c.testVale = 100;
console.log(c.testVale);