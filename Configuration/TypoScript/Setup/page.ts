####################################################
# trader theme Theme
#
# @author Gert-jan Dikkescheij <gerry@newred.ch>
####################################################

page = PAGE
page {
	# Page Main template
	10 = FLUIDTEMPLATE
	10 {
		variables {

			# Phone
			phone = TEXT
			phone.value = {$trader_theme.socials.phone}

			# Email
			email = TEXT
			email.value = {$trader_theme.socials.email}

			# Skype
			skype = TEXT
			skype.value = {$trader_theme.socials.skype}

			# Socials
			facebook = TEXT
			facebook.value = {$trader_theme.socials.facebook}
			twitter = TEXT
			twitter.value = {$trader_theme.socials.twitter}
			google-plus = TEXT
			google-plus.value = {$trader_theme.socials.google-plus}
			youtube = TEXT
			youtube.value = {$trader_theme.socials.youtube}
			vimeo = TEXT
			vimeo.value = {$trader_theme.socials.vimeo}
		}
	}

	# CSS files to be included
	includeCSS {
		bootstrapTheme = 0
		trader = {$trader_theme.settings.cssFile}
	}

	# JS to be included
	includeJSFooter {

	}
}