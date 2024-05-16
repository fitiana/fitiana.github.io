<?php
/**
 * The header for our theme
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$bootstrap_version = get_theme_mod( 'understrap_bootstrap_version', 'bootstrap4' );
$navbar_type       = get_theme_mod( 'understrap_navbar_type', 'collapse' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> <?php understrap_body_attributes(); ?>>
<?php do_action( 'wp_body_open' ); ?>
<div class="site" id="page">

	<!-- ******************* The Navbar Area ******************* -->
	<!-- *
	<header id="wrapper-navbar">

		<a class="skip-link <?php echo understrap_get_screen_reader_class( true ); ?>" href="#content">
			<?php esc_html_e( 'Skip to content', 'understrap' ); ?>
		</a>

		<?php //get_template_part( 'global-templates/navbar', $navbar_type . '-' . $bootstrap_version ); ?>

	</header> -->
	<!-- #wrapper-navbar -->
	<!-- ******************* The Navbar Area ******************* -->
	<header id="header-sticky" class="main-header header-fixed clearfix">
                <div class="container-wrapper header-layout inner-wrapper header-sticky">
                    <div class="header-wrap menu_nav justify_content_around">
						<div class="site-header-logo nav-logo header-logo">
                            <a class="navbar-logo" rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="Rohy" itemprop="url">
                                <img class="header-logo-img logo-default img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/img/logo-rohy.png" alt="Rohy">
                            </a>
                        </div>

						<!-- The WordPress Menu goes here -->
                        <div class="nav-menus-wrapper nav_active menu">
                            <?php wp_nav_menu(
                                array(
                                    'theme_location'  => 'primary',
                                    'container_class' => 'navbar_wrap',
                                    'container_id'    => 'navbarNavDropdown',
                                    'menu_class'      => 'navigation_menu',
                                    'fallback_cb'     => '',
                                    'menu_id'         => 'main-menu',
                                    'depth'           => 2,
                                    'walker'          => new Understrap_WP_Bootstrap_Navwalker(),
                                )
                            ); ?>
                            
                            
                           
                        </div>
						<!-- end Menu  -->
						<div class="menu_toggle">
							<a href="javascript:void(0)" class="mobilemenu-toggle search-form-wrapper cs-toggle_active">
								<i class="far fa-bars"></i>
							</a>
						</div>

					</div>
				</div>
	</header><!-- #main-header -->
