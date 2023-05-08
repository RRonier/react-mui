import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography
} from '@mui/material';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
    ActivityCardProps
} from '../../utils/types';

export const ActivityCard = ({
    name,
    price,
    store,
    ammount,
    elapsedTime,
    customKey,
    sx }: ActivityCardProps) => {
    return (
        <Card sx={sx}>
            <CardContent
                sx={{
                    display: "flex",
                    // margin: "0 !important",
                    // py: "0 !important",
                    // px: "2 !important"
                }}
            >
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80px",
                    height: "70px",
                    backgroundColor: customKey > 0 && customKey < 3 ? "cyan" : "#ff0080",
                    borderRadius: "5px",
                    mx: 2,
                }}>
                    {customKey > 0 && customKey < 3 ? <ArrowDownwardIcon sx={{
                        width: 50,
                        height: 40
                    }} /> :
                        <ArrowUpwardOutlinedIcon sx={{
                            width: 50,
                            height: 40
                        }} />}
                </Box>
                <Box sx={{
                    width: "100%"
                }}>
                    <Stack
                        alignItems="flex-start"
                        direction="row"
                        // justifyContent="space-between"
                        spacing={1}
                        marginBottom={1}
                        sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <Typography fontWeight="bold">{name}</Typography>
                        <Typography fontWeight="bold" sx={{
                            color: customKey > 0 && customKey < 3 ? "green" : "red"
                        }}>{price}</Typography>
                    </Stack>
                    <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                        <Typography fontSize={14} fontWeight="bold" sx={{ width: "fit-content" }}>{store}</Typography>
                        <Typography fontSize={14} sx={{
                            width: "fit-content", color: customKey > 0 && customKey < 3 ? "green" : "red"

                        }}>{ammount}</Typography>
                    </Stack>
                    <Typography fontSize={14}>{elapsedTime}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};