<template>
<div class="container">
    <div class="caresHead">
      <h3>Zero Waste to Landfill Project</h3>
    </div>
     <div class="flex-passion container">
       <div class="passion-item">
       <p>CTDI is committed to reducing its environmental impact where possible. As part of this, CTDI is pursuing a zero waste-to-landfill certification on a facility-by-facility basis. Zero waste is a practice where all potential waste is evaluated for full retrieval, recycling, and reclamation. Practically speaking, to receive a certification, over 90% of waste material must be diverted from the landfill through recycling programs or other means. Partnering with Cox Communications Inc., CTDI began implementing this project in 2016.</p>
       </div>
        <img class="img-fluid passion-item" src="../assets/CTDI-Environment/zero-waste.jpg" id="zero-waste-img-1">
     </div>
      <div class="divider"></div>
      <!-- Arizona -->
     <div class="flex-passion-2 container">
      <img class="img-fluid passion-item" src="../assets/CTDI-Environment/phoenix.jpg">
       <div class="passion-item">
       <h5>Phoenix, AZ Facility</h5>
       <p>CTDI’s facility in Phoenix, AZ served as the pilot location for the zero waste project. It achieved certification in June of 2017. CTDI began tracking waste produced in this branch at the start of 2016. Five months later, changes were made to the collection process. Bins were right-sized, education was provided to maximize the recyclable materials collected, and containers were moved to efficiently capture recycling materials. CTDI has a robust electronic scrap recycling program across company operations, so with these few measures implemented, the Phoenix branch saw instantaneous improvement in its recycling rate.</p>
       </div>
     </div>
     <div id="chart_div"></div>
     <br>
     <div class="container"><p>In the past year, over 1700 tons were recycled with under 25 tons of waste sent to the landfill—a recycling rate of 98.61%</p></div>
     <br>
     <br>
     <br>
     <div id="table_div"></div>
     <div class="white-space"></div>
     <div class="container emissions-1"><h5>GHG Emissions</h5><p>Using the EPA WARM model, CTDI calculated the associated greenhouse gas (GHG) emissions with their waste practices in Phoenix. In the past 12 months, the 24 tons of waste sent to the landfill is equivalent to 8 tons of CO2e (carbon dioxide equivalence). However, the cardboard and mixed recyclables diverted from the landfill resulted in CO2e savings of 1,426 and 130 tons, respectively, with the electronic recycling estimated at 3,031 tons CO2e. Together, this means that CTDI’s program saved over 4,500 tons of CO2e in the past year alone.</p></div>
     <div class="divider"></div>
      <!-- Kansas -->
     <div class="flex-passion-2 container">
       <div class="passion-item">
       <h5>Wichita, KS Facility</h5>
       <p>Like in Phoenix, CTDI-Wichita began tracking waste produced at in 2016. Changes were made to the collection process beginning in May 2016, where the local team worked closely with their waste/recycling hauler. A strong emphasis was placed on maximizing the cardboard stream and ensuring no other materials entered the cardboard compactor. In the spring of 2017, a compactor was installed for landfill waste as well, reducing the number of pickups needed. The increased focus on material flow and changes to bins was successful, and Wichita is still seeing improvements each month.</p>
       </div>
       <img class="img-fluid passion-item" src="../assets/CTDI-Environment/kansas.jpg"  alt="kansas city">
     </div>
     <div id="chart_div_2"></div>
     <br>
      <div class="container"><p>In the past year, over 1300 tons were recycled with under 100 tons of waste sent to the landfill—a recycling rate of 93%.</p></div>
     <br>
     <br>
     <br>
       <div id="table_div_2"></div>
     <div class="white-space"></div>
     <div class="container emissions-2"><h5>GHG Emissions</h5><p>Using the EPA WARM model again, CTDI calculated the GHG emissions associated with their waste practices in Wichita. In the past year, the 98.3 tons of waste sent to the landfill is equivalent to 34 tons of CO2e (carbon dioxide equivalence). The cardboard recycling saved 602 tons of CO2e, while the electronic scrap/recovery program saved 2,868. Overall, this amounts to 3,436 tons CO2e avoided through Wichita’s recycling program. <br>  <br>CTDI will continue to implement this zero waste project at other facilities across the country. CTDI will also continue to strive for improvements to their waste management by addressing further zero waste business principles over time. This includes looking for opportunities to reduce and reuse all along the supply chain in order to minimize the amount of non-recyclable material involved in the company’s processes.</p></div>
     <div class="divider"></div>
         <!-- Baton Rouge -->
      <div class="flex-passion-3 container">
       <div class="passion-item">
       <h5>Baton Rouge, LA Facility</h5>
       <p>Like Phoenix & Wichita, Baton Rouge began tracking waste produced in this branch in 2016. Changes were made in May 2016. The local team worked diligently with their waste and recycler haulers. Baton Rouge was able to reduce their number of pickups from two compactors (one compactor for each cardboard and waste) pulled once a week to cardboard once every two weeks and waste compactor being pulled once per quarter! Pallet disposal has improved drastically. The facility previously had bi-annual removal. In February 2018 CTDI engaged a new vendor to coordinate a drop trailer for pallet recycling and is being pulled at an on-call bases. Baton Rouge has also established a pallet and tote reuse program in which tons per month of waste avoidance has been calculated.</p>
       </div>
       <img class="img-fluid passion-item" src="../assets/CTDI-Environment/baton-rouge.jpg"  alt="Baton Rouge">
     </div>
     <div id="chart_div_3"></div>
     <br>
      <div class="container"><p>In the past year, over 765 tons were recycled with under 30 tons of waste sent to the landfill- a recycling rate average of 96%.</p></div>
     <br>
     <br>
     <br>
       <div id="table_div_3"></div>
     <div class="white-space"></div>
     <div class="container emissions-3"><h5>GHG Emissions</h5><p>Using the EPA WARM model again, CTDI calculated the GHG emissions associated with their waste practices in Baton Rouge. In the past year, the 29.43 tons of waste sent to the landfill is equivalent to 10 tons of CO2e (carbon dioxide equivalence). The cardboard recycling saved 405 tons of CO2e, while the electronic scrap/ recovery program saved 566. Overall, this amounts to 1,078 tons CO2e avoided through Baton Rouge’s recycling program.<br><br>CTDI will continue to implement this zero waste project at other facilities across the country. CTDI will also continue to strive for improvements to their waste management by addressing further zero waste business principles over time. This includes looking for opportunities to reduce and reuse all along the supply chain in order to minimize the amount of non-recyclable material involved in the company’s processes.</p></div>
