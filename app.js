

const gecode=require('./gecode')
gecode('egypt',(error,data)=>{
if(error){
    console.log('error',error)
}
else{
    console.log('Data',data)
}

})



const forcast=require('./forcast')
forcast('37.718','-97.845',(error,data)=>{
if(error){
    console.log('error',error)
}
else{
    console.log('Dataaaa',data)
}

})