export const WA_APP_NAME = 'Wa'
export const WA_APP_DESCRIPTION = 'Talk, Amplify, Post, Explore'

export const WA_ENV = process.env.NEXT_PUBLIC_ENVIRONMENT ?? "mainnet"
export const IS_MAINNET = WA_ENV === "mainnet"

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
export const IS_PRODUCTION = !IS_DEVELOPMENT

export const STATIC_ASSETS = 'https://static.wa.xyz'
export const WA_WEBSITE_URL = IS_MAINNET ? "" : ""

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// walletconnect
export const WC_PROJECT_ID = 'bf790b6b57570b99567abd1677b7415d'

// error messages
export const ERROR_MESSAGE = 'Oops, something went wrong!'
export const SIGN_IN_REQUIRED = 'Login to continue'

