/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	_experimentalGetEditorPostAttribute,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const defaultFormData = {
		description: "",
		price: "",
		materials: [{ piece: "", madeFrom: "" }],
		measurements: [
			{
				name: "Length:",
				value: "",
				unit: "cm",
			},
			{
				name: "Width:",
				value: "",
				unit: "cm",
			},
			{
				name: "Height:",
				value: "",
				unit: "cm",
			},
			{
				name: "Depth:",
				value: "",
				unit: "cm",
			},
		],
	};

	const [formData, setFormData] = useState(defaultFormData);

	// const clearFormData = setFormData(defaultFormData);

	const addPiece = () => {
		const materials = formData.materials;

		materials.push({ piece: "", madeFrom: "" });

		setFormData({ ...formData, materials });
	};

	const removePiece = (event, index) => {
		let materials = formData.materials;

		materials.splice(index, 1);

		// const materials = formData.materials.filter((_, i) => {
		// 	i !== index;
		// });

		// console.log("After remove: ", materials);

		setFormData({ ...formData, materials });
	};

	const handleTextChange = (event) => {
		const { value, name } = event.target;

		if (value !== "" || value !== null) {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	const handleMaterialChange = (event, index) => {
		const { value, name } = event.target;

		const materials = formData.materials;

		if (name.includes("piece")) {
			materials[index].piece = value;
			setFormData({
				...formData,
				materials,
			});
		} else if (name.includes("madeFrom")) {
			materials[index].madeFrom = value;
			setFormData({
				...formData,
				materials,
			});
		}

		console.log("Material changed");
	};

	const handleMeasurementChange = (event, index) => {
		const { value, name } = event.target;

		const measurements = formData.measurements;

		if (name.includes("unit")) {
			measurements[index].unit = value;
			setFormData({ ...formData, measurements });
			console.log("Unit change: ", formData.measurements);
		} else {
			measurements[index].value = value;
			setFormData({ ...formData, measurements });
			console.log("Measurement change: ", formData.measurements);
		}

		console.log("Measurement changed");
	};

	return (
		<div {...useBlockProps()}>
			<div>
				<label htmlFor="description">Description:</label>
				<textarea
					name="description"
					id="description"
					value={formData.description}
					placeholder="Enter a description..."
					onChange={(e) => handleTextChange(e)}
				/>
			</div>
			<div>
				<label htmlFor="price">$</label>
				<input
					type="number"
					name="price"
					id="price"
					value={formData.price}
					placeholder="9999"
					onChange={(e) => handleTextChange(e)}
				/>
			</div>
			<div>
				<h3>Materials</h3>
				<div style={{ display: "flex" }}>
					<h3>Piece</h3>
					<h3>Material</h3>
				</div>
				{formData.materials.map((material, index) => {
					return (
						<div key={index}>
							<input
								type="text"
								id={`piece-${index}`}
								name={`piece-${index}`}
								value={material.piece}
								placeholder="Piece name"
								onChange={(e) => handleMaterialChange(e, index)}
							/>
							<input
								type="text"
								id={`madeFrom-${index}`}
								name={`madeFrom-${index}`}
								value={material.madeFrom}
								placeholder="Made from..."
								onChange={(e) => handleMaterialChange(e, index)}
							/>
							<button onClick={(e) => removePiece(e, index)}>- Remove</button>
						</div>
					);
				})}
				<button onClick={addPiece}>+ Add Part</button>
			</div>
			<div>
				<h3>Measurements</h3>
				{formData.measurements.map((measurement, index) => {
					return (
						<div key={index}>
							<label htmlFor={measurement.name}>{measurement.name}</label>
							<input
								type="number"
								id={`measurement-${index}`}
								name={measurement.name}
								value={measurement.value}
								placeholder="0"
								onChange={(e) => handleMeasurementChange(e, index)}
							/>
							<select
								name={`${measurement.name}-unit`}
								id={`${measurement.name}-unit`}
								onChange={(e) => handleMeasurementChange(e, index)}
							>
								<option value="cm" selected>
									cm
								</option>
								<option value="in">in</option>
								<option value="m">m</option>
								<option value="ft">ft</option>
							</select>
						</div>
					);
				})}
			</div>
		</div>
	);
}
