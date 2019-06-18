var color = d3.scaleOrdinal()
    .domain(['AFRICA','N.AMERICA','EUROPE' ,'S.AMREICA', 'ASIA' , 'AUSTRALAIA'])
    .range(['red' , 'orange' , 'yellow' , 'green', "blue" , "indego" , "grey"])

    console.log(color('AFRICA'))//red
    console.log(color('AUSTRALAIA')) // grey

    //you can use  .range(d3.schemaCategory10) or somthing else 