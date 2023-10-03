import React from "react";
import "./AdminButton.scss";

interface AdminButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	color?: string;
	disabled?: boolean;
	variant: "default" | "danger";
	type?: string;
	onClick?: () => void;
}

const AdminButton: React.FC<AdminButtonProps> = (props) => {
	if (props.variant === "danger") {
		return (
			<button
				className="button-container danger"
				onClick={props.onClick}
				disabled={props.disabled}
			>
				{props.children}
			</button>
		);
	}
	return (
		<button
			style={{ background: `${props.color}` }}
			className="button-container default"
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

AdminButton.defaultProps = {
	color: "#0077b6",
};

export default AdminButton;
