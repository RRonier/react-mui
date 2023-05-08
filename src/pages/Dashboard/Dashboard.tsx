import { useState, useEffect } from "react";
import Drawer from "../../layouts/Drawer/Drawer"
import { Navbar } from "../../layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { fakeStocksService } from "../../services/MockServices";
import { Stocks } from "../../utils/types";

export const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [stocks, setStocks] = useState<Stocks[]>([]);

    useEffect(() => {
        const getStocks = async () => {
            let stockData = await fakeStocksService()
            setStocks(stockData)
        }
        getStocks()
    }, [])
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
            <div style={{
                display: 'flex',
                width: '100%',
            }}
            >
                <Drawer
                    handleDrawerOpen={handleDrawerOpen}
                    handleDrawerClose={handleDrawerClose}
                    open={open}
                />
                <Outlet context={stocks} />
            </div>
        </>
    )
}