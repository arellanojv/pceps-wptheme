<?php

/***************************************************************************
*
*	ProjectTheme - copyright (c) - sitemile.com
*	The only project theme for wordpress on the world wide web.
*
*	Coder: Andrei Dragos Saioc
*	Email: sitemile[at]sitemile.com | andreisaioc[at]gmail.com
*	More info about the theme here: http://sitemile.com/products/wordpress-project-freelancer-theme/
*	since v1.2.5.3
*
***************************************************************************/

function ProjectTheme_display_all_prjs_page_disp()
{

		global $current_user;
	$current_user = wp_get_current_user();
	$uid = $current_user->ID;

	?>


<div class="row">

	<div  class="float_right col-xs-12 col-sm-8 col-md-8 col-lg-8" >

                    <?php

					global $wp_query;
					$query_vars = $wp_query->query_vars;

					$posts_per_page = 8;
					$posts_per_page = apply_filters('ProjectTheme_all_projects_page_per_page', $posts_per_page);

					$args = array('post_type' => 'project', 'paged' => $query_vars['paged'] , 'posts_per_page' => $posts_per_page);
					$my_query = new WP_Query( $args );

					if($my_query->have_posts()):
					while ( $my_query->have_posts() ) : $my_query->the_post();

						ProjectTheme_get_post();

					endwhile;

						if(function_exists('wp_pagenavi')):
							wp_pagenavi( array( 'query' => $my_query ) );
						endif;

					else:
					_e('There are no projects posted.','ProjectTheme');

					endif;








					?>

                    </div>



      <!-- ################### -->

    <div   class="float_left col-xs-12 col-sm-4 col-md-4 col-lg-4">
    	<ul class="sidebar-ul">
        	 <?php dynamic_sidebar( 'other-page-area' ); ?>
        </ul>
    </div>

		    </div>

    <?php

}

?>
