let s = "ab#c";
let t = "ab#c";
let a = [];
let b = [];
for(let val of s){
  (val === "#) ? a.pop() : a.push(val);
   }
for(let val of t){
  (val === "#") ? b.pop() : b.push(val)
}
console.log(a.join() === b.join())
