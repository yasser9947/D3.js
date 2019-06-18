var color = d3.scaleBand()
    .domain(['AFRICA','N.AMERICA','EUROPE' ,'S.AMREICA', 'ASIA' , 'AUSTRALAIA'])
    .range([0.400])
    .paddingInner(0.3)
    .paddengOuter(0.2)
    console.log(x('S.AMREICA')) // 209
    console.log(x('AUSTRALAIA'))//341
    console.log(x('AFRICA'))//13.1

    console.log(x.bandwidth())//45.9
