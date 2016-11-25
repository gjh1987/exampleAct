/**
 * Created by Administrator on 2016/11/25.
 */
Core.$AlwaysGetMember("Test.Value.C.aValue",global);
console.log("a is:"+JSON.stringify(Test.Value.C.aValue));

Core.$Defines("Test.Value.C.aValue",global)({
    c:1,
    b:[1,2,3]
});
console.log("Test.Value.C.aValue is:"+JSON.stringify(Test.Value.C.aValue));

Core.$Defines("Test.Value.C.bValue",global)({
    c:1,
    b:[1,2,3]
});
console.log("Test.Value.C is:"+JSON.stringify(Test.Value.C));

Core.$AlwaysDefines("Test.Value.C.ForceValue",1);
console.log("Test.Value.C.ForceValue:"+Test.Value.C.ForceValue);

Core.$AlwaysDefines("Test.Value.C.ForceFunction",function(){
    console.log("forceFunction");
});
Test.Value.C.ForceFunction();
