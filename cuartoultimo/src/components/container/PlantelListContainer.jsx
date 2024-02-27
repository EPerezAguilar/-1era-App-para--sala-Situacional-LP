import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import GetInfor from "../PedirDatos/PedirDatos";
import PlantelesList from "./PlantelesList";


const PlantelListContainer = () =>{

    const [planteles, setPlanteles] = useState([]);
    console.log(planteles)

    
    useEffect(() => {
        GetInfor()
                .then((resp) => {
                    setPlanteles(resp);
                    
                })
    }, [])
    
    return(

        <div>
            <PlantelesList planteles={planteles} />
            {/* este producto que pasamos como prop es el de la variable */}
        </div>

    )
}

export default PlantelListContainer