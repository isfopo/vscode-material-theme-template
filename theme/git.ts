// --- Git colors

import { Colors, THEME, transparency } from './colors'
import { BORDERS } from './colors-workbench'
import { alpha } from './utils'

const DIFF_ADDED = Colors.schemes[THEME].confirm
const DIFF_REMOVED = Colors.schemes[THEME].error
const MERGE_CURRENT = Colors.schemes[THEME].primary
const MERGE_INCOMING = Colors.schemes[THEME].secondary
const MERGE_COMMON = Colors.schemes[THEME].tertiary

const GIT_ADDED = Colors.schemes[THEME].confirm
const GIT_MODIFIED = Colors.schemes[THEME].tertiary
const GIT_DELETED = Colors.schemes[THEME].error
const GIT_UNTRACKED = alpha(Colors.schemes[THEME].onSurface, transparency.DISABLED)
const GIT_IGNORED = alpha(Colors.schemes[THEME].onSurface, transparency.DISABLED)
const GIT_CONFLICTING = Colors.schemes[THEME].error
const GIT_SUBMODULE = Colors.schemes[THEME].tertiary

const editor = {
  // --- Gutter colors
  'editorGutter.background': null, // Defaults to editor bg
  'editorGutter.addedBackground': GIT_ADDED,
  'editorGutter.modifiedBackground': GIT_MODIFIED,
  'editorGutter.deletedBackground': GIT_DELETED,
  // Git decorations
  'editorOverviewRuler.modifiedForeground': GIT_MODIFIED,
  'editorOverviewRuler.addedForeground': GIT_ADDED,
  'editorOverviewRuler.deletedForeground': GIT_DELETED,
}

const minimap = {
  'minimapGutter.addedBackground': GIT_ADDED,
  'minimapGutter.modifiedBackground': GIT_MODIFIED,
  'minimapGutter.deletedBackground': GIT_DELETED,
}

//
// Git
//

const gitDecoration = {
  'gitDecoration.addedResourceForeground': GIT_ADDED,
  'gitDecoration.modifiedResourceForeground': GIT_MODIFIED,
  'gitDecoration.deletedResourceForeground': GIT_DELETED,
  'gitDecoration.untrackedResourceForeground': GIT_UNTRACKED,
  'gitDecoration.ignoredResourceForeground': GIT_IGNORED,
  'gitDecoration.conflictingResourceForeground': GIT_CONFLICTING,
  'gitDecoration.submoduleResourceForeground': GIT_SUBMODULE,
}

//
// Diff editor
//

const diffEditor = {
  // nb: diff borders get added to every line and are too noisy
  'diffEditor.insertedTextBackground': alpha(DIFF_ADDED, 0.09),
  'diffEditor.insertedTextBorder': null,
  'diffEditor.removedTextBackground': alpha(DIFF_REMOVED, 0.09),
  'diffEditor.removedTextBorder': null,
  'diffEditor.border': BORDERS,
}

//
// Merge conflicts
//

const mergeConflicts = {
  'merge.currentHeaderBackground': alpha(MERGE_CURRENT, 0.2),
  'merge.currentContentBackground': alpha(MERGE_CURRENT, 0.075),
  'merge.incomingHeaderBackground': alpha(MERGE_INCOMING, 0.2),
  'merge.incomingContentBackground': alpha(MERGE_INCOMING, 0.075),
  'merge.border': BORDERS,
  'merge.commonContentBackground': alpha(MERGE_COMMON, 0.075),
  'merge.commonHeaderBackground': alpha(MERGE_COMMON, 0.2),
  'editorOverviewRuler.currentContentForeground': alpha(MERGE_CURRENT, 0.3),
  'editorOverviewRuler.incomingContentForeground': alpha(MERGE_INCOMING, 0.3),
  'editorOverviewRuler.commonContentForeground': alpha(MERGE_COMMON, 0.3),
}

export const gitColors = {
  ...editor,
  ...minimap,
  ...gitDecoration,
  ...diffEditor,
  ...mergeConflicts,
}
