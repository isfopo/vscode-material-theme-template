import { Colors, THEME } from '../colors'
import { token } from '../utils'

export const react = [
  // JSX component names, eg <Radical
  token('support.class.component', Colors.schemes[THEME].primary, 'bold'),

  // JSX HTML names, eg <div
  token('entity.name.tag', Colors.schemes[THEME].primary),

  // JSX attribute names, eg someProp=
  token('entity.other.attribute-name', Colors.schemes[THEME].secondaryFixedDim, 'italic'),

  // JSX attribute value
  token('meta.tag.attributes.tsx', Colors.schemes[THEME].onBackground),

  // JSX tags punctuation, eg: </
  token('punctuation.definition.tag', Colors.schemes[THEME].primaryFixedDim),

  // JSX children, in component or HTML
  token('meta.jsx.children.tsx', Colors.schemes[THEME].tertiaryFixed),

  // Match pink "=" from HTML for JSX attributes
  token('keyword.operator.assignment.tsx', Colors.schemes[THEME].secondary),
]
