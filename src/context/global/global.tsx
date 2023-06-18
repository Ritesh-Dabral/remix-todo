import {createContext} from 'react'
import { IApp } from '../../common/Interface/GlobalInterface'


export const AppContext = createContext<IApp>({
    user:{
        email:'',
        token:''
    }
}) 