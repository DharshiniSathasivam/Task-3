// Display Flags png

let api= new XMLHttpRequest();
console.log(api);
api.open("GET","https://restcountries.com/v3.1/all");
api.send();
api.onload=function(){
    const data=JSON.parse(api.response);
    console.log(data);
    for(let i=0;i<data.length;i++)
    console.log("Flags :",data[i].flags.png)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Display name,region,subregion,population

let api= new XMLHttpRequest();
console.log(api);
api.open("GET","https://restcountries.com/v3.1/all");
api.send();
api.onload=function(){
    const data=JSON.parse(api.response);
    console.log(data);
    for(let i=0;i<data.length;i++)
    console.log(`
    Name: ${data[i].name.common},
    Region: ${data[i].region},
    Sub-Region: ${data[i].subregion},
    Population: ${data[i].population}.
    `)
}