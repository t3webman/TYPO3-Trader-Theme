#-------------------------------------------------------------------------------
#	Distribution Constants
#-------------------------------------------------------------------------------

# customsubcategory=general=Style Selection:
# customsubcategory=settings=Files Selection:
# customsubcategory=socials=Social Accounts:

trader_theme {
	view {
		# cat=trader_theme/general/file; type=string; label=Path to template root (FE)
		templateRootPath =
		# cat=trader_theme/general/file; type=string; label=Path to template partials (FE)
		partialRootPath =
		# cat=trader_theme/general/file; type=string; label=Path to template layouts (FE)
		layoutRootPath =
	}
	settings {
		# cat=trader_theme/settings/file/05; type=string; label=Path to CSS file
		cssFile = EXT:trader_theme/Resources/Public/Css/trader.css
		# cat=trader_theme/settings/file/10; type=string; label=Path to list dummy image
		noImage = EXT:trader_theme/Resources/Public/Images/no-photo.png
		# cat=trader_theme/settings/file/15; type=string; label=Path to detail dummy image
		noBackground = EXT:trader_theme/Resources/Public/Images/no-background.png
	}
	socials {
		# cat=trader_theme/socials/05; type=string; label=Main phone number:
		phone =
		# cat=trader_theme/socials/10; type=string; label=Email account:
		email =
		# cat=trader_theme/socials/15; type=string; label=Skype account:
		skype =
		# cat=trader_theme/socials/20; type=string; label=Facebook account:
		facebook =
		# cat=trader_theme/socials/25; type=string; label=Twitter account:
		twitter =
		# cat=trader_theme/socials/30; type=string; label=Google Plus account:
		google-plus =
		# cat=trader_theme/socials/35; type=string; label=Youtube account:
		youtube =
		# cat=trader_theme/socials/35; type=string; label=Vimeo account:
		vimeo =
	}
}

# overwrite t3sbootstrap configuration
plugin.tx_t3sbootstrap {
	view {
		# cat=plugin.tx_t3sbootstrap/file; type=string; label=Path to template root (FE)
		templateRootPath = EXT:trader_theme/Resources/Private/Templates/
		# cat=plugin.tx_t3sbootstrap/file; type=string; label=Path to template partials (FE)
		partialRootPath = EXT:trader_theme/Resources/Private/Partials/
		# cat=plugin.tx_t3sbootstrap/file; type=string; label=Path to template layouts (FE)
		layoutRootPath = EXT:trader_theme/Resources/Private/Layouts/
	}
}

plugin.t3sbootstrap_configuration {
	general {
		# cat=t3sbootstrap/a-general/01; type=string; label=Company Name: is shown in the navbar and breadcrumb
		company.name = 
			# cat=t3sbootstrap/a-general/02; type=string; label=Page Title Prefix: e.g.: Company -
		pageTitle.prefix = 
		# cat=t3sbootstrap/a-general/08; type=options[none=0, top=1, bottom=2]; label=Sliding Content Elements: slide none or on top or bottom
		slide = 1
	}
	navigation {
		# cat=t3sbootstrap/c-navigation/08; type=boolean; label=Breadcrumb Menu:
		breadcrumb.enable = 0
	}
	navigation_lang {
		# cat=t3sbootstrap/d-bslanguage/30; type=string; label=Language Labels: is shown in the language menu ( separate the labels ​​by || )
		labels = <img title="en" alt="en" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/gb.png"> Englisch || <img title="it" alt="it" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/it.png"> Italian || <img title="de" alt="de" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/de.png"> German
	}
	styles {
		# cat=t3sbootstrap/e-styles/10; type=options[none=0, above=1, content=2]; label=Page-Header: Header (H1) with subheader (small) shown obove (jumbotron or on top) or in the "main-content".
		bsHeader.enable = 0
		# cat=t3sbootstrap/e-styles/32; type=boolean; label=Sticky Footer: Use sticky footer
		footer.sticky = 0
	}

}

[globalVar = GP:L = 1]
	plugin.t3sbootstrap_configuration.navigation_lang.labels = <img title="en" alt="en" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/gb.png"> Inglese || <img title="it" alt="it" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/it.png"> Italiano || <img title="de" alt="de" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/de.png"> Tedesco
[global]

[globalVar = GP:L = 2]
	plugin.t3sbootstrap_configuration.navigation_lang.labels = <img title="en" alt="en" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/gb.png"> Englisch || <img title="it" alt="it" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/it.png"> Italienisch || <img title="de" alt="de" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/de.png"> Deutsch
[global]