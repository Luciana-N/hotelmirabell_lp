import "../Formulario/Formulario.css";
import { useState } from 'react';

const Formulario = () => {

    const [formValues, setFormValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
    });

    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    // Función de cambios en los campos del Formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Función para el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del cliente:', formValues); // Lo que vemos en la consola
        setMostrarMensaje(true); // Mostrar el mensaje después de enviar el formulario
    };

    return (
        <section>
            <div className="container">
                <h2 className="text-center m-2 p-4" id="formularioTitulo">Reserva con nosotros</h2>
                
                <div className="imagenYForm row row-cols-md-2">
                    <div className="imagenDesayuno img-fluid"></div>

                    <form className="content formContainer" onSubmit={handleSubmit}>
                        <h3>Reservación</h3>

                        <label htmlFor="nombre" className="labelForm">Nombre:</label>
                        <input className="inputForm"
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formValues.nombre}
                            onChange={handleChange}
                            placeholder="Ingrese su nombre"
                            maxLength={10}
                            minLength={3}
                            required
                        />

                        <label htmlFor="apellido" className="labelForm">Apellido:</label>
                        <input className="inputForm"
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={formValues.apellido}
                            onChange={handleChange}
                            placeholder="Ingrese su apellido"
                            maxLength={10}
                            minLength={3}
                            required
                        />

                        <label htmlFor="email" className="labelForm">Correo electrónico:</label>
                        <input className="inputForm"
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder="Ingrese una dirección de correo valida"
                            required
                        />

                        <button type="submit" className="botonFormulario">Enviar</button>

                        {mostrarMensaje && (
                        <div className="mensajeExito">
                            <p>Datos enviados! <br></br>
                            Nos comunicaremos con usted en la brevedad.</p>
                        </div>
                    )}
                    </form>


                </div>
            </div>
        </section>
    );
};

export default Formulario;