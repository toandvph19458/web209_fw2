import React, { useEffect, useState } from "react";
import Card from "../cardproduct/card";
import "./list.module.css";
import Form from "../form";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../api/config";
import { getallproducts as action } from "../../store/action";
const List = () => {
	const [error, setError] = useState<null>(null);
	const dispath = useDispatch();
	const state: any = useSelector((state: any) => state);
	const [products, setproducts] = useState<any[any]>([]);
	useEffect(() => {
		(async () => {
			try {
				setproducts(await instance.get("/products"));
			} catch (error: any) {
				setError(error.message);
			}
		})();
	}, []);
	useEffect(() => {
		dispath(action(products));
	}, [products]);
	return (
		<>
			<Form />

			<div data-aos="fade-up" data-aos-anchor-placement="center-center">
				<table>
					<thead>
						<tr className="border">
							<td className="border">id</td>
							<td className="border">name</td>
							<td className="border">price</td>
							<td className="border">action</td>
						</tr>
					</thead>
					<tbody key={1}>
						{state.todo.map((item: any) => {
							return <Card key={item.id} data={item} />;
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default List;