</div>
</template>



<script>

 

  export default {
    name: 'Zero',
    data() {
      return {
   
    }
  },
    created() {
    
  },

         methods: {  
          drawChart: function() {
              const data = google.visualization.arrayToDataTable([
          ['Month', 'Percentage'],
          [ 'Jan-2016',      70.00],
          [ 'Feb-2016',      74.00],
          [ 'Mar-2016',      73.00],
          [ 'Apr-2016',      74.00],
          [ 'May-2016',      75.00],
          [ 'Jun-2016',      84.00],
          [ 'Jul-2016',      85.00],
          [ 'Aug-2016',      86.00],
          [ 'Sep-2016',      87.00],
          [ 'Oct-2016',      88.00],
          [ 'Nov-2016',      89.00],
          [ 'Dec-2016',      90.00],
          [ 'Jan-2017',      93.00],
          [ 'Feb-2017',      95.00],
          [ 'Mar-2017',      96.00],
          [ 'Apr-2017',      97.00],
          [ 'May-2017',      98.00],
          [ 'Jun-2017',      97.00],
          [ 'Jul-2017',      98.00],
          [ 'Aug-2017',      98.00],
          [ 'Sep-2017',      98.00],
          [ 'Oct-2017',      99.00],
        ]);

        var options = {
          title: 'Phoenix Recycling Rate 12-month Average',
          hAxis: {title: 'Month', minValue: 0, maxValue: 15},
          vAxis: {title: 'Percentage', minValue: 0, maxValue: 100},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
            },
       
        drawChart2: function() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'Tons Landfill');
        data.addColumn('number', 'Tons Floor Recycling');
        data.addColumn('number', 'Tons Electronic Recycling');
        data.addColumn('number', 'Total Recycling Rate');
        data.addRows([
          ['Nov-2016',  {v: 3.29},{v: 39.79,},{v: 60.53,},{ f: '96.82%'}],
          ['Dec-2016',  {v: 0.79},{v: 40.16,},{v: 133.10,},{ f: '99.55%'}],
          ['Jan-2017',  {v: 2.05},{v: 41.42,},{v: 104.34,},{ f: '98.61%'}],
          ['Feb-2017',  {v: 2.47},{v: 32.17,},{v: 433.06,},{ f: '99.45%'}],
          ['Mar-2017',  {v: 3.57},{v: 32.35,},{v: 60.73,},{ f: '96.31%'}],
          ['Apr-2017',  {v: 2.35},{v: 28.44,},{v: 50.84,},{ f: '97.12%'}],
          ['May-2017',  {v: 2.39},{v: 36.17,},{v: 74.52,},{ f: '97.89%'}],
          ['Jun-2017',  {v: 0.97},{v: 44.07,},{v: 31.91,},{ f: '99.23%'}],
          ['Jul 2017',  {v: 2.74},{v: 63.99,},{v: 106.05,},{ f: '98.41%'}],
          ['Aug 2017',  {v: 2.29},{v: 55.16,},{v: 45.86,},{ f: '97.78%'}],
          ['Sep 2017',  {v: 1.12},{v: 45.45,},{v: 51.77,},{ f: '98.86%'}],
          ['Oct-2017',  {v: 0.18},{v: 43.86,},{v: 57.81,},{ f: '98.86%'}],
          ['12 Month Average',  {v: 24.21},{v: 503.03,},{v: 1210.5295,},{ f: '98.61%'}], // not 2.01 average? 24.12 / 12 for landfill
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: false, width: '100%', height: '100%'});
        },

         drawChart3: function() {
              const data = google.visualization.arrayToDataTable([
          ['Month', 'Percentage'],
          [ 'Jan-2016',      76.00],
          [ 'Feb-2016',      79.00],
          [ 'Mar-2016',      82.00],
          [ 'Apr-2016',      83.00],
          [ 'May-2016',      81.00],
          [ 'Jun-2016',      86.00],
          [ 'Jul-2016',      87.00],
          [ 'Aug-2016',      88.00],
          [ 'Sep-2016',      88.00],
          [ 'Oct-2016',      88.00],
          [ 'Nov-2016',      89.00],
          [ 'Dec-2016',      90.00],
          [ 'Jan-2017',      91.00],
          [ 'Feb-2017',      92.00],
          [ 'Mar-2017',      92.00],
          [ 'Apr-2017',      93.00],
          [ 'May-2017',      93.00],
          [ 'Jun-2017',      94.00],
          [ 'Jul-2017',      94.00],
          [ 'Aug-2017',      94.00],
          [ 'Sep-2017',      94.00],
          [ 'Oct-2017',      94.00],
        ]);

        var options = {
          title: 'Wichita Recycling Rate 12-month Average',
          hAxis: {title: 'Month', minValue: 0, maxValue: 15},
          vAxis: {title: 'Percentage', minValue: 0, maxValue: 100},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div_2'));

        chart.draw(data, options);
            },

          drawChart4: function() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'Tons Landfill');
        data.addColumn('number', 'Tons Floor Recycling');
        data.addColumn('number', 'Tons Electronic Recycling');
        data.addColumn('number', 'Total Recycling Rate');
        data.addRows([
          ['Nov-2016',  {v: 3.29},{v: 39.79,},{v: 60.53,},{ f: '96.82%'}],
          ['Dec-2016',  {v: 0.79},{v: 40.16,},{v: 133.10,},{ f: '99.55%'}],
          ['Jan-2017',  {v: 2.05},{v: 41.42,},{v: 104.34,},{ f: '98.61%'}],
          ['Feb-2017',  {v: 2.47},{v: 32.17,},{v: 433.06,},{ f: '99.45%'}],
          ['Mar-2017',  {v: 3.57},{v: 32.35,},{v: 60.73,},{ f: '96.31%'}],
          ['Apr-2017',  {v: 2.35},{v: 28.44,},{v: 50.84,},{ f: '97.12%'}],
          ['May-2017',  {v: 2.39},{v: 36.17,},{v: 74.52,},{ f: '97.89%'}],
          ['Jun-2017',  {v: 0.97},{v: 44.07,},{v: 31.91,},{ f: '99.23%'}],
          ['Jul 2017',  {v: 2.74},{v: 63.99,},{v: 106.05,},{ f: '98.41%'}],
          ['Aug 2017',  {v: 2.29},{v: 55.16,},{v: 45.86,},{ f: '97.78%'}],
          ['Sep 2017',  {v: 1.12},{v: 45.45,},{v: 51.77,},{ f: '98.86%'}],
          ['Oct-2017',  {v: 0.18},{v: 43.86,},{v: 57.81,},{ f: '98.86%'}],
          ['12 Month Average',  {v: 24.21},{v: 503.03,},{v: 1210.5295,},{ f: '98.61%'}], // fill in data
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div_2'));

        table.draw(data, {showRowNumber: false, width: '100%', height: '100%'});
        },  

      },
       
        


  mounted(){
       window.scrollTo(0, 0)
       this.drawChart();
       this.drawChart2();
       this.drawChart3();
       this.drawChart4();
  }
}
 

