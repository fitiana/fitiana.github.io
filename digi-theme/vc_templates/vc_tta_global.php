<?php
/**
 * Shortcode attributes
 * @var $atts
 * @var $content - shortcode content
 */

if (!defined('ABSPATH')) {
    die('-1');
}

$atts = vc_map_get_attributes($this->getShortcode(), $atts);
$this->resetVariables($atts, $content);
extract($atts);

$this->setGlobalTtaInfo();
$prepareContent = $this->getTemplateVariable('content');
require DIGI_THEME_PATH . '/vc_templates/tta_global_layout/' . $this->layout . '_layout.php';
