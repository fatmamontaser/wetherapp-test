const request = require('request')
const forcast =(latitude,longtitiude,callback)=>{
    const url ="http://api.weatherstack.com/current?access_key=9d51140b779d53a2a04cfe1622840f05&query="+longtitiude+","+latitude
    
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("error",undefined)
        }else if(response.body.error){ 
            callback(response.body.error)
        }else{
            callback(undefined,{
                latitude: response.location.lat,
                longtitiude:response.location.lon,
                
                
            })
            // const longtitiude= response.body.features[0].center[0]
            // const latitude= response.body.features[0].center[1]
            // console.log(longtitiude,latitude)
        }
    
        
    })
    }

    // console.log("test")
     module.exports=forcast
    