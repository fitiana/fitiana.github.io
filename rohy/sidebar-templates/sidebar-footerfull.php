<?php
/**
 * Sidebar setup for footer full
 *
 * @package Understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! is_active_sidebar( 'footerfull' ) ) {
	return;
}

$container = get_theme_mod( 'understrap_container_type' );
?>

<!-- ******************* The Footer Full-width Widget Area ******************* -->


		<div class="row_form">

			<?php dynamic_sidebar( 'footerfull' ); ?>

		</div>

