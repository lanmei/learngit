Array.prototype.unique1 = function(){
var res = [this[0]];
for(var i = 1; i < this.length; i++){
var repeat = false;
for(var j = 0; j < res.length; j++){
if(this[i] == res[j]){
repeat = true;
break;
}
}
if(!repeat){
res.push(this[i]);
}
}
return res;
}
var arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0]
alert(arr.unique1());
<<<<<<< HEAD

=======
look me
home first
>>>>>>> 4ad4a0e426c12a35777b3f7ae801bac06908fa13
