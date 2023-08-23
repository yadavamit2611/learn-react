for(var i=0;i<5;i++){
    console.log("inside var");
    setTimeout(() => {
        console.log(i);
    },1000);
}
console.log(i);

for(let i=0;i<5;i++){
    console.log("inside let");
    setTimeout(() => {
        console.log(i);
    },1000);
}