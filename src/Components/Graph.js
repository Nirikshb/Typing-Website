import { Chart as ChartJS, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../Context/ThemeContext';

ChartJS.register(LineElement, Title, Tooltip, Legend);

const Graph = ({ graphData }) => {
  const { theme } = useTheme();

  // Extracting labels and data from graphData
  const labels = graphData.map((i) => i[0]);
  const data = graphData.map((i) => i[1]);

  // Customize chart appearance and behavior with options
  const options = {
    scales: {
      x: {
        grid: {
          color: theme.textColor, // Customize grid color
        },
        ticks: {
          color: theme.textColor, // Customize tick color
        },
      },
      y: {
        grid: {
          color: theme.textColor, // Customize grid color
        },
        ticks: {
          color: theme.textColor, // Customize tick color
        },
      },
    },
    elements: {
      point: {
        radius: 4,
        backgroundColor: theme.textColor, // Customize data point background color
        borderColor: theme.background, // Customize data point border color
      },
      line: {
        borderWidth: 2,
        borderColor: theme.textColor, // Customize line color
      },
    },
    plugins: {
      legend: {
        labels: {
          color: theme.textColor, // Customize legend label color
        },
      },
      title: {
        display: true,
        text: 'Words Per Minute (WPM)', // Customize chart title
        color: theme.textColor, // Customize chart title color
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='graph'>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              label: 'WPM',
              borderColor: theme.textColor,
              backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
            },
          ],
        }}
        options={options} // Passing the options object to customize the chart
      />
    </div>
  );
};

export default Graph;
