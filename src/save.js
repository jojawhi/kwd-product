/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./style.scss";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	// console.log("From Save: ", attributes);

	return (
		<div {...blockProps}>
			<div class="kwd-product-section-container">
				<RichText.Content tagName="p" value={attributes.description} />
			</div>
			{attributes.price.length > 1 ? (
				<div style={{ display: "flex" }}>
					<p className="kwd-price">$</p>
					<RichText.Content
						tagName="p"
						value={attributes.price}
						className="kwd-price"
					/>
				</div>
			) : (
				<p>
					Available for <a href="/contact">special order</a>
				</p>
			)}

			{attributes.materialsEnabled === true ||
			attributes.measurementsEnabled === true ? (
				<div class="kwd-product-section-container">
					<h2>Specifications</h2>
					<div className="kwd-product-specs-container">
						{attributes.materialsEnabled === true ? (
							<div style={{ display: "flex", flexDirection: "column" }}>
								<h3>Materials</h3>
								{attributes.materials
									? attributes.materials.map((material, index) => {
											return (
												<div key={index} className="kwd-materials-grid">
													<RichText.Content
														tagName="p"
														format="string"
														value={`${material.piece}:`}
														className="kwd-mats-piece"
													/>
													<RichText.Content
														tagName="p"
														value={material.madeFrom}
														className="kwd-mats-made-from"
													/>
												</div>
											);
									  })
									: ""}
							</div>
						) : null}

						{attributes.measurementsEnabled === true ? (
							<div style={{ display: "flex", flexDirection: "column" }}>
								<h3>Measurements</h3>
								{attributes.measurements.map((measurement, index) => {
									if (measurement.value !== "") {
										return (
											<div key={index} style={{ display: "flex", gap: "1rem" }}>
												<p className="kwd-measurement-name">
													{measurement.name}
												</p>
												<div className="kwd-measurements-grid">
													<RichText.Content
														tagName="p"
														value={measurement.value}
														className="kwd-measurement-value"
													/>
													<p className="kwd-measurement-unit">
														{measurement.unit}
													</p>
												</div>
											</div>
										);
									} else {
										return;
									}
								})}
							</div>
						) : null}
					</div>
				</div>
			) : null}
		</div>
	);
}
