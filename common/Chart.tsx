import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ className, chartData }: { className?: string; chartData: ChartData<'bar', CategoryDataset> }): JSX.Element => {
  return (
    <>
      <Bar className={className} data={chartData} />
    </>
  );
};
