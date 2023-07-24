import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { setInput as action } from "../../store/action";
import { instance } from "../../api/config";

const Form = () => {
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState("");
	const onChangeinput = (e: any) => {
		setInputValue(e.target.value);
	};

	const onHandleSubmit = (e: any) => {
		e.preventDefault();
		const newProduct = {
			id: Math.random(),
			name: inputValue,
			price: 1000,
		};
		instance.post("/products", newProduct);
		dispatch(action(newProduct));
		setInputValue("");
	};

	return (
		<div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
			<form onSubmit={onHandleSubmit}>
				<input className="border py-2 pr-2" type="text" onChange={onChangeinput} />
				<button className="border bg-green-500">Add</button>
			</form>
		</div>
	);
};

export default Form;
