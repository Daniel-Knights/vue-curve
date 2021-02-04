import type { Directive } from 'vue'

declare module 'vue-curve'

/**
 * A directive for adding a curved box-shadow to any element through `v-curve`.
 *
 * ---
 * **Options:**
 * @property `color?` - `string`
 * @property `intensity?` - `string` ("low", "medium" or "high")
 */
declare const VueCurve: Directive
export default VueCurve
