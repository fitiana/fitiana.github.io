<?php
/**
 * Template Name: Home Page
 *
 *
 * @package Understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();


if ( is_front_page() ) {
	get_template_part( 'global-templates/hero' );
}
?>

<div class="pageid">
	<div class="section-inner-wrap">
		<div class="section-title">
			<h2 class="title mb-4">Notre vision</h2>
		</div>	
	</div>	
</div>

<?php
get_footer();
