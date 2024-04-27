import Paper from '@mui/material/Paper';
import {
    Chart,
    PieSeries,
    Title
} from '@devexpress/dx-react-chart-material-ui';


const DoughnutChart = () => {

    const data = [
        { argument: 'Branding', value: 50 },
        { argument: 'Illustration', value: 35 },
        { argument: 'User Interface', value: 15 },
    ];
    const colors = ['#546FFA', '#FC3400', '#00A5FF']
    return (
        <Paper elevation={0} >
            <Chart
                data={data}
                palette={colors}
                width={300}
                height={300}
            >
                <PieSeries valueField="value"
                    argumentField="argument"
                    innerRadius={0.9}
                    color={colors} />
                <Title text="Project Scope" />
            </Chart>
        </Paper>
    );
}

export default DoughnutChart;
