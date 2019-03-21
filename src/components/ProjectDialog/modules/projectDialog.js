// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_PROJECT_DIALOG = 'TOGGLE_PROJECT_DIALOG'
export const HIDE_PROJECT_DIALOG = 'HIDE_PROJECT_DIALOG'

// ------------------------------------
// Actions
// ------------------------------------
export function toggleProjectDialog (project) {
  return {
    type: TOGGLE_PROJECT_DIALOG,
    payload: { project }
  }
}

export function hideProjectDialog () {
  return {
    type: HIDE_PROJECT_DIALOG
  }
}

export const actions = {
  toggleProjectDialog,
  hideProjectDialog
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_PROJECT_DIALOG]: (state, action) => {
    return {
      ...state,
      project: action.payload.project,
      toggle: true
    }
  },
  [HIDE_PROJECT_DIALOG]: (state, action) => {
    return {
      ...state,
      toggle: false,
      project: { name: '', skills: [], description: { section: '', client: '' } }
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { toggle: false, project: { name: '', skills: [], description: { section: '', client: '' } } }
export default function projectDialogReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
