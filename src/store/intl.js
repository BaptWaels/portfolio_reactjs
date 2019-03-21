import { localizationData, enabledLanguages } from '../../Intl/setup'

// ------------------------------------
// Constants
// ------------------------------------
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE'

// ------------------------------------
// Actions
// ------------------------------------
export function switchLanguage (newLang) {
  return {
    type: SWITCH_LANGUAGE,
    ...localizationData[newLang]
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initLocale = ((global.navigator && global.navigator.language) || 'en').split('-')[0].split('_')[0]

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SWITCH_LANGUAGE]: (state, action) => {
    const { type, ...actionWithoutType } = action
    return { ...state, ...actionWithoutType }
  }
}

const initialState = {
  locale: initLocale,
  enabledLanguages,
  ...(localizationData[initLocale] || {})
}
export default function intlReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
