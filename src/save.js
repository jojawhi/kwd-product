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

	console.log("From Save: ", attributes);

	return (
		<div {...blockProps}>
			<div>
				<RichText.Content tagName="p" value={attributes.description} />
			</div>
			<div style={{ display: "flex" }}>
				<p>$</p>
				<RichText.Content tagName="p" value={attributes.price} />
			</div>
			<div className="kwd-specifications-container">
				<div style={{ display: "flex", flexDirection: "column" }}>
					<h2>Materials</h2>
					{attributes.materials
						? attributes.materials.map((material, index) => {
								return (
									<div key={index} className="kwd-materials-grid">
										<RichText.Content
											tagName="p"
											format="string"
											value={`${material.piece}:`}
										/>
										<RichText.Content tagName="p" value={material.madeFrom} />
									</div>
								);
						  })
						: ""}
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<h2>Measurements</h2>
					{attributes.measurements
						? attributes.measurements.map((measurement, index) => {
								if (measurement.value !== "") {
									return (
										<div key={index} style={{ display: "flex", gap: "1rem" }}>
											<p>{measurement.name}</p>
											<div className="kwd-measurements-grid">
												<RichText.Content
													tagName="p"
													value={measurement.value}
												/>
												<p>{measurement.unit}</p>
											</div>
										</div>
									);
								} else {
									return;
								}
						  })
						: null}
				</div>
			</div>
		</div>
	);
}
