import { CustomCard } from "../../components/shared/Card"
import { OutletProps, useOutletContext } from "react-router-dom"
import { Stocks } from "../../utils/types"
import { Box, Grid, Typography } from "@mui/material"
import { OverviewTraffic } from "../../components/ui/Chart"
import ReportAreaChart from "../../components/ui/ReportAreaChart"
import { EnhancedTable } from "../../components/ui/Table"

export const InformationMain = () => {
    const context: OutletProps = useOutletContext()
    return (
        <Box sx={{
            width: "100%",
        }}>
            <Box sx={{
                margin: 2,
                display: "flex",
                gap: 2,
            }}>
                {context && context[0]?.length && context[0]?.map((stock: Stocks, i: number) => (
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
            <Box sx={{
                m: 2
            }}>
                <Typography fontWeight="bold" fontSize={20} sx={{ mb: 1 }}>Information Box</Typography>
                <Typography variant="body1" fontSize={14} sx={{ mb: 2 }}>Detailed list of document status</Typography>
                {context && context[1]?.length && <EnhancedTable documents={context[1]} />}
            </Box>
        </Box>
    )
}