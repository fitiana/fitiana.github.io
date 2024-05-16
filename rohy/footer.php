<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$container = get_theme_mod( 'understrap_container_type' );
?>



<div class="site-footer custom-footer " id="wrapper-footer">

	<div class="top-footer">
		<div class="w-container">
			<div class="footer-sidebar d-flex justify-content-between">
				<div class="footer-column site-footer_item">
					<h4>ROHY</h4>
					<div class="address">
					</div>
					<div class="phone-email">
					</div>
				</div>
				<div class="footer-column site-footer_item">
					<?php get_template_part( 'sidebar-templates/sidebar', 'footerfull' ); ?>
				</div>
			</div>
		</div>

	</div>
	<div class="footer-bottom footer-copyright">
		<div class="w-container footer-wrapper container-fluid footer-wrapper centered-content">
			<div class="row footer-content position-relative">
				<div class="text_copyright ">
					<p class="mb-0">Copyright © 2024</p>
				</div>
				
			</div>

		</div>
	</div>

	

</div><!-- #site-footer -->

<?php // Closing div#page from header.php. ?>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>

