var gotJob = false;
var moneySaved = 25000;
var hasFlat = false;
var hasHouse = true;

// if(gotJob == true && moneySaved > 20000 && hasFlat == true) {
//     console.log('Cholo biye kore feli');
// }
// else {
//     console.log('Tor kopale biye nai');
// }
// if(gotJob == true || moneySaved > 20000){
//     console.log('lets get married');
// }
// else{
//     console.log('kopale biye nai');
// }

if(gotJob == true && hasFlat == true ){
    console.log('Biye hobe');
}
else if(hasFlat == true || moneySaved >20000){
    console.log('biye hobe');
}
else{
    console.log('hobe na');
}