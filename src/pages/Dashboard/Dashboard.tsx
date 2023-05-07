import { OverviewTasksProgress } from "../../components/shared/Card"

export const Dashboard = () => {
    return (
        <OverviewTasksProgress sx={{ height: '50%' }}
            value={10} />
    )
}