import Items from "./Items";

const PlantelesList = ({planteles}) => {
    return (
        <div className="container">
            <h2 className="main-title">Productos</h2>
            <div className="productos">
                { 
                    planteles.length > 0 && 
                        planteles.map((plantel) => 
                            <Items 
                                key={producto.id} 
                                producto={producto}
                                ref={producto.ref}/>
                            ) 
                }
            </div>
                
        </div>
        
    );

}

export default PlantelesList;