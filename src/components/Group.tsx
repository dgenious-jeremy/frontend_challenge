import { JsonGroupInterface, JsonItemInterface } from "../resources/jsonInterfaces";
import Item from "./Item";
import "./Group.css";

interface PropsType {
    group: JsonGroupInterface;
}

export default function Group(props: PropsType): JSX.Element {
    return (
        <div className="group--container">
            <p>{props.group.name}</p>

            {
                props.group.items.map((item: JsonItemInterface): JSX.Element => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }

        </div>
    )
}