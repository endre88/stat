

document.getElementById("ytitle").addEventListener("click",function(){
	return document.getElementById("inputy").value;
});






	


document.getElementById("refresh").addEventListener("click", soldunitsrevenue2)
	
function soldunitsrevenue2(){
	d3.select("#SVG").remove();
	document.getElementById("xtitle").addEventListener("click",function(){
		d3.select('.x_label').remove();
		xx=document.getElementById("inputx").value;
		g.append("text")
	  	.attr("class","x_label")
	  	.attr("x", width/2)
	  	.attr("y", height+70)
	  	.attr("font-size","20px")
	  	.attr("text-anchor","middle")
	  	.text(xx)
		
});
	document.getElementById("ytitle").addEventListener("click",function(){
	d3.select('.y_label').remove();
	yy=document.getElementById("inputy").value;
	g.append("text")
	  	.attr("class","y_label")
	  	.attr("x", -height/2+50)
	  	.attr("y", -40)
	  	.attr("font-size","20px")
	  	.attr("text-anchor","end")
	  	.text(yy)
	  	.attr("transform","rotate(-90)")
	});
	var v=document.getElementById("data").value;
	var obj = JSON.parse(v); //text-ből objektummá
	/*let dataset=[
 {
   "Month": "2013_9",
   "Count": 20
 },
 {
   "Month": "2013_10",
   "Count": 574
 },
 {
   "Month": "2013_11",
   "Count": 822
 },
 {
   "Month": "2013_12",
   "Count": 515
 },
 {
   "Month": "2014_1",
   "Count": 809
 },
 {
   "Month": "2014_2",
   "Count": 944
 },
 {
   "Month": "2014_3",
   "Count": 1010
 },
 {
   "Month": "2014_4",
   "Count": 921
 },
 {
   "Month": "2014_5",
   "Count": 945
 },
 {
   "Month": "2014_6",
   "Count": 848
 },
 {
   "Month": "2014_7",
   "Count": 1558
 },
 {
   "Month": "2014_8",
   "Count": 992
 },
 {
   "Month": "2014_9",
   "Count": 1112
 },
 {
   "Month": "2014_10",
   "Count": 1012
 },
 {
   "Month": "2014_11",
   "Count": 943
 },
 {
   "Month": "2014_12",
   "Count": 785
 },
 {
   "Month": "2015_1",
   "Count": 751
 },
 {
   "Month": "2015_2",
   "Count": 906
 },
 {
   "Month": "2015_3",
   "Count": 1167
 },
 {
   "Month": "2015_4",
   "Count": 1066
 },
 {
   "Month": "2015_5",
   "Count": 974
 },
 {
   "Month": "2015_6",
   "Count": 1079
 },
 {
   "Month": "2015_7",
   "Count": 902
 },
 {
   "Month": "2015_8",
   "Count": 673
 },
 {
   "Month": "2015_9",
   "Count": 819
 },
 {
   "Month": "2015_10",
   "Count": 590
 },
 {
   "Month": "2015_11",
   "Count": 497
 },
 {
   "Month": "2015_12",
   "Count": 337
 },
 {
   "Month": "2016_1",
   "Count": 267
 },
 {
   "Month": "2016_2",
   "Count": 367
 },
 {
   "Month": "2016_3",
   "Count": 433
 },
 {
   "Month": "2016_4",
   "Count": 531
 },
 {
   "Month": "2016_5",
   "Count": 499
 },
 {
   "Month": "2016_6",
   "Count": 531
 },
 {
   "Month": "2016_7",
   "Count": 745
 },
 {
   "Month": "2016_8",
   "Count": 955
 },
 {
   "Month": "2016_9",
   "Count": 835
 },
 {
   "Month": "2016_10",
   "Count": 718
 },
 {
   "Month": "2016_11",
   "Count": 742
 },
 {
   "Month": "2016_12",
   "Count": 456
 },
 {
   "Month": "2017_1",
   "Count": 512
 },
 {
   "Month": "2017_2",
   "Count": 665
 },
 {
   "Month": "2017_3",
   "Count": 927
 },
 {
   "Month": "2017_4",
   "Count": 792
 },
 {
   "Month": "2017_5",
   "Count": 914
 },
 {
   "Month": "2017_6",
   "Count": 822
 },
 {
   "Month": "2017_7",
   "Count": 719
 },
 {
   "Month": "2017_8",
   "Count": 785
 },
 {
   "Month": "2017_9",
   "Count": 710
 },
 {
   "Month": "2017_10",
   "Count": 707
 },
 {
   "Month": "2017_11",
   "Count": 655
 },
 {
   "Month": "2017_12",
   "Count": 517
 },
 {
   "Month": "2018_1",
   "Count": 657
 },
 {
   "Month": "2018_2",
   "Count": 723
 },
 {
   "Month": "2018_3",
   "Count": 766
 },
 {
   "Month": "2018_4",
   "Count": 948
 },
 {
   "Month": "2018_5",
   "Count": 920
 },
 {
   "Month": "2018_6",
   "Count": 907
 },
 {
   "Month": "2018_7",
   "Count": 941
 },
 {
   "Month": "2018_8",
   "Count": 902
 },
 {
   "Month": "2018_9",
   "Count": 827
 },
 {
   "Month": "2018_10",
   "Count": 895
 },
 {
   "Month": "2018_11",
   "Count": 833
 },
 {
   "Month": "2018_12",
   "Count": 589
 },
 {
   "Month": "2019_1",
   "Count": 791
 },
 {
   "Month": "2019_2",
   "Count": 934
 },
 {
   "Month": "2019_3",
   "Count": 1277
 },
 {
   "Month": "2019_4",
   "Count": 1108
 },
 {
   "Month": "2019_5",
   "Count": 1591
 },
 {
   "Month": "2019_6",
   "Count": 1177
 },
 {
   "Month": "2019_7",
   "Count": 1415
 },
 {
   "Month": "2019_8",
   "Count": 1071
 },
];*/
	let dataset=obj;
	dataset.forEach(d=>d.Count=+d.Count);
	let margin={top:50,right:30,bottom:80,left:60}; 
	let width= 1200-margin.left-margin.right;
	let height= 620-margin.top-margin.bottom;
	
	let svg = d3.select(".div1")      //svg konstans definiálása            
	.append("svg") 
	.attr("id","SVG")
//svg hozzáadása a div1-hez
	.attr("width", width+margin.left+margin.right)    // az svg szélessége px-ben   
	.attr("height", height+margin.top+margin.bottom)  // az svg magassága px-ben 
	.attr("style", "outline: thin solid red;") //külső border hozzáadása
	
	let g=svg.append("g")
		.attr("transform","translate(" +margin.left+ ", " +margin.top+ ")");

	  
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
