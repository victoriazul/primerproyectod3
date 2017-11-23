console.log("Hola mundo")

d3.json("datosPartidos.js", function(data){
    
    console.log("Hola")
    
    window.data = window
    
    //Escalas
    escalaX = d3.scaleLinear()
    .domain([0,10])
    .range([0,500])
    
    ancho = 500
    alto = 500
    
    partidos = data.partidos
   contenedor = d3.select("#contenedor")
            .append("svg")
            .attr("width", ancho)
            .attr("height", alto)
    
    contenedor
    .selectAll("circle")
    .data(partidos)
    .enter()
    .append("circle")
    .attr("cx", function(d) {return d.mediaAutoubicacion})
    .attr("r", 10)
    .attr("cy", 10)

    ejeX = d3.axisBottom(escalaX)
    
    
    
    
    
    
    contenedor
        .call(ejeX)
    
    
    
    
    
})