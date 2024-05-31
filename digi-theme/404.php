<?php
/**
 * @package nasatheme
 */
get_header(); ?>

<div  class="container-wrap">
    <div class="row">
        <div id="content" class="large-12 left columns" role="main">
            <article id="post-0" class="post error404 not-found text-center">
                <header class="entry-header">
                    <img src="<?php echo DIGI_THEME_URI.'/assets/images/404.png'; ?>" />
                    <h1 class="entry-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'digi-theme' ); ?></h1>
                </header><!-- .entry-header -->
                <div class="entry-content">
                    <p><?php esc_html_e( 'Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.', 'digi-theme' ); ?></p>
                    <?php get_search_form(); ?>
                    <a class="button medium" href="<?php echo esc_url(home_url('/'));?>"><?php esc_html_e('GO TO HOME','digi-theme');?></a>
                </div>
            </article>
        </div>
    </div>
</div>

<?php
get_footer();