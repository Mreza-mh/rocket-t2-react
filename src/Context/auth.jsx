import { createContext } from "react";


export const Authcontext = createContext();

export function useauth() {
    return React.useContext(Authcontext);
}