<?php
/**
 * @see 	http://docs.woothemes.com/document/template-structure/
 * @author 	WooThemes
 * @package 	WooCommerce/Templates
 * @version     7.8.0
 */
defined('ABSPATH') || exit;

$label = !empty($args['product_name']) ? sprintf(esc_html__('%s quantity', 'digi-theme'), wp_strip_all_tags($args['product_name'])) : esc_html__('Quantity', 'digi-theme');

$classes = isset($classes) ? $classes : array('input-text', 'qty', 'text');
?>

<div class="quantity buttons_added">
    <?php
    /**
     * Hook to output something before the quantity input field.
     *
     * @since 7.2.0
     */
    do_action('woocommerce_before_quantity_input_field');
    ?>

    <label class="screen-reader-text hidden-tag" for="<?php echo esc_attr($input_id); ?>">
        <?php echo esc_attr($label); ?>
    </label>

    <a href="javascript:void(0)" class="plus"><i class="pe-7s-plus"></i></a>
    <input
        type="<?php echo esc_attr($type); ?>"
        <?php echo $readonly ? 'readonly="readonly"' : ''; ?>
        id="<?php echo esc_attr($input_id); ?>"
        class="<?php echo esc_attr(join(' ', (array) $classes)); ?>"
        name="<?php echo esc_attr($input_name); ?>"
        value="<?php echo esc_attr($input_value); ?>"
        aria-label="<?php esc_attr_e('Product quantity', 'digi-theme'); ?>"
        size="4"
        min="<?php echo esc_attr($min_value); ?>"
        max="<?php echo esc_attr(0 < $max_value ? $max_value : ''); ?>"
        <?php if (!$readonly): ?>
            step="<?php echo esc_attr($step); ?>"
            placeholder="<?php echo esc_attr($placeholder); ?>"
            inputmode="<?php echo esc_attr($inputmode); ?>"
            autocomplete="<?php echo esc_attr(isset($autocomplete) ? $autocomplete : 'on'); ?>"
        <?php endif; ?>
        />
    <a href="javascript:void(0)" class="minus"><i class="pe-7s-less"></i></a>

    <?php
    /**
     * Hook to output something after quantity input field
     *
     * @since 3.6.0
     */
    do_action('woocommerce_after_quantity_input_field');
    ?>
</div>