// sustainability.google    # A50E0E
</script>



<style scoped>

   .flex-passion img{
    height: 275px;
    width: 400px;
    max-width: 100%;
    border-radius: 4px;
    transition: transform 2s ease-in-out;
  }

.flex-passion img:hover{
    position: relative; 
    transform: scale(1.01);
    top: -1px;
}

 
.flex-passion{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 400px;
  padding-top: 50px;
}

.flex-passion-2{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 500px;
  padding-top: 50px;
}

 .flex-passion-2 img{
    height: 375px;
    width: 400px;
    max-width: 100%;
    border-radius: 4px;
    transition: transform 2s ease-in-out;
  }

  .flex-passion-2 img:hover{
    position: relative; 
    transform: scale(1.01);
    top: -1px;
}

  .flex-passion-3{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 600px;
  padding-top: 50px;
}

 .flex-passion-3 img{
    height: 375px;
    width: 400px;
    max-width: 100%;
    border-radius: 4px;
    margin-top: 70px;
    transition: transform 2s ease-in-out;
  }

  .flex-passion-3 img:hover{
    position: relative; 
    transform: scale(1.01);
    top: -1px;
}

.passion-item{
  width: 450px; 
  align-items: flex-start; 
}

 .caresHead h3 {
    margin-top: 100px;
    text-align: center;
    font-weight: 600;
    color: #202124;
    margin-bottom: 5%;
    font-size: 48px;
  }

    h5 {
    font-weight: 600;
    color: #202124;
    font-size: 28px;
    margin-bottom: 5%;
    padding-top: 0px;
  }

  #chart_div{
  margin: auto;
  width: 900px;
  height: 600px;
}

  #table_div{
   margin: auto;
   width: 85%;
   height: 800px;
  }

  .emissions-1{
    max-width: 85%;
    height: 290px;
  }

   #chart_div_2{
  margin: auto;
  width: 900px;
  height: 600px;
}

  #table_div_2{
   margin: auto;
   width: 85%;
   height: 800px;
  }

 .emissions-2{
    max-width: 85%;
    height: 415px;
  }

  #chart_div_3{
  margin: auto;
  width: 900px;
  height: 600px;
}

  #table_div_3{
   margin: auto;
   width: 85%;
   height: 800px;
  }

  .emissions-3{
    max-width: 85%;
    height: 400px;
  }

   .divider {
    height: 1px;
    background: #444;
    margin: auto;
    max-width: 80%;
  }

 
  a{
    color: #111111;
  }

.white-space{
  height: 200px;
}


  @media (max-width: 667px) {
   
    #zero-waste-img-1{
    height: 300px;
    width:  400px;
 }

     .flex-passion{
  display: flex;
  flex-direction: column;
  height: 825px;
  padding-top: 5px;
  align-content: center;
  }

  .flex-passion-2{
  display: flex;
  flex-direction: column;
  height: 1050px;
  padding-top: 5px;
  align-content: center;
  }

  .flex-passion-3{
  display: flex;
  flex-direction: column;
  height: 1200px;
  padding-top: 5px;
  align-content: center;
  }

  .passion-item{
   margin: auto;
   max-width: 95%;
 }

 h6{
   font-size: 20px;
 }
  
  #table_div{
  height: 900px;
  width: 400px;
}

  .emissions-1{
    max-width: 85%;
    height: 575px;
  }

  .emissions-2{
    max-width: 85%;
    height: 950px;
  }

  .emissions-3{
    max-width: 85%;
    height: 950px;
  }
  
}

</style>


