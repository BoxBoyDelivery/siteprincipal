import type { JSX } from 'react'

/**
 * Um bloco `<script type="application/ld+json">`.
 *
 * `JSON.stringify` não escapa HTML: um `</script>` dentro de qualquer string
 * fecharia a tag. Trocar `<` por `\u003c` mantém o JSON idêntico para quem o
 * lê e não deixa o parser de HTML encontrar onde fechar.
 */
const JsonLd = ({ data }: { data: object }): JSX.Element => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export { JsonLd }
