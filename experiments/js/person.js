function Person() {
    this.name = "";
    this.age = 0;
    this.setAge = function(age) {
        this.age = age;
    };
    this.getAge = function() {
        return this.age;
    };
    this.setName = function(name) {
        this.name = name;
    };
    this.getName = function() {
        return this.name;
    };
    this.toString = function() {
        return this.name + " " + this.age;
    };
}