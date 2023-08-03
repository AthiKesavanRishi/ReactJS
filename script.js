var a = 8
console.log(a)

{
    let b =30
    console.log(b)
}

const c = 23
console.log(c)

var a = 0
if(a == 0){
    console.log("It is Zero")
}

else if(a > 0){
        console.log("The number is positive")
    }

    
else{
        console.log("The number is negative")
    }

a=6
i = 0
while(i <= a){
    console.log(i)
    i++
}

a=3
for(i=0; i<a; i++){
    console.log(i)
}

// var array = [2,4,8,16,32,64,128,256,512,1024,2048]
// array.forEach(element => console.log(element))

const arr=[12,45,"hello",2.5,Date()]
console.log("before change")
for (var i in arr){
    console.log(arr[i])
}
console.log("after change")
arr.push("3rd yr")
for(var i of arr){
    console.log(i)
}
arr.pop()
arr.pop()
arr.pop()
arr.pop()
arr.pop()
console.log("after pop")
console.log(arr)

arr.push(365)
arr.push("khi")
console.log("after push",arr)
// arr.pop()
// arr.pop()
// arr.pop()
// console.log("after pop",arr)

if (arr.length==0){
    console.log("no element found in arr")
}

else {
    console.log("element found in array r ",arr)
    
}

a = {
    Movie:"Leo",
    Actor:"Vijay",
    Actress:"Trisha",
    Director:"Loki"
}

console.log(a["Director"])
console.log(a.Actor)
var aswin = 'Movie'
console.log(a[aswin])
a.Comedian = "Mansoor"
console.log(a)
a.Villan = "GVM"
console.log(a)

for (var i in a){
    console.log(i+":" +a[i])
}



