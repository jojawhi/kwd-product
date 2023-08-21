import { useState } from "@wordpress/element";

const Toggle = ({ toggleOnClick = () => {}, disabled }) => {
	const [toggleOn, setToggleOn] = useState(true);

	const handleToggle = () => {
		setToggleOn((state) => !state);
	};

	return (
		<label className={`kwd-toggle`}>
			<input
				className="kwd-toggle-input"
				type="checkbox"
				checked={disabled}
				onChange={() => toggleOnClick()}
			></input>
			<span className={`kwd-toggle-button`}></span>
		</label>
	);
};

export default Toggle;
