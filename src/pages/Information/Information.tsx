import { CustomCard } from "../../components/shared/Card"
import { useOutletContext } from "react-router-dom"
import { Stocks } from "../../utils/types"
import { Box } from "@mui/material"
import { OverviewTraffic } from "../../components/shared/Chart"

export const InformationMain = () => {
    const stocks: Stocks[] = useOutletContext()
    return (
        <Box>
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
            <OverviewTraffic
                chartSeries={[63, 15, 22]}
                labels={['Equities', 'Fixed income', 'Edge Funds']}
                sx={{ height: 'fit-content', width: '30%', border: "1px dashed blue" }}
            />
        </Box>
    )
}