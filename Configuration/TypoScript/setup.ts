#-------------------------------------------------------------------------------
#	Distribution Setup
#-------------------------------------------------------------------------------

<INCLUDE_TYPOSCRIPT:source="DIR: EXT:trader_theme/Configuration/TypoScript/Setup" extensione="ts">

## plugin.tx_trader_objects override
plugin.tx_trader {
  settings {
    detail {
        noBackground = {$trader_theme.settings.noBackground}
      }
    }
    list {
        noImage = {$trader_theme.settings.noImage}
      }
    }
  }
}
