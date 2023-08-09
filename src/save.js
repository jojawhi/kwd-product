/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

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
			<div style={{ display: "flex", flexDirection: "column" }}>
				<h3>Materials</h3>
				<div style={{ display: "flex" }}>
					<h3>Piece</h3>
					<h3>Material</h3>
				</div>
				{attributes.materials
					? attributes.materials.map((material, index) => {
							return (
								<div key={index} style={{ display: "flex", gap: "1rem" }}>
									<RichText.Content tagName="p" value={material.piece} />
									<RichText.Content tagName="p" value={material.madeFrom} />
								</div>
							);
					  })
					: ""}
			</div>
		</div>
	);
}
