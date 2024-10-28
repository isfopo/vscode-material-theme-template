import { promises as fs } from 'node:fs'
import path from 'node:path'

import { tokenColors } from './colors-tokens'
import { workbenchColors } from './colors-workbench'
import { gitColors } from './git'
import { comment } from './languages/comment'
import { csharp } from './languages/csharp'
import { html } from './languages/html'
import { javascript } from './languages/javascript'
import { json } from './languages/json'
import { markdown } from './languages/markdown'
import { python } from './languages/python'
import { react } from './languages/react'
import { typescript } from './languages/typescript'
import { yaml } from './languages/yaml'

const theme = {
  $schema: 'vscode://schemas/color-theme',
  author: 'Isaac Poole',
  name: 'Stone',
  colorSpaceName: 'sRGB',
  semanticClass: 'theme.dark.stone',
  colors: {
    ...workbenchColors,
    ...gitColors,
  },
  tokenColors: [
    ...tokenColors,
    ...comment,
    ...csharp,
    ...html,
    ...javascript,
    ...typescript,
    ...json,
    ...markdown,
    ...python,
    ...react,
    ...yaml,
  ],
} as const

// Delete any editor color definition whose value is null - as a convention this
// lets us track that all theme variables are being set by assigning values to
// all of them
for (const [key, value] of Object.entries(theme.colors)) {
  // @ts-expect-error -- Haven't gone to the trouble of typing the string index access yet
  if (value === null) delete theme.colors[key]
}

const dist = path.resolve(process.cwd(), 'dist')

const write = async () => {
  try {
    await fs.mkdir(dist, { recursive: true })
    await fs.writeFile(
      path.resolve(process.cwd(), 'dist/stone.json'),
      JSON.stringify(theme, null, 2),
    )
  } catch {
    fs.rmdir(dist)
    write()
  }
}

write()
