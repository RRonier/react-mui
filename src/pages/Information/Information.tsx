import { CustomCard } from "../../components/shared/Card"
import { useOutletContext } from "react-router-dom"
import { Stocks } from "../../utils/types"
import { Box } from "@mui/material"

export const InformationMain = () => {
    const stocks: Stocks[] = useOutletContext()
    console.log(stocks)
    return (
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
    )
}