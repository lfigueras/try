function Reverse(rev){
    this.rev = rev;
    this.sayHello = function(){
        var res = this.rev.split("");
        const len = res.length;
        var arr = [];
        for (i = 0; i < len; i++){
            arr += res.pop()   
    }
      return arr
    }
}
let word = new Reverse('hello')
console.log(word.sayHello())
