import { JsonItemInterface } from "../resources/jsonInterfaces"
import "./Item.css";

interface PropsType {
    item: JsonItemInterface;
}

export default function Item(props: PropsType): JSX.Element {
    return (
        <div className="item--container">
            <p>{props.item.name}</p>
            <p>{props.item.amount}</p>
        </div>
    )
}