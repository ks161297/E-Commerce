
 
export default function Footer2() {
    return (
        <footer className="border-top footer text-muted">
            <div className="container-fluid p-0">
                <div className="row text-left">
                    <div className="col-md-5 col-sm-5">
                        <p className=" text-white">Clínica: Av.Miraflores 2356</p>
                        <p className=" text-white">2854512 / 995458745</p>
                        <p className="pt-4  text-white">Copyright ©2021 Clínica Veterinaria Puppies Pet | Todos los derechos
                            Reservados
                        </p>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <h4 className="text-light text-white">Suscribete</h4>
                        <p className=" text-white">Recibe nuestras ultimas novedades</p>
                        <p className=" text-white">Correo Electrónico:</p>
                        <form className="form-inline">
                            <div Name="col pl-0">
                                <div className="input-group pr-5">
                                    <input type="text" className="form-control bg-dark text-white"
                                        id="inlineFormInputGroupUsername2" placeholder="Email"/>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h4 className="text-light">Síguenos</h4>
                        <div className="column text-light">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
