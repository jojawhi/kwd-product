<?php

add_filter('kwd_register_fields', 'kwd_post_fields');

function kwd_post_fields($fields_array)
{
  $fields_array[] = [
    'meta_key'  => 'description',
  ];

  $fields_array[] = [
    'meta_key'  => 'price',
    'type'      => 'number',
    'default'   => 9999,
  ];

  $fields_array[] = [
    'meta_key'      => 'materials',
    'control'       => 'repeater',
    'type'          => 'array',
    'default'       => [],
    'show_in_rest'  => true
  ];
}
