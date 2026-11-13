/**
 * Logos em bitmap, importados como arquivo para que o `next/image` os sirva
 * redimensionados. Antes eram PNGs em base64 dentro de componentes SVG: iam
 * inteiros no HTML (10 MB na home) e empurravam o texto para além dos 2 MB que
 * o Googlebot lê de cada página. Não volte a embutir imagens em base64.
 */

import boxBoyLogo from './boxboy-logo.png'
import chinaInBox from './china-in-box.png'
import clubeVerde from './clube-verde.png'
import koni from './koni.png'
import laMole from './la-mole.png'

export { boxBoyLogo, chinaInBox, clubeVerde, koni, laMole }
