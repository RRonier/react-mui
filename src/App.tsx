// import { LoginPage } from './pages/Login/Login'
import { useState } from "react";
import Drawer from "./Layouts/Drawer/Drawer"
function App() {
  const [open, setOpen] = useState(true);
  return (
    // <LoginPage />
    <Drawer handleDrawerClose={setOpen} open={open} />
  )
}

export default App
