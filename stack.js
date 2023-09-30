class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }

    push(elem){
        this.data[this.top] = elem;
        this.top++;
    }

    length(){
        return this.top;
    }

    peek(){
        return this.data[this.top - 1 ]
    }

    isEmpty(){
        return this.top === 0;
    }
    pop(){
         if(this.isEmpty() === false){
            this.top = this.top - 1;
            return this.data.pop();
         }
    }

    print(){
        for(let i = 0; i < this.top ; i++){
            console.log(this.data[i])
        }
    }

   
}

let l1 = new Stack();
l1.push(3);
l1.push(2);
l1.push(6);

console.log(l1.data);
console.log(l1.print())