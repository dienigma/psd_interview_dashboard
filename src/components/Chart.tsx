import React from "react";
import { Line } from "react-chartjs-2";
interface Props {
  color: string;
  fill: string;
}

const Chart = ({ color, fill }: Props) => {
  let rawData: number[] = [];
  for (let i = 0; i < 10; i++) {
    rawData = [...rawData, Math.floor(Math.random() * 500)];
  }
  const data = {
    datasets: [
      {
        fill: true,
        lineTension: 0.1,
        backgroundColor: color,
        borderColor: fill,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [...rawData],
      },
    ],
  };
  return (
    <Line
      data={data}
      legend={false}
      width={100}
      height={50}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  );
};

export default Chart;
