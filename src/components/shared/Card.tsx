import {
    Card,
    CardContent,
    Stack,
    Typography
} from '@mui/material';
import { Stocks } from '../../utils/types';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

interface CustomCardProps extends Stocks {
    sx: Object,
    customKey: number
}
export const CustomCard = ({ currency, value, informationText, rate, sx, customKey }: CustomCardProps) => {
    return (
        <Card sx={sx}>
            <CardContent sx={{
                margin: "0 !important",
                py: "0 !important",
                px: "2 !important"
            }}>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    width="100%"
                    // justifyContent="space-between"
                    spacing={1}
                    sx={{ minWidth: 200 }}
                    marginBottom={1}
                >
                    <Typography fontWeight="bold">{currency}</Typography>
                    <Typography fontWeight="bold">{value}</Typography>
                    {rate ? <KeyboardArrowUpOutlinedIcon sx={{
                        m: "0 !important", p: "0 !important",
                        width: 20,
                        height: 18,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        color: customKey > 1 ? "green" : "red",
                    }} /> : null}
                    <Typography sx={{
                        m: "0 !important", p: "0 !important",
                        width: 20,
                        color: customKey > 1 ? "green" : "red",
                    }} fontSize={14}>{rate}</Typography>
                </Stack>
                <Typography fontSize={14}>{informationText}</Typography>
            </CardContent>
        </Card>
    );
};