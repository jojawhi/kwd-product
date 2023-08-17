/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Dashicon } from "@wordpress/components";

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
	const blockProps = useBlockProps();

	const defaultFormData = {
		description: attributes.description ? attributes.description : "",
		price: attributes.price ? attributes.price : "",
		materials: attributes.materials
			? attributes.materials
			: [{ piece: "", madeFrom: "" }],
		measurements: attributes.measurements
			? attributes.measurements
			: [
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

	useEffect(() => {
		setAttributes({
			description: formData.description,
			price: formData.price,
			materials: formData.materials,
			measurements: formData.measurements,
		});

		console.log("useEffect", attributes);
	}, [formData]);
	// const clearFormData = setFormData(defaultFormData);

	const addPiece = () => {
		const newMaterials = formData.materials;

		newMaterials.push({ piece: "", madeFrom: "" });

		setFormData({ ...formData, materials: newMaterials });

		// setAttributes({ ...attributes, materials: formData.materials });
	};

	const removePiece = (event, index) => {
		let newMaterials = formData.materials;

		newMaterials.splice(index, 1);

		// console.log("After remove: ", materials);

		setFormData({ ...formData, materials: newMaterials });

		// setAttributes({ ...attributes, materials: formData.materials });
	};

	const handleDescriptionChange = (content) => {
		if (content) {
			setFormData({
				...formData,
				description: content,
			});

			// setAttributes({ ...attributes, description: formData.description });
		} else {
			return;
		}

		// console.log("Attributes: ", attributes);
	};

	const handlePriceChange = (content) => {
		if (content) {
			setFormData({
				...formData,
				price: content,
			});

			// setAttributes({ ...attributes, price: formData.price });
		} else {
			return;
		}

		// console.log("Attributes: ", attributes);
	};

	const handleMaterialPieceChange = (value, index) => {
		const materials = formData.materials;

		if (value) {
			materials[index].piece = value;

			setFormData({
				...formData,
				materials: materials,
			});

			// setAttributes({ ...attributes, materials: formData.materials });
		} else {
			return;
		}

		// console.log("Materials: ", attributes.materials);
	};

	const handleMaterialMadeFromChange = (value, index) => {
		const materials = formData.materials;

		if (value) {
			materials[index].madeFrom = value;

			setFormData({
				...formData,
				materials: materials,
			});

			// setAttributes({ ...attributes, materials: formData.materials });
		} else {
			return;
		}

		// console.log("Materials: ", attributes.materials);
	};

	const handleMeasurementChange = (value, index) => {
		const measurements = formData.measurements;

		if (value) {
			measurements[index].value = value;

			setFormData({ ...formData, measurements: measurements });

			// setAttributes({ ...attributes, measurements: formData.measurements });
		} else {
			return;
		}

		// console.log("Measurements: ", attributes.measurements);
	};

	const handleUnitChange = (event, index) => {
		const measurements = formData.measurements;

		if (event) {
			const { value } = event.target;

			measurements[index].unit = value;

			setFormData({ ...formData, measurements: measurements });

			// setAttributes({ ...attributes, measurements: formData.measurements });
		}

		// console.log("Measurements: ", attributes.measurements);
	};

	return (
		<div {...blockProps}>
			<div className="kwd-product-info-container">
				<h2>Description:</h2>
				<RichText
					className="kwd-edit-input"
					tagName="p"
					multiline="true"
					withoutInteractiveFormatting="true"
					name="description"
					id="description"
					value={formData.description}
					placeholder={__("Enter a description...")}
					onChange={(content) => handleDescriptionChange(content)}
				/>
			</div>
			<div className="kwd-product-info-container">
				<h2>Price: </h2>
				<div className="kwd-flex-row">
					<p>$</p>
					<RichText
						className="kwd-edit-input"
						tagName="p"
						withoutInteractiveFormatting="true"
						name="price"
						id="price"
						value={formData.price}
						placeholder="9999"
						onChange={(content) => handlePriceChange(content)}
					/>
				</div>
			</div>
			<div class="kwd-product-section-container">
				<h2>Specifications</h2>
				<div class="kwd-edit-product-specs-container">
					<div className="kwd-flex-column">
						<h2>Materials</h2>
						<div className="kwd-edit-materials-grid">
							<h3>Piece</h3>
							<h3>Material</h3>
						</div>
						{formData.materials.map((material, index) => {
							return (
								<div key={index} className="kwd-edit-materials-grid">
									<RichText
										className="kwd-edit-input"
										tagName="p"
										format="string"
										withoutInteractiveFormatting="true"
										id={`piece-${index}`}
										name={`piece-${index}`}
										value={material.piece}
										placeholder="Piece name"
										onChange={(content) =>
											handleMaterialPieceChange(content, index)
										}
									/>
									<RichText
										className="kwd-edit-input"
										tagName="p"
										withoutInteractiveFormatting="true"
										id={`madeFrom-${index}`}
										name={`madeFrom-${index}`}
										value={material.madeFrom}
										placeholder="Made from..."
										onChange={(content) =>
											handleMaterialMadeFromChange(content, index)
										}
									/>
									<button
										onClick={(e) => removePiece(e, index)}
										className="kwd-edit-remove-button"
									>
										<Dashicon icon="remove" />
									</button>
								</div>
							);
						})}
						<button onClick={addPiece} className="kwd-edit-add-part-button">
							+ Add Part
						</button>
					</div>
					<div className="kwd-product-info-container">
						<h2>Measurements</h2>
						{formData.measurements.map((measurement, index) => {
							return (
								<div key={index} className="kwd-edit-measurement-grid">
									<p htmlFor={measurement.name}>{measurement.name}</p>
									<div className="kwd-edit-measurement-subgrid">
										<RichText
											className="kwd-edit-input"
											tagName="p"
											withoutInteractiveFormatting="true"
											id={`measurement-${index}`}
											name={measurement.name}
											value={measurement.value}
											placeholder="0"
											onChange={(content) =>
												handleMeasurementChange(content, index)
											}
										/>
										<select
											name={`${measurement.name}-unit`}
											id={`${measurement.name}-unit`}
											onChange={(event) => handleUnitChange(event, index)}
											className="kwd-edit-input"
											value={measurement.unit}
										>
											<option value="cm">cm</option>
											<option value="in">in</option>
											<option value="m">m</option>
											<option value="ft">ft</option>
										</select>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
