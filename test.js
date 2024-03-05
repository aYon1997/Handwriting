function classInherit () {
    class father {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(111);
        }
    }

    class son extends father {
        constructor(name) {
            super(name);
        }

        speak() {
            console.log(222, this.name);
        }

        speak2() {
            console.log(333, this.name);
        }
    }

    let newSon = new son('Rex');
    newSon.speak(); // 222, Rex
    newSon.speak2(); // 333, Rex
};
classInherit();