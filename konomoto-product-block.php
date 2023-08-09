<?php

/**
 * Plugin Name:       Konomoto Product Block
 * Description:       Custom product block for Konomoto Wood Design
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Josh White
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       konomoto-product-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

// function kwd_product_render_callback($block_attributes, $content)
// {

// 	$price = $block_attributes['price'];


// 	return sprintf(
// 		'$%u',
// 		$price
// 	);
// }

function create_block_konomoto_product_block_init()
{
	register_block_type(__DIR__ . '/build');

	// register_block_type(__DIR__ . '/build', array(
	// 	'render_callback' => 'kwd_product_render_callback'
	// ));
}
add_action('init', 'create_block_konomoto_product_block_init');

function kwd_register_product_post_type()
{
	register_post_type(
		'product',
		array(
			'label' => 'Products',
			'public' => true,
			'show_in_rest' => true,
			'menu_icon' => 'dashicons-products',
			'menu_position' => 10,
			'rewrite' => array('slug' => 'gallery'),
			// 'template' => array(
			// 	array('core/gallery', array(
			// 		'align' => 'full'
			// 	)),
			// 	array('core/group', array(
			// 		'align' => 'full',
			// 		array(
			// 			array('core/post-title'),
			// 			array('core/paragraph', array(
			// 				'placeholder' => 'Enter a description'
			// 			)),
			// 		)
			// 	))

			// )
		)
	);
}

add_action('init', 'kwd_register_product_post_type');

// function kwd_product_register_meta_fields()
// {
// 	register_post_meta('product', 'price', array(
// 		'show_in_rest' => true,
// 		'single' => true,
// 		'type' => 'number'
// 	));

// 	register_post_meta('product', 'description', array(
// 		'show_in_rest' => true,
// 		'single' => true,
// 		'type' => 'string'
// 	));

// 	return register_meta
// }

// add_action('init', 'kwd_product_register_meta_fields');
