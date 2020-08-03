import React from "react";
import {RolesContext} from "./RolesContext";

export const RolesState=({children})=>{
    return(
        <RolesContext.Provider>
            {children}
        </RolesContext.Provider>
    )
}