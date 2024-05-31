<?php
/**
 * Custom Product image
 *
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 7.8.0
 */
global $product;

$product_id = $product->get_id();
$post_thumbnail_id = $product->get_image_id();

$attachment_ids = $product->get_gallery_image_ids();
$data_rel = '';

$image_size = apply_filters('woocommerce_gallery_image_size', 'woocommerce_single');
$full_size = apply_filters('woocommerce_gallery_full_size', apply_filters('woocommerce_product_thumbnails_large_size', 'full'));

$image_title = esc_attr(get_the_title($post_thumbnail_id));
$alt_text = trim(wp_strip_all_tags(get_post_meta($post_thumbnail_id, '_wp_attachment_image_alt', true)));

$image_full = wp_get_attachment_image_src($post_thumbnail_id, $full_size);
$image_link = isset($image_full[0]) ? $image_full[0] : wp_get_attachment_url($post_thumbnail_id);
$image_large = wp_get_attachment_image_src($post_thumbnail_id, $image_size);
$src_large = isset($image_large[0]) ? $image_large[0] : $image_link;

$image = wp_get_attachment_image(
    $post_thumbnail_id,
    $image_size,
    false,
    apply_filters(
        'woocommerce_gallery_image_html_attachment_image_params',
        array(
            'title'                   => _wp_specialchars(get_post_field('post_title', $post_thumbnail_id), ENT_QUOTES, 'UTF-8', true),
            'alt'                     => $alt_text,
            'data-caption'            => _wp_specialchars(get_post_field('post_excerpt', $post_thumbnail_id), ENT_QUOTES, 'UTF-8', true),
            'data-src'                => esc_url($image_full[0]),
            'data-large_image'        => esc_url($image_full[0]),
            'data-large_image_width'  => esc_attr($image_full[1]),
            'data-large_image_height' => esc_attr($image_full[2]),
            'class'                   => 'wp-post-image skip-lazy attachment-shop_single size-shop_single',
        ),
        $post_thumbnail_id,
        $image_size,
        true
    )
);

$attachment_count = count($attachment_ids);

$wrapper_classes = apply_filters(
    'woocommerce_single_product_image_gallery_classes',
    array(
        'woocommerce-product-gallery',
        'woocommerce-product-gallery--' . ($post_thumbnail_id ? 'with-images' : 'without-images'),
        'images',
    )
);
?>
<div class="<?php echo esc_attr(implode(' ', array_map('sanitize_html_class', $wrapper_classes))); ?>">
    <div class="product-images-slider images-popups-gallery">
        <div class="main-images owl-carousel">
            <?php if (has_post_thumbnail()) : ?>
                <div class="easyzoom first">
                    <?php
                    echo apply_filters(
                        'woocommerce_single_product_image_thumbnail_html',
                        sprintf(
                            '<a href="%s" class="woocommerce-main-image product-image woocommerce-product-gallery__image" data-o_href="%s" data-full_href="%s" title="%s">%s</a>',
                            $image_link,
                            $src_large,
                            $image_link,
                            $image_title,
                            $image
                        ),
                        $post_thumbnail_id
                    ); ?>
                </div>
            <?php else : ?>
                <div class="easyzoom">
                    <?php echo apply_filters(
                        'woocommerce_single_product_image_thumbnail_html',
                        sprintf(
                            '<div class="woocommerce-main-image product-image woocommerce-product-gallery__image woocommerce-product-gallery__image--placeholder"><img src="%s" alt="%s" class="wp-post-image" /></div>',
                                esc_url(wc_placeholder_img_src('woocommerce_single')),
                                esc_html__('Awaiting product image', 'digi-theme')
                            ),
                        $post_thumbnail_id
                    ); ?>
                </div>
            <?php endif; ?>
            <?php
            $_i = 0;
            if ($attachment_count > 0) :
                foreach ($attachment_ids as $attachment_id) :
                    $_i++;
                    ?>
                    <div class="easyzoom">
                        <?php
                        $image_title = esc_attr(get_the_title($attachment_id));
                        $alt_text = trim(wp_strip_all_tags(get_post_meta($attachment_id, '_wp_attachment_image_alt', true)));

                        $image_full = wp_get_attachment_image_src($attachment_id, $full_size);
                        $image_link = isset($image_full[0]) ? $image_full[0] : wp_get_attachment_url($attachment_id);

                        $image = wp_get_attachment_image(
                            $attachment_id,
                            $image_size,
                            false,
                            apply_filters(
                                'woocommerce_gallery_image_html_attachment_image_params',
                                array(
                                    'title'                   => _wp_specialchars(get_post_field('post_title', $attachment_id), ENT_QUOTES, 'UTF-8', true),
                                    'alt'                     => $alt_text,
                                    'data-caption'            => _wp_specialchars(get_post_field('post_excerpt', $attachment_id), ENT_QUOTES, 'UTF-8', true),
                                    'data-src'                => esc_url($image_full[0]),
                                    'data-large_image'        => esc_url($image_full[0]),
                                    'data-large_image_width'  => esc_attr($image_full[1]),
                                    'data-large_image_height' => esc_attr($image_full[2]),
                                    'class'                   => 'skip-lazy attachment-shop_single size-shop_single',
                                ),
                                $post_thumbnail_id,
                                $image_size,
                                false
                            )
                        );

                        $image = $image ? $image : wc_placeholder_img('woocommerce_single');

                        echo sprintf(
                            '<a href="%s" class="woocommerce-additional-image product-image" title="%s">%s</a>',
                            $image_link,
                            $image_title,
                            $image
                        );
                        ?>
                    </div>
                    <?php
                endforeach;
            endif;
            ?>
        </div>
        <div class="product-image-btn">
            <a class="product-lightbox-btn tip-top" data-tip="<?php esc_html_e('Zoom', 'digi-theme'); ?>" href="<?php echo esc_url_raw($image_link); ?>"></a>
            <?php do_action('product_video_btn'); ?>
        </div>
    </div>
    <?php do_action('woocommerce_product_thumbnails'); ?>
</div>