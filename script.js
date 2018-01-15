console.log("connected");

for(let i = 0; i < 3; i++)
{ /* for is its own scope with different memory allocation */
    let i = 100; /* different scope is created */
    console.log(i);
    { /* {} creates a new scope */
        let i = "a"; /* different scope is created again */
        console.log(i);
        {
            let i = "x"; /* let "cover" previously created let */
            console.log(i);
        }
    }
}

console.log("============");

function test(){
    return 10;
}

let a = test();
let b = test;
let c  = b();

console.log("============");

let m = {
    g:"Mazda",
    speed: 0,
    accelerate: test,
    break: function(){
        this.speed -= 5;
    }
}

function test(){
        this.speed += 5; /* "this" is contextual variable */
}
