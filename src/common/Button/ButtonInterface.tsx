import { ReactProp } from "../ReactProp/ReactPropInterface";

interface ButtonProp extends ReactProp {
    text: string,
    clickHandler?: Function,
    type?: 'primary' | 'secondary',
    disabled?: boolean,
    node?: any,
    loader?: boolean
}

export type{
    ButtonProp
}