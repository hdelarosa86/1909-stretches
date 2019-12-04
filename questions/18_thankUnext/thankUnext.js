// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):
Array.prototype.next = function(){
    if(!this.nextIdx){
        this.nextIdx = 0;
    }

    for(let i = 0; i < this.length; i++){
        if(i === this.length - 1){
            
        console.log(this[i])
    }
    
    // this.forEach(a => {
    //     if(Array.indexOf(a) === this.length -1){
    //     }
    //     console.log(a);
    return this;
}
// no export statement required
