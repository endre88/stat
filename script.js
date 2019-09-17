 function soldunitsrevenue2(){
	const dataset=[
  {
    "Month": "2013_09",
    "Count": 1
  },
  {
    "Month": "2013_10",
    "Count": 291
  },
  {
    "Month": "2013_11",
    "Count": 763
  },
  {
    "Month": "2013_12",
    "Count": 853
  },
  {
    "Month": "2014_01",
    "Count": 590
  },
  {
    "Month": "2014_02",
    "Count": 810
  },
  {
    "Month": "2014_03",
    "Count": 1159
  },
  {
    "Month": "2014_04",
    "Count": 1158
  },
  {
    "Month": "2014_05",
    "Count": 801
  },
  {
    "Month": "2014_06",
    "Count": 915
  },
  {
    "Month": "2014_07",
    "Count": 1474
  },
  {
    "Month": "2014_08",
    "Count": 1153
  },
  {
    "Month": "2014_09",
    "Count": 1177
  },
  {
    "Month": "2014_10",
    "Count": 1079
  },
  {
    "Month": "2014_11",
    "Count": 912
  },
  {
    "Month": "2014_12",
    "Count": 1123
  },
  {
    "Month": "2015_01",
    "Count": 554
  },
  {
    "Month": "2015_02",
    "Count": 965
  },
  {
    "Month": "2015_03",
    "Count": 995
  },
  {
    "Month": "2015_04",
    "Count": 1263
  },
  {
    "Month": "2015_05",
    "Count": 965
  },
  {
    "Month": "2015_06",
    "Count": 1167
  },
  {
    "Month": "2015_07",
    "Count": 945
  },
  {
    "Month": "2015_08",
    "Count": 800
  },
  {
    "Month": "2015_09",
    "Count": 800
  },
  {
    "Month": "2015_10",
    "Count": 681
  },
  {
    "Month": "2015_11",
    "Count": 562
  },
  {
    "Month": "2015_12",
    "Count": 485
  },
  {
    "Month": "2016_01",
    "Count": 204
  },
  {
    "Month": "2016_02",
    "Count": 382
  },
  {
    "Month": "2016_03",
    "Count": 406
  },
  {
    "Month": "2016_04",
    "Count": 473
  },
  {
    "Month": "2016_05",
    "Count": 556
  },
  {
    "Month": "2016_06",
    "Count": 576
  },
  {
    "Month": "2016_07",
    "Count": 606
  },
  {
    "Month": "2016_08",
    "Count": 904
  },
  {
    "Month": "2016_09",
    "Count": 912
  },
  {
    "Month": "2016_10",
    "Count": 825
  },
  {
    "Month": "2016_11",
    "Count": 759
  },
  {
    "Month": "2016_12",
    "Count": 663
  },
  {
    "Month": "2017_01",
    "Count": 402
  },
  {
    "Month": "2017_02",
    "Count": 636
  },
  {
    "Month": "2017_03",
    "Count": 793
  },
  {
    "Month": "2017_04",
    "Count": 865
  },
  {
    "Month": "2017_05",
    "Count": 930
  },
  {
    "Month": "2017_06",
    "Count": 847
  },
  {
    "Month": "2017_07",
    "Count": 812
  },
  {
    "Month": "2017_08",
    "Count": 791
  },
  {
    "Month": "2017_09",
    "Count": 749
  },
  {
    "Month": "2017_10",
    "Count": 770
  },
  {
    "Month": "2017_11",
    "Count": 683
  },
  {
    "Month": "2017_12",
    "Count": 710
  },
  {
    "Month": "2018_01",
    "Count": 511
  },
  {
    "Month": "2018_02",
    "Count": 736
  },
  {
    "Month": "2018_03",
    "Count": 695
  },
  {
    "Month": "2018_04",
    "Count": 936
  },
  {
    "Month": "2018_05",
    "Count": 1013
  },
  {
    "Month": "2018_06",
    "Count": 946
  },
  {
    "Month": "2018_07",
    "Count": 994
  },
  {
    "Month": "2018_08",
    "Count": 964
  },
  {
    "Month": "2018_09",
    "Count": 872
  },
  {
    "Month": "2018_10",
    "Count": 945
  },
  {
    "Month": "2018_11",
    "Count": 754
  },
  {
    "Month": "2018_12",
    "Count": 895
  },
  {
    "Month": "2019_01",
    "Count": 600
  },
  {
    "Month": "2019_02",
    "Count": 913
  },
  {
    "Month": "2019_03",
    "Count": 1128
  },
  {
    "Month": "2019_04",
    "Count": 1397
  },
  {
    "Month": "2019_05",
    "Count": 1304
  },
  {
    "Month": "2019_06",
    "Count": 1335
  },
  {
    "Month": "2019_07",
    "Count": 1354
  },
  {
    "Month": "2019_08",
    "Count": 1307
  }
];
	dataset.forEach(d=>d.Count=+d.Count);
	console.log(dataset[0]);
	let margin={top:50,right:30,bottom:80,left:60}; 
	let width= 1200-margin.left-margin.right;
	let height= 620-margin.top-margin.bottom;
	
	const svg = d3.select(".div1")      //svg konstans definiálása            
	.append("svg")  //svg hozzáadása a div1-hez
	.attr("width", width+margin.left+margin.right)    // az svg szélessége px-ben   
	.attr("height", height+margin.top+margin.bottom)  // az svg magassága px-ben 
	.attr("style", "outline: thin solid red;") //külső border hozzáadása
	
	let g=svg.append("g")
		.attr("transform","translate(" +margin.left+ ", " +margin.top+ ")");

	g.append("text")
	  	.attr("class","x label")
	  	.attr("x", width/2)
	  	.attr("y", height+76)
	  	.attr("font-size","20px")
	  	.attr("text-anchor","middle")
	  	.text("Hónapok")

	 g.append("text")
	  	.attr("class","y label")
	  	.attr("x", -height/2+50)
	  	.attr("y", -40)
	  	.attr("font-size","20px")
	  	.attr("text-anchor","end")
	  	.text("Hibajegyek száma")
	  	.attr("transform","rotate(-90)")
	  
	let x = d3.scaleBand() //vízszintes kiterjedés megadása
				.domain(dataset.map(d=>d.Month))  //vízszintes elemek adata
            .range([0, width]) //vízszintes elemek szélessége px-ben
				.paddingInner(0.3) //belső margó
				.paddingOuter(1)//külső margó
	  //console.log(x("October"),x("November"),x("December")); // hónapok helyzeti értékei px-ben
	
	let y = d3.scaleLinear() //függőleges elemek magassági állítása
            .domain([0, d3.max(dataset,d=>d.Count)+80]) //0-tól legnagyobb elemig
            .range([height, 0]); //átszámolás 400-as skálára
	 
	/*g.selectAll(null)       
      .data(dataset)       
      .enter()       
      .append("text")  
	   .attr("font-size","11px")
	  	.attr("text-anchor","middle")
      .text((d) => d.Count)
		.attr("y",d=>y(d.Count)-3)
	   .attr("x",(d)=>x(d.Month)+4);*/
	 
	 
	let leftAxis=d3.axisLeft(y)
		.ticks(8)
		.tickFormat(d=>d);
	g.append("g")
			.attr("class","left axis")
	  	  	.attr("transform","translate(0,0)")
			.call(leftAxis)
	 
	let rects=g.selectAll(null)       //négyszögek hozzáadása
		.data(dataset)       //adat ciklus
		.enter()     //hozzáférés
		.append("rect") //svg hez hozzáadja a négyszögeket
		.attr("y",d=>y(d.Count)) // függőleges kezdei magasság
		.attr("x",d=>x(d.Month)) //oszlop kezdete az egyes elemek esetében
		.attr("width",x.bandwidth) // hónapok szélessége az x alapján
		.attr("height",d=>height-y(d.Count)) //oszlop magasság értéke
		.attr("fill","blue") //kitöltés szín

	let bottomAxis=d3.axisBottom(x);
	  g.append("g")
	  		.attr("class", "x axis")
	  		.attr("transform","translate(0,"+height+")")
	  		.call(bottomAxis)
	  		.selectAll("text")
	  		.attr("y","10")
	  		.attr("x","-5")
	  		.attr("text-anchor","end")
	  		.attr("transform","rotate(-40)");

  };

soldunitsrevenue2();
