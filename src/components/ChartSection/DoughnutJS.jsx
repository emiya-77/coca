import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutJS = () => {
  return (
    <div>
      <Doughnut 
        data={{
          datasets: [
            {
              label: "Scope",
              data: [50, 35, 15],
              cutout: 125,
              radius: 100,
              backgroundColor: [
                '#546ffa',
                '#fc3400',
                '#00a5ff',
              ],
              hoverOffset: 16,
              spacing: 2,
              hoverBorderColor: '#fff',
              animation: {
                animateScale: true
              }
            }
          ]
        }}
      />
    </div>
  )
}

export default DoughnutJS