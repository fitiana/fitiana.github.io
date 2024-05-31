<?php
/*
  Template name: Right sidebar
 */

get_header();
digi_get_breadcrumb();

if (has_excerpt()) : ?>
    <div class="page-header">
        <?php the_excerpt(); ?>
    </div>
<?php endif; ?>

<div class="container-wrap page-right-sidebar">
    <div class="row">
        
        <div id="content" class="large-9 left columns" role="main">
            <div class="page-inner">
                <?php
                while (have_posts()) :
                    the_post();
                    get_template_part('content', 'page');
                    
                    if (comments_open() || '0' != get_comments_number()) :
                        comments_template();
                    endif;
                endwhile;
                ?>
            </div>
        </div>

        <div class="large-3 columns right col-sidebar">
            <?php get_sidebar(); ?>
        </div>

    </div>
</div>

<?php
get_footer();
