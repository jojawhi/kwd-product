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
import Toggle from "./Toggle.jsx";

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
		materialsEnabled: attributes.materialsEnabled
			? attributes.materialsEnabled
			: true,
		materials: attributes.materials
			? attributes.materials
			: [{ piece: "", madeFrom: "" }],
		measurementsEnabled: attributes.measurementsEnabled
			? attributes.measurementsEnabled
			: true,
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
	const [priceEnabled, setPriceEnabled] = useState(true);
	// const [materialsEnabled, setMaterialsEnabled] = useState(true);
	// const [measurementsEnabled, setMeasurementsEnabled] = useState(true);

	useEffect(() => {
		setAttributes({
			description: formData.description,
			price: formData.price,
			materialsEnabled: formData.materialsEnabled,
			materials: formData.materials,
			measurementsEnabled: formData.measurementsEnabled,
			measurements: formData.measurements,
		});

		console.log("useEffect", attributes);
	}, [formData]);

	const clearPrice = () => {
		setFormData({ ...formData, price: "" });
	};

	// const clearMaterials = () => {
	// 	setFormData({ ...formData, materials: [{ piece: "", madeFrom: "" }] });
	// 	console.log("Materials cleared");
	// };

	// const clearMeasurements = () => {
	// 	setFormData({
	// 		...formData,
	// 		measurements: [
	// 			{
	// 				name: "Length:",
	// 				value: "",
	// 				unit: "cm",
	// 			},
	// 			{
	// 				name: "Width:",
	// 				value: "",
	// 				unit: "cm",
	// 			},
	// 			{
	// 				name: "Height:",
	// 				value: "",
	// 				unit: "cm",
	// 			},
	// 			{
	// 				name: "Depth:",
	// 				value: "",
	// 				unit: "cm",
	// 			},
	// 		],
	// 	});

	// 	console.log("Measurements cleared");
	// };

	const togglePrice = () => {
		if (priceEnabled) {
			clearPrice();
		}

		setPriceEnabled((state) => !state);
	};

	const toggleMaterials = () => {
		if (formData.materialsEnabled === true) {
			// clearMaterials();
			setFormData({
				...formData,
				materialsEnabled: false,
				materials: [{ piece: "", madeFrom: "" }],
			});
			console.log("Materials cleared");
		} else {
			setFormData({ ...formData, materialsEnabled: true });
		}

		// setMaterialsEnabled((state) => !state);
		// setFormData({ ...formData, materialsEnabled: materialsEnabled });
	};

	const toggleMeasurements = () => {
		if (formData.measurementsEnabled === true) {
			// clearMeasurements();
			setFormData({
				...formData,
				measurementsEnabled: false,
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
			});

			console.log("Measurements cleared");
		} else {
			setFormData({ ...formData, measurementsEnabled: true });
		}

		// setMeasurementsEnabled((state) => !state);
		// setFormData({ ...formData, measurementsEnabled: measurementsEnabled });
	};

	const addPiece = () => {
		// Logic fix to add [...] around formData.materials to prevent mutation: https://github.com/WordPress/gutenberg/issues/7238

		const newMaterials = [...formData.materials];

		console.log("Mutation1:", newMaterials === formData.materials);

		newMaterials.push({ piece: "", madeFrom: "" });

		setFormData({ ...formData, materials: newMaterials });
	};

	const removePiece = (event, index) => {
		let newMaterials = [...formData.materials];

		newMaterials.splice(index, 1);

		setFormData({ ...formData, materials: newMaterials });
	};

	const handleDescriptionChange = (content) => {
		if (content) {
			setFormData({
				...formData,
				description: content,
			});
		} else {
			return;
		}
	};

	const handlePriceChange = (content) => {
		if (content) {
			setFormData({
				...formData,
				price: content,
			});
		} else {
			return;
		}
	};

	const handleMaterialPieceChange = (value, index) => {
		const newMaterials = [...formData.materials];

		console.log("Mutation:", newMaterials === formData.materials);

		if (value) {
			newMaterials[index].piece = value;

			setFormData({
				...formData,
				materials: newMaterials,
			});
		} else {
			return;
		}
	};

	const handleMaterialMadeFromChange = (value, index) => {
		const newMaterials = [...formData.materials];

		console.log("Mutation:", newMaterials === formData.materials);

		if (value) {
			newMaterials[index].madeFrom = value;

			setFormData({
				...formData,
				materials: newMaterials,
			});
		} else {
			return;
		}
	};

	const handleMeasurementChange = (value, index) => {
		const newMeasurements = [...formData.measurements];

		console.log("Mutation:", newMeasurements === formData.measurements);

		if (value) {
			newMeasurements[index].value = value;

			setFormData({ ...formData, measurements: newMeasurements });
		} else {
			return;
		}
	};

	const handleUnitChange = (event, index) => {
		const newMeasurements = [...formData.measurements];

		if (event) {
			const { value } = event.target;

			newMeasurements[index].unit = value;

			setFormData({ ...formData, measurements: newMeasurements });
		}
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
				<div>
					<div class="kwd-flex-row">
						<h2>Price: </h2>
						<Toggle
							toggleOnClick={() => togglePrice()}
							disabled={priceEnabled}
						/>
					</div>

					{priceEnabled ? (
						<div className="kwd-flex-row">
							<p className="kwd-edit-input-label">$</p>
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
					) : (
						<p>
							Available for <a href="/contact">special order</a>
						</p>
					)}
				</div>
			</div>
			<div class="kwd-product-section-container">
				<div class="kwd-edit-product-specs-container">
					<div className="kwd-flex-column">
						<div className="kwd-flex-row">
							<h2>Materials</h2>
							<Toggle
								toggleOnClick={() => toggleMaterials()}
								disabled={formData.materialsEnabled}
							/>
						</div>
						{formData.materialsEnabled === true ? (
							<div>
								<div className="kwd-edit-materials-grid">
									<h3>Piece</h3>
									<h3>Material</h3>
								</div>
								{formData.materials.map((material, index) => {
									return (
										<div key={index} className="kwd-edit-materials-grid">
											<RichText
												className="kwd-edit-input kwd-edit-mats-piece"
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
												className="kwd-edit-input kwd-edit-mats-made-from"
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
						) : (
							<p>Materials disabled.</p>
						)}
					</div>

					<div className="kwd-product-info-container">
						<div className="kwd-flex-row">
							<h2>Measurements</h2>
							<Toggle
								toggleOnClick={() => toggleMeasurements()}
								disabled={formData.measurementsEnabled}
							/>
						</div>
						{formData.measurementsEnabled === true ? (
							<div>
								{formData.measurements.map((measurement, index) => {
									return (
										<div key={index} className="kwd-edit-measurement-grid">
											<p
												htmlFor={measurement.name}
												className="kwd-edit-input-label kwd-edit-measurement-name"
											>
												{measurement.name}
											</p>
											<div className="kwd-edit-measurement-subgrid">
												<RichText
													className="kwd-edit-input kwd-edit-measurement-value"
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
													className="kwd-edit-select"
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
						) : (
							<p>Measurements disabled.</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
