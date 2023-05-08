import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// chart options
const areaChartOptions: ApexOptions = {
    chart: {
        height: 340,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 1.5
    },
    grid: {
        strokeDashArray: 4
    },
    yaxis: {
        show: false
    },
};

// ==============================|| REPORT AREA CHART ||============================== //

const ReportAreaChart = () => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const [options, setOptions] = useState<ApexOptions>(areaChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: ["#FF00FF"],
            grid: {
                borderColor: "none"
            },
            tooltip: {
                theme: 'light'
            },
        }));
    }, [primary, secondary, line, theme]);

    const [series] = useState([
        {
            name: 'Series 1',
            data: [58, 115, 28, 83, 63, 75, 35, 55]
        }
    ]);

    return <ReactApexChart options={options} series={series} type="line" height={345} width={650} />;
};

export default ReportAreaChart;
