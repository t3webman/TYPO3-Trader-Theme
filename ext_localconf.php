<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

/***************
 * Page TsConfig & Setup
 */

 # Set RTE features
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:trader_theme/Configuration/PageTSConfig/RTE.ts">');

 # Set TCEFORM features
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:trader_theme/Configuration/PageTSConfig/TCEForm.ts">');