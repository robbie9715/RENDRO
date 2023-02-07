import React from "react";
import { profiles_data } from "@/data/design-data";
import { DesignCard } from "@/widgets/cards";
export function Profiles(){
    return(
        <div>
            <div className="grid grid-cols-3 gap-3 overflow-x-auto">
                {profiles_data.map((item)=>(
                    < DesignCard
                    img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}
export default Profiles;