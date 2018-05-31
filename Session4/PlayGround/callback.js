console.log("This is start");

setTimeout(()=>{console.log("This is halt1")},2000);

setTimeout(()=>{console.log("This is halt2")},0);

console.log("This is end");