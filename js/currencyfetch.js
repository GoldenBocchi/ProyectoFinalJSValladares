document.addEventListener('DOMContentLoaded',()=>{
    cargaCurrency();  
})

const cargaCurrency = async() => {
    try{
        const respuesta = await fetch('http://apilayer.net/api/live?access_key=53b4f42a20af0ba1d7258738b8862b12&currencies=PEN&source=USD&format=1');
        console.log(respuesta);
        const datos = await respuesta.json();
        console.log(datos.quotes.USDPEN);
        info=JSON.stringify(datos.quotes.USDPEN);
        console.log(info);

    } catch(error){
        console.log(error);
    }
    prueba2(info)
      
}


function prueba2(info){
    document.getElementById('tc2').innerHTML="El tipo de cambio de moneda Extranjera (USD) a Nacional es: "+info
}



