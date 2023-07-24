import React, { createContext } from "react";
import Button from "../button/Button";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct as action, updateproduct } from "../../store/action";
import { instance } from "../../api/config";

const Card = ({ data, key }: any) => {
	const dispath = useDispatch();
	const onHandleClick = (id: any) => {
		instance.delete("/products/" + id);
		dispath(action(id));
	};

	return (
		<tr className="border" key={key}>
			<td className="border">{data.id}</td>
			<td className="border">{data.name}</td>
			<td className="border">{data.price}</td>
			<td className="border">
				<Button name={"Remove"} onHandleClick={onHandleClick} product={data.id} />
				<button
					onClick={() => {
						instance.put("/products/" + data.id, {
							...data,
							name: data.name + "update",
						});
						dispath(
							updateproduct({
								...data,
								name: data.name + "update",
							})
						);
					}}
				>
					update
				</button>
			</td>
		</tr>
	);
};

export default Card;
