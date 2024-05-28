<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package Understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();

//$container = get_theme_mod( 'understrap_container_type' );

?>

<div class="main_content_block main-container container-wrap" id="page-container-wrapper">

	
		<?php if ( is_front_page() ): ?>
		<?php 
			get_template_part( 'global-templates/home-hero' );
			get_template_part( 'global-templates/home-about' );
			
		?>
		<?php else: ?>
		<div class="page-headline subheader_excluded pt-4">
			<div class="w-container">
				<div class="headline_container">
					<h1 class="text-heading"><?php the_title(); ?></h1>
				</div>
			</div>
		</div>
		<?php endif; ?>
		<div class="w-container centered-content section-padding wrapper-full">

			

				<?php
				while ( have_posts() ) {
					the_post();
					get_template_part( 'loop-templates/content', 'page' );

					
				}
				?>

			

		</div><!-- .row -->

	

</div><!-- #page-wrapper -->

<?php
get_footer();
