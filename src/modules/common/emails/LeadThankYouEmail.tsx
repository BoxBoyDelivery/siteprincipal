import type { JSX } from 'react'

import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

interface Props {
  name: string
  phone: string
  subject: string
  message?: string
}

const AMBER = '#ff914d'
const AMBER_END = '#f5b21b'
const INK = '#292828'
const BG = '#f3f4f6'
const SURFACE = '#ffffff'
const BORDER = '#e5e7eb'
const TEXT_PRIMARY = '#292828'
const TEXT_MUTED = '#4b5563'
const TEXT_LIGHT = '#6b7280'
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"

const CHECKS: string[] = [
  'Resposta em até 1 dia útil',
  'Sem fidelidade nos primeiros 30 dias',
  'Setup técnico assistido',
]

const LeadThankYouEmail = ({ name, phone, subject, message }: Props): JSX.Element => {
  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>Oi, {name}! Recebemos sua mensagem e entraremos em contato em breve.</Preview>
      <Body style={{ margin: 0, padding: 0, backgroundColor: BG, fontFamily: FONT }}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={{ padding: '40px 16px' }}>
          <tbody>
            <tr>
              <td align="center">
                <Container style={{ maxWidth: 560, width: '100%' }}>
                  {/* ── Header card ── */}
                  <Section
                    style={{
                      backgroundColor: INK,
                      borderRadius: '16px 16px 0 0',
                      overflow: 'hidden',
                      padding: '32px 36px',
                    }}
                  >
                    {/* Brand row */}
                    <Row style={{ marginBottom: 32 }}>
                      <Column>
                        <table cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  background: `linear-gradient(135deg, ${AMBER} 0%, ${AMBER_END} 100%)`,
                                  borderRadius: 8,
                                  width: 28,
                                  height: 28,
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}
                              >
                                <Text
                                  style={{
                                    margin: 0,
                                    color: INK,
                                    fontSize: 13,
                                    fontWeight: 800,
                                    lineHeight: '28px',
                                  }}
                                >
                                  B
                                </Text>
                              </td>
                              <td style={{ paddingLeft: 9, verticalAlign: 'middle' }}>
                                <Text
                                  style={{
                                    margin: 0,
                                    color: '#ffffff',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    letterSpacing: '-0.3px',
                                  }}
                                >
                                  BoxBoy
                                </Text>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Column>
                    </Row>

                    {/* Greeting */}
                    <Text
                      style={{
                        margin: '0 0 6px',
                        color: AMBER,
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Mensagem recebida
                    </Text>
                    <Text
                      style={{
                        margin: '0 0 12px',
                        color: '#ffffff',
                        fontSize: 26,
                        fontWeight: 700,
                        letterSpacing: '-0.5px',
                        lineHeight: 1.15,
                      }}
                    >
                      Oi, {name}!
                    </Text>
                    <Text
                      style={{
                        margin: 0,
                        color: 'rgba(255,255,255,0.65)',
                        fontSize: 15,
                        lineHeight: 1.65,
                      }}
                    >
                      Sua mensagem chegou. Nosso time comercial já está ciente e vai entrar em
                      contato em breve — sem ligação fora de hora.
                    </Text>
                  </Section>

                  {/* ── White body card ── */}
                  <Section
                    style={{
                      backgroundColor: SURFACE,
                      border: `1px solid ${BORDER}`,
                      borderTop: 'none',
                      padding: '28px 36px',
                    }}
                  >
                    {/* Summary of submission */}
                    <Text
                      style={{
                        margin: '0 0 14px',
                        color: TEXT_MUTED,
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Resumo do seu contato
                    </Text>

                    <table
                      width="100%"
                      cellPadding={0}
                      cellSpacing={0}
                      style={{ marginBottom: 24 }}
                    >
                      <tbody>
                        {[
                          { label: 'Assunto', value: subject },
                          { label: 'Telefone para retorno', value: phone },
                        ].map(({ label, value }) => (
                          <tr key={label}>
                            <td
                              style={{
                                padding: '10px 14px',
                                backgroundColor: BG,
                                borderRadius: 8,
                                fontSize: 13,
                                color: TEXT_MUTED,
                                fontWeight: 500,
                                width: '40%',
                                borderBottom: `1px solid ${BORDER}`,
                              }}
                            >
                              {label}
                            </td>
                            <td
                              style={{
                                padding: '10px 14px',
                                backgroundColor: BG,
                                borderRadius: 8,
                                fontSize: 13,
                                color: TEXT_PRIMARY,
                                fontWeight: 600,
                                borderBottom: `1px solid ${BORDER}`,
                              }}
                            >
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* User's message echoed back */}
                    {message ? (
                      <Section
                        style={{
                          backgroundColor: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          padding: '14px 16px',
                          marginBottom: 24,
                        }}
                      >
                        <Text
                          style={{
                            margin: '0 0 6px',
                            color: TEXT_MUTED,
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Sua mensagem
                        </Text>
                        <Text
                          style={{
                            margin: 0,
                            color: TEXT_PRIMARY,
                            fontSize: 14,
                            lineHeight: 1.65,
                            whiteSpace: 'pre-wrap',
                          }}
                        >
                          {message}
                        </Text>
                      </Section>
                    ) : null}

                    <Hr style={{ margin: '0 0 24px', borderColor: BORDER }} />

                    {/* What to expect */}
                    <Text
                      style={{
                        margin: '0 0 14px',
                        color: TEXT_MUTED,
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      O que esperar
                    </Text>

                    {CHECKS.map((item) => (
                      <table
                        key={item}
                        cellPadding={0}
                        cellSpacing={0}
                        style={{ marginBottom: 10 }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                width: 22,
                                height: 22,
                                background: `linear-gradient(135deg, ${AMBER} 0%, ${AMBER_END} 100%)`,
                                borderRadius: 6,
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                fontSize: 12,
                                color: INK,
                                fontWeight: 700,
                              }}
                            >
                              ✓
                            </td>
                            <td
                              style={{
                                paddingLeft: 10,
                                fontSize: 14,
                                color: TEXT_PRIMARY,
                                verticalAlign: 'middle',
                              }}
                            >
                              {item}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                  </Section>

                  {/* ── CTA footer card ── */}
                  <Section
                    style={{
                      backgroundColor: SURFACE,
                      border: `1px solid ${BORDER}`,
                      borderTop: `1px solid ${BORDER}`,
                      borderRadius: '0 0 16px 16px',
                      padding: '20px 36px',
                      textAlign: 'center',
                    }}
                  >
                    <Text
                      style={{
                        margin: '0 0 16px',
                        color: TEXT_MUTED,
                        fontSize: 13,
                        lineHeight: 1.6,
                      }}
                    >
                      Enquanto isso, conheça como o BoxBoy pode
                      <br />
                      transformar a logística da sua operação.
                    </Text>
                    <Link
                      href="https://boxboydelivery.com"
                      style={{
                        display: 'inline-block',
                        background: `linear-gradient(135deg, ${AMBER} 0%, ${AMBER_END} 100%)`,
                        color: INK,
                        fontSize: 14,
                        fontWeight: 700,
                        textDecoration: 'none',
                        padding: '11px 28px',
                        borderRadius: 10,
                        letterSpacing: '-0.1px',
                      }}
                    >
                      Conheça o BoxBoy →
                    </Link>
                  </Section>

                  {/* ── Footer ── */}
                  <Section style={{ padding: '24px 0', textAlign: 'center' }}>
                    <Text style={{ margin: '0 0 4px', color: TEXT_LIGHT, fontSize: 12 }}>
                      BoxBoy Delivery ·{' '}
                      <Link
                        href="https://boxboydelivery.com"
                        style={{ color: TEXT_LIGHT, textDecoration: 'underline' }}
                      >
                        boxboydelivery.com
                      </Link>
                    </Text>
                    <Text style={{ margin: 0, color: TEXT_LIGHT, fontSize: 11 }}>
                      Você recebeu este email porque preencheu nosso formulário de contato.
                    </Text>
                  </Section>
                </Container>
              </td>
            </tr>
          </tbody>
        </table>
      </Body>
    </Html>
  )
}

export { LeadThankYouEmail }
