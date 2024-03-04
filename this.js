function myThis () {

    // fn.call(obj, a, b, c, ...)

    Function.prototype.myCall = function (obj, ...args) {

        // obj参数容错处理
        // if (!obj) {
        //     obj = typeof window === 'undefined' ? global : window;
        // }

        // obj参数容错处理
        // if (typeof obj !== 'object') {
        //     obj = Object(obj);
        // }

        // 使用 Symbol 防止属性名冲突
        // const fnSymbol = Symbol();

        // 核心实现
        obj['fn'] = this;

        let result = obj['fn'](...args);

        delete obj['fn'];

        return result;
    }

    // fn.apply(obj, [a, b, c, ...])
    Function.prototype.myApply = function (obj, list) {

        // obj、list参数容错处理，对list的类型判断非空判断

        // 核心实现
        obj['fn'] = this;
        let result = obj['fn'](list);
        delete obj['fn'];

        return result;
    }

    // fn.bind(obj, a, b, c, ...)()
    Function.prototype.myBind = function (obj, ...args) {


        // 核心实现
        return (callArgs) => this.myApply(obj, args.concat(callArgs));

        // 相当于call或apply套一层函数
        // return () => {
        //     obj['fn'] = this;
        //     let result = obj['fn'](args);
        //     delete obj['fn'];
        //     return result;
        // }
    }


    // 测试
    function showThis() {
        console.log(this);
    }
    
    let obj1 = { name: 'obj1' };

    showThis(); // 输出：Window
    showThis.myCall(obj1); // 输出：{ name: 'obj1' }
    showThis.myApply(obj1); // 输出：{ name: 'obj2' }
    showThis.myBind(obj1)(); // 输出：{ name: 'obj1' }
}
