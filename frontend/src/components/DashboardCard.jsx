const DashboardCard = ({
                           titulo,
                           valor,
                           icono
                       }) => {

    return (

        <div className="card shadow-sm h-100">

            <div className="card-body">

                <div className="d-flex justify-content-between">

                    <div>

                        <h6 className="text-secondary">
                            {titulo}
                        </h6>

                        <h2>
                            {valor}
                        </h2>

                    </div>

                    <div
                        style={{
                            fontSize: "2rem"
                        }}
                    >
                        {icono}
                    </div>

                </div>

            </div>

        </div>

    );
};

export default DashboardCard;