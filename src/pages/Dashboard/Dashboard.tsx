import { useState, useEffect } from "react";
import Drawer from "../../layouts/Drawer/Drawer"
import { Navbar } from "../../layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { fakeStocksService, fakeDocumentsService } from "../../services/MockServices";
import { DocumentsData, Stocks } from "../../utils/types";

export const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [stocks, setStocks] = useState<Stocks[]>([]);
    const [documentsData, setDocumentsData] = useState<DocumentsData[]>([]);

    useEffect(() => {
        const getStocks = async () => {
            let stockData = await fakeStocksService()
            setStocks(stockData)
        }
        const getDocuments = async () => {
            let documents = await fakeDocumentsService()
            setDocumentsData(documents)
        }
        getStocks()
        getDocuments()
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
                <Outlet context={[stocks, documentsData]} />
            </div>
        </>
    )
}