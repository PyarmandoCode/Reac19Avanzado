import React from "react";
import { FixedSizeList as List } from "react-window";

const MyVirtualList:React.FC = () =>{
    const items = Array.from({length:1000},(_,i) =>`Item ${i+1}`)

    return (
        <div>
            <h1>Lista Virtualizada</h1>
            <List
              height={400} //Altura contenedor //400 / 35 = 11
              itemCount={items.length} //Cantidad total de elementos
              itemSize={35}
              width={300}
             >
                {({index,style}) => (
                    <div style={style} className="border-b p-2 bg-white">
                      {items[index]}
                    </div>
                )}
            </List>
        </div>
    )
}
export default MyVirtualList