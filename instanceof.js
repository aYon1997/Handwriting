function myInstanceof () {

    // let a = function(){};
    // let b = new a();
    // b instanceof a;  // true

    function MyI (obj, fn) {
        let a = obj.__proto__;

        while (a) {
            if (a === fn.prototype) {
                return true;
            }
            a = a.__proto__;
        }
        return false;
    }

    let aa = function(){};
    let bb = new aa();
    console.log(MyI(bb, aa)); // true

    // __proto__ 是一个非标准的属性,虽然大多数现代浏览器都支持它，但它并不是所有JavaScript环境的一部分。
    // 在实际开发中，使用 Object.getPrototypeOf 是更加推荐的方式，因为它是ECMAScript标准的一部分。
}