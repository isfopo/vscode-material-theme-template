import { Colors, THEME } from '../colors'
import { token } from '../utils'

export const typescript = [
  token('meta.array.literal.ts', Colors.schemes[THEME].primaryFixed),

  token('variable.other.property.ts', Colors.schemes[THEME].secondary),

  token('constant.language.null.ts', Colors.schemes[THEME].onSurface),
  token('constant.language.undefined.ts', Colors.schemes[THEME].onSurfaceVariant),
]
