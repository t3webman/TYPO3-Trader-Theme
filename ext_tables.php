<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

/***************
 * Include TypoScript
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Trader Theme');

/***************
 * Register PageTSConfig Files
*/
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
	'trader_theme',
	'Configuration/PageTSConfig/Flag.ts',
	'Set the default language label and flag to english');