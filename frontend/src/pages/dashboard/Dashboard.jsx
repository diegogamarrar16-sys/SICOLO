import Layout from "../../components/Layout";
import DashboardCard from "../../components/DashboardCard";

const Dashboard = () => {

    return (

        <Layout>

            <h2 className="mb-4">
                Dashboard General
            </h2>

            <div className="row g-4">

                <div className="col-md-3">
                    <DashboardCard
                        titulo="Usuarios"
                        valor="25"
                        icono="👥"
                    />
                </div>

                <div className="col-md-3">
                    <DashboardCard
                        titulo="Locadores"
                        valor="127"
                        icono="📋"
                    />
                </div>

                <div className="col-md-3">
                    <DashboardCard
                        titulo="Asistencias"
                        valor="3450"
                        icono="🕒"
                    />
                </div>

                <div className="col-md-3">
                    <DashboardCard
                        titulo="Entregables"
                        valor="98"
                        icono="📄"
                    />
                </div>

            </div>

        </Layout>

    );
};

export default Dashboard;