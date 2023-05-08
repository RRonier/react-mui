import { CustomCard } from "../../components/shared/Card"
import { useOutletContext } from "react-router-dom"
import { Stocks } from "../../utils/types"
import { Box, Grid, Typography } from "@mui/material"
import { OverviewTraffic } from "../../components/shared/Chart"
import ReportAreaChart from "../../components/shared/ReportAreaChart"

export const InformationMain = () => {
    const stocks: Stocks[] = useOutletContext()
    return (
        <Box sx={{
            border: "1px dashed blue",
            width: "100%",
        }}>
            <Box sx={{
                margin: 2,
                display: "flex",
                gap: 2,
            }}>
                {stocks && stocks.length && stocks.map((stock: Stocks, i: number) => (
                    <CustomCard
                        sx={{
                            width: "100%",
                            p: 2
                        }}
                        key={i}
                        customKey={i}
                        currency={stock.currency}
                        value={stock.value}
                        informationText={stock.informationText}
                        rate={stock.rate}
                    />
                )
                )}
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                m: 2,
            }}>
                <OverviewTraffic
                    chartSeries={[63, 15, 22]}
                    labels={['Equities', 'Fixed income', 'Edge Funds']}
                    sx={{ height: 'fit-content', width: '30%' }}
                />
                <Grid sx={{ p: 2 }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Analytics Report</Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 1 }}>
                        <ReportAreaChart />
                    </Box>
                </Grid>
            </Box>
            <Box>
                <Typography fontWeight="bold">Information Box</Typography>
            </Box>
        </Box>
    )
}