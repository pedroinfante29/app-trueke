import axios from "axios";
import {User} from "@/interfaces/Users";

export const getUsers = async(): Promise<User[]> => {
    const response = await axios.get("https://appdesarrollo.co/proyectos/truekeApp/Api/Products/all/en");
    return response.data;
}