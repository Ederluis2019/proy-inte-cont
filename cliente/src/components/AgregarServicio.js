import {useForm} from "react-hook-form"

const AgregarServicio = () => {
  const {register, formState: { errors }, handleSubmit} = useForm()

    const customSubmit = (data) =>{
        console.log(data)
    }
    return (
        <form className="form-login" onSubmit={handleSubmit(customSubmit)} action="">
            <div className="Servicios">    
                <h1 className="tit-lis">CONTROL INGRESO VEHICULAR</h1>
            
                <div className="Info-fecha">
                    <label>Fecha Ingreso</label>
                    <input type="date" {...register("Fecha", { required: true })} 
                    aria-invalid={errors.Fecha ? "true" : "false"}  />
                    {errors.Fecha?.type === 'required' && <p role="alert">La fecha es requerida</p>}
                    
                    <label>Hora Ingreso</label>
                    <input type="time" {...register("Hora", { required: true })} 
                    aria-invalid={errors.Hora ? "true" : "false"}  />
                    {errors.Hora?.type === 'required' && <p role="alert">Ingrese la hora</p>}
                </div>
                
              

               
            </div>     
                <div className="info-general-envios">
                    <label>TIPO DE VEHICULO</label>
                    <input type="text" {...register("DireccionRecogida", { required: true })} 
                    aria-invalid={errors.DireccionRecogida ? "true" : "false"}  />
                    {errors.DireccionRecogida?.type === 'required' && <p role="alert">Direccion requerida</p>}
                    
                    <label>PLACA DEL VEHICULO</label>
                    <input type="text" {...register("CiudadRecogida", { required: true })} 
                    aria-invalid={errors.CiudadRecogida ? "true" : "false"}  />
                    {errors.CiudadRecogida?.type === 'required' && <p role="alert">Ciudad requerida</p>}

                    <label>COLOR DEL VEHICULO</label>
                    <input type="text" {...register("Nombre", { required: true })} 
                    aria-invalid={errors.Nombre ? "true" : "false"}  />
                    {errors.Nombre?.type === 'required' && <p role="alert">Nombre requerido</p>}

                    <label>PROPIETARIO DEL VEHICULO</label>
                    <input type="text" {...register("DireccionEntrega", { required: true })} 
                    aria-invalid={errors.DireccionEntrega ? "true" : "false"}  />
                    {errors.DireccionEntrega?.type === 'required' && <p role="alert">Direccion requerida</p>}

                    <label>OBSERVACIONES</label>
                    <input type="text" {...register("CiudadEntrega", { required: true })} 
                    aria-invalid={errors.CiudadEntrega ? "true" : "false"}  />
                    {errors.CiudadEntrega?.type === 'required' && <p role="alert">Ciudad requerida</p>}
            </div>
            
            <div className="Info-fecha">
                    <label>Fecha Salida</label>
                    <input type="date" {...register("Fecha", { required: true })} 
                    aria-invalid={errors.Fecha ? "true" : "false"}  />
                    {errors.Fecha?.type === 'required' && <p role="alert">La fecha es requerida</p>}
                    
                    <label>Hora Salida</label>
                    <input type="time" {...register("Hora", { required: true })} 
                    aria-invalid={errors.Hora ? "true" : "false"}  />
                    {errors.Hora?.type === 'required' && <p role="alert">Ingrese la hora</p>}
            </div>
            <div className="Delicado">
                    <label name="delicado">Pago Parqueo</label>
                    <input type="checkbox" {...register("Delicado", { required: true })} 
                    aria-invalid={errors.Delicado ? "true" : "false"}/>
                    <input type="checkbox" {...register("Delicado", { required: true })} 
                    aria-invalid={errors.Delicado ? "true" : "false"}  />
                    {errors.Si?.type === 'required' && <p role="alert">Requerido indicar si canceló</p>}
                
                </div>
                   
            <input className="inp-sumit" type="submit" value="Send" />
        </form>
    )
}
export default AgregarServicio;
