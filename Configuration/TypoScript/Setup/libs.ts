####################################################
# trader Theme
#
# @author Gert-jan Dikkescheij <gerry@newred.ch>
#####################################################

#-------------------------------------------------------------------------------
#	NAVIGATION: Logo in Navbar
#-------------------------------------------------------------------------------
lib.navbar-brand {
	10 = IMAGE
	10 {
		file = EXT:trader_theme/Resources/Public/Images/t3trader_co_logo.png
		params = class="img-responsive nav-logo"
		typolink >
		imageLinkWrap = 1
		imageLinkWrap {
			enable = 1
			typolink {
				parameter = {$plugin.t3sbootstrap_configuration.pages.homepage.uid}
				ATagParams = class="navbar-brand" title="home"
				target = _top
				title = {$plugin.t3sbootstrap_configuration.general.company.name}
			}
		}
	}
	15 = IMAGE
	15 {
		file = EXT:trader_theme/Resources/Public/Images/t3trader_co_logo.png
		params = class="img-responsive nav-logo"
		typolink >
		imageLinkWrap = 1
		imageLinkWrap {
			enable = 1
			typolink {
				parameter = #page-top
				ATagParams = class="navbar-brand page-top"
			}
		}
	}
}

