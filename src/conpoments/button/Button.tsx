import React from "react";

const Button = ({ name, product, onHandleClick }: any) => {
	const removeProduct = (id: any) => {
		onHandleClick(id);
	};
	return (
		<div>
			<button className="" onClick={() => removeProduct(product)}>
				{name}
			</button>
		</div>
	);
};

export default Button;
