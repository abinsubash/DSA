class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
        this.items.push(value)
    }
    pop(){   
        return this.items.pop()
    }
    getSize(){
        return this.items.length
    }
   valid(str){
       const matchingParis={
            "{":"}",
            "[":"]",
            "(":")"
       }
       const parentesesStack = new Stack();
       for(let char of str){
           if(char in matchingParis){
               parentesesStack.push(char);
           }else if (Object.values(matchingParis).includes(char)){
               if(parentesesStack.getSize()===0||
               matchingParis[parentesesStack.pop()]!=char
               ){
                   return false;
               }
               
           }
       }
       return parentesesStack.getSize()===0
   }
    display(){
        console.log(this.items)
    }
}

let stack = new Stack()
console.log(stack.valid("{[[{]]}"))
