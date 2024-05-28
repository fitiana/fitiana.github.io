<?php
/**
 * Cross-sells
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 4.4.0
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

if ($cross_sells) :
    global $nasa_opt;
    $_delay = 0;
    $_delay_item = (isset($nasa_opt['delay_overlay']) && (int) $nasa_opt['delay_overlay']) ? (int) $nasa_opt['delay_overlay'] : 100;
    
    $heading = apply_filters('woocommerce_product_cross_sells_products_heading', esc_html__('You may be interested in&hellip;', 'digi-theme'));
    ?>
    <div<?php /* class="cross-sells" */ ?>>
        <?php if ($heading) : ?>
            <div class="title-block">
                <h5 class="heading-title">
                    <span><?php echo $heading; ?></span>
                </h5>
                <div class="nasa-hr medium"></div>
            </div>
        <?php endif; ?>
        <?php //woocommerce_product_loop_start(); ?>
        <ul class="products grid large-block-grid-4 small-block-grid-2">
            <?php
            foreach ($cross_sells as $cross_sell) :
                $post_object = get_post($cross_sell->get_id());
                setup_postdata($GLOBALS['post'] = & $post_object);
                wc_get_template('content-product.php', array(
                    'is_deals' => false,
                    '_delay' => $_delay,
                    'wrapper' => 'li'
                ));
                $_delay += $_delay_item;
            endforeach; // end of the loop. 
            ?>
        </ul>
        <?php //woocommerce_product_loop_end(); ?>
    </div>
    <?php
endif;

wp_reset_postdata();
