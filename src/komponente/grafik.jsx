import './GrafikCss.css'
import {
 XYPlot,
 LineSeries,
 XAxis,
 YAxis,
 VerticalGridLines,
 HorizontalGridLines,
} from "react-vis";

const Grafik = ({pica} ) => {
  const data = [


  ];


   for(var i=0;i<pica.length;i++){


     data.push({x:pica[i].id,y:pica[i].cena})
      console.log(data)
   }

   return (
    <div>
    <h3>Ukupan broj proizvoda u ponudi: {pica.length}</h3> 

    <div style={{ margin: "15px" }}>
      <br /><br />
      <h2>Najprodavaniji proizvodi</h2>
      <XYPlot height={300} width={600}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis /> 
        <LineSeries data={data} color="orange" />
      </XYPlot>
    </div>
</div>
  );
 };
 
 export default Grafik;