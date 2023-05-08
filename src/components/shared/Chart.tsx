import { styled } from '@mui/material/styles';
import ApexChart from 'react-apexcharts';

export const Chart = styled(ApexChart)``;
import { PhoneAndroidOutlined, ComputerOutlined, TabletAndroidOutlined } from "@mui/icons-material"
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Stack,
    Typography,
    useTheme
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const useChartOptions = (labels) => {
    const theme = useTheme();

    return {
        chart: {
            background: 'transparent'
        },
        colors: [
            theme.palette.primary.main,
            theme.palette.success.main,
            theme.palette.warning.main
        ],
        dataLabels: {
            enabled: false
        },
        labels,
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none'
                }
            },
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        stroke: {
            width: 0
        },
        theme: {
            mode: theme.palette.mode
        },
        tooltip: {
            fillSeriesColor: false
        }
    };
};

const iconMap = {
    Desktop: (
        <PhoneAndroidOutlined />
    ),
    Tablet: (
        <ComputerOutlined />
    ),
    Phone: (
        <TabletAndroidOutlined />
    )
};

export const OverviewTraffic = (props) => {
    const { chartSeries, labels, sx } = props;
    const chartOptions = useChartOptions(labels);

    return (
        <Card sx={sx}>
            <CardHeader
                title="Total Balance"
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardContent>
                <Chart
                    height={300}
                    options={chartOptions}
                    series={chartSeries}
                    type="donut"
                    width="100%"
                    sx={{
                        border: "1px dashed red"
                    }}
                />
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    sx={{ mt: 2 }}
                >
                    {chartSeries.map((item, index) => {
                        const label = labels[index];

                        return (
                            <Box
                                key={label}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                {iconMap[label]}
                                <Typography
                                    sx={{ mr: 1 }}
                                    variant="body1"
                                    fontSize={10}
                                >
                                    {label}
                                </Typography>
                                <Typography
                                    sx={{ mr: 1 }}

                                    color="text.secondary"
                                    variant="body1"
                                    fontSize={10}
                                >
                                    {item}%
                                </Typography>
                            </Box>
                        );
                    })}
                </Stack>
            </CardContent>
        </Card>
    );
};
