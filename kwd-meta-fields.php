<?php

function kwd_meta_fields()
{
  $fields_array = apply_filters('kwd_register_fields', []);
  foreach ($fields_array as $field) {
    if (!$field['post_type'] || !post_type_exists($field['post_type']) || !$field['meta_key'] || !is_string($field['meta_key'])) {
      return;
    }

    register_post_meta($field['post_type'], $field['meta_key'], [
      'type'          => $field['type'] ?? 'string',
      'single'        => $field['single'] ?? 'string',
      'default'       => $field['default'] ?? '',
      'show_in_rest'  => $field['show_in_rest'] ?? true,
      'control'       => $field['control'] ?? 'text'
    ]);
  }
}
