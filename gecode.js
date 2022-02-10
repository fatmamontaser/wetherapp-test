
const request = require('request')
const gecode =(address,callback)=>{
    const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20"+address+".json?access_token=pk.eyJ1IjoiZmF0bWFob3NzbnkiLCJhIjoiY2t6ZmJqZG5uMHBmdTJwcGp1dnB5MHF5dCJ9.yEgYYgmwhexQtf-x6otnVQ"
    
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("error",undefined)
        }else if(response.body.message){ 
            callback(response.body.message)
        }else if (response.body.features.lenght==0){
            callback("your search is wrong",undefined)
        }else{
            callback(undefined,{
                longtitiude:response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
            // const longtitiude= response.body.features[0].center[0]
            // const latitude= response.body.features[0].center[1]
            // console.log(longtitiude,latitude)
        }
    
        
    })
    }
     module.exports=gecode
    