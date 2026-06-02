import type { JSX } from 'react/jsx-dev-runtime'

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
  email: string
  phone: string
  subject: string
  message?: string
}

const AMBER = '#ff914d'
const AMBER_END = '#f5b21b'
const INK = '#292828'
const INK_DEEP = '#0f1014'
const SURFACE = '#1c1c22'
const SURFACE_RAISED = '#24242c'
const BORDER = 'rgba(255,255,255,0.07)'
const TEXT_PRIMARY = '#f9f9fb'
const TEXT_MUTED = 'rgba(249,249,251,0.55)'
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"

const LeadNotificationEmail = ({ name, email, phone, subject, message }: Props): JSX.Element => {
  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>
        Novo lead: {subject} — {name} ({phone})
      </Preview>
      <Body style={{ margin: 0, padding: 0, backgroundColor: INK_DEEP, fontFamily: FONT }}>
        {/* Outer wrapper */}
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: INK_DEEP, padding: '40px 16px' }}
        >
          <tbody>
            <tr>
              <td align="center">
                <Container style={{ maxWidth: 580, width: '100%' }}>
                  {/* ── Brand header ── */}
                  <Section
                    style={{
                      paddingBottom: 28,
                      borderBottom: `1px solid ${BORDER}`,
                      marginBottom: 0,
                    }}
                  >
                    <Row>
                      <Column>
                        {/* Wordmark */}
                        <table cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  background: `linear-gradient(135deg, ${AMBER} 0%, ${AMBER_END} 100%)`,
                                  borderRadius: 10,
                                  width: 32,
                                  height: 32,
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}
                              >
                                <Text
                                  style={{
                                    margin: 0,
                                    color: INK,
                                    fontSize: 14,
                                    fontWeight: 800,
                                    letterSpacing: '-0.5px',
                                    lineHeight: '32px',
                                  }}
                                >
                                  B
                                </Text>
                              </td>
                              <td style={{ paddingLeft: 10, verticalAlign: 'middle' }}>
                                <Text
                                  style={{
                                    margin: 0,
                                    color: TEXT_PRIMARY,
                                    fontSize: 18,
                                    fontWeight: 700,
                                    letterSpacing: '-0.5px',
                                  }}
                                >
                                  BoxBoy
                                </Text>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Column>
                      <Column align="right">
                        <table cellPadding={0} cellSpacing={0} style={{ marginLeft: 'auto' }}>
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  background: `linear-gradient(135deg, ${AMBER}22 0%, ${AMBER_END}22 100%)`,
                                  border: `1px solid ${AMBER}44`,
                                  borderRadius: 20,
                                  padding: '4px 12px',
                                }}
                              >
                                <Text
                                  style={{
                                    margin: 0,
                                    color: AMBER,
                                    fontSize: 11,
                                    fontWeight: 600,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                  }}
                                >
                                  Novo Lead
                                </Text>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Column>
                    </Row>
                  </Section>

                  {/* ── Main card ── */}
                  <Section
                    style={{
                      backgroundColor: SURFACE,
                      borderRadius: 16,
                      border: `1px solid ${BORDER}`,
                      overflow: 'hidden',
                      marginTop: 20,
                    }}
                  >
                    {/* Amber top stripe */}
                    <div
                      style={{
                        height: 3,
                        background: `linear-gradient(90deg, ${AMBER} 0%, ${AMBER_END} 100%)`,
                      }}
                    />

                    <Section style={{ padding: '28px 32px 0' }}>
                      <Text
                        style={{
                          margin: 0,
                          color: AMBER,
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Formulário comercial
                      </Text>
                      <Text
                        style={{
                          margin: '8px 0 4px',
                          color: TEXT_PRIMARY,
                          fontSize: 22,
                          fontWeight: 700,
                          letterSpacing: '-0.4px',
                          lineHeight: 1.2,
                        }}
                      >
                        Nova mensagem recebida
                      </Text>
                      <Text
                        style={{
                          margin: '0 0 24px',
                          color: TEXT_MUTED,
                          fontSize: 14,
                          lineHeight: 1.6,
                        }}
                      >
                        Um contato preencheu o formulário no site e aguarda retorno.
                      </Text>
                    </Section>

                    {/* Fields */}
                    <Section style={{ padding: '0 32px 28px' }}>
                      {[
                        { label: 'Nome', value: name },
                        { label: 'Email', value: email, href: `mailto:${email}` },
                        {
                          label: 'Telefone',
                          value: phone,
                          href: `tel:${phone.replace(/\D/g, '')}`,
                        },
                      ].map(({ label, value, href }) => (
                        <Row
                          key={label}
                          style={{
                            backgroundColor: SURFACE_RAISED,
                            borderRadius: 10,
                            marginBottom: 8,
                          }}
                        >
                          <Column
                            style={{
                              padding: '12px 16px',
                              width: 90,
                              borderRight: `1px solid ${BORDER}`,
                            }}
                          >
                            <Text
                              style={{
                                margin: 0,
                                color: TEXT_MUTED,
                                fontSize: 12,
                                fontWeight: 500,
                              }}
                            >
                              {label}
                            </Text>
                          </Column>
                          <Column style={{ padding: '12px 16px' }}>
                            {href ? (
                              <Link
                                href={href}
                                style={{
                                  color: TEXT_PRIMARY,
                                  fontSize: 14,
                                  fontWeight: 500,
                                  textDecoration: 'none',
                                }}
                              >
                                {value}
                              </Link>
                            ) : (
                              <Text
                                style={{
                                  margin: 0,
                                  color: TEXT_PRIMARY,
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}
                              >
                                {value}
                              </Text>
                            )}
                          </Column>
                        </Row>
                      ))}

                      {/* Subject badge row */}
                      <Row
                        style={{
                          backgroundColor: SURFACE_RAISED,
                          borderRadius: 10,
                          marginBottom: 0,
                        }}
                      >
                        <Column
                          style={{
                            padding: '12px 16px',
                            width: 90,
                            borderRight: `1px solid ${BORDER}`,
                          }}
                        >
                          <Text
                            style={{ margin: 0, color: TEXT_MUTED, fontSize: 12, fontWeight: 500 }}
                          >
                            Assunto
                          </Text>
                        </Column>
                        <Column style={{ padding: '10px 16px' }}>
                          <table cellPadding={0} cellSpacing={0}>
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    background: `linear-gradient(135deg, ${AMBER}22, ${AMBER_END}22)`,
                                    border: `1px solid ${AMBER}44`,
                                    borderRadius: 6,
                                    padding: '3px 10px',
                                  }}
                                >
                                  <Text
                                    style={{
                                      margin: 0,
                                      color: AMBER,
                                      fontSize: 12,
                                      fontWeight: 600,
                                    }}
                                  >
                                    {subject}
                                  </Text>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Column>
                      </Row>

                      {/* Message */}
                      {message ? (
                        <Section
                          style={{
                            backgroundColor: SURFACE_RAISED,
                            borderRadius: 10,
                            marginTop: 8,
                            padding: '14px 16px',
                          }}
                        >
                          <Text
                            style={{
                              margin: '0 0 8px',
                              color: TEXT_MUTED,
                              fontSize: 12,
                              fontWeight: 500,
                            }}
                          >
                            Mensagem
                          </Text>
                          <Text
                            style={{
                              margin: 0,
                              color: TEXT_PRIMARY,
                              fontSize: 14,
                              fontWeight: 400,
                              lineHeight: 1.6,
                              whiteSpace: 'pre-wrap',
                            }}
                          >
                            {message}
                          </Text>
                        </Section>
                      ) : null}
                    </Section>

                    <Hr style={{ margin: 0, borderColor: BORDER }} />

                    {/* CTA */}
                    <Section style={{ padding: '20px 32px' }}>
                      <Row>
                        <Column>
                          <Text style={{ margin: 0, color: TEXT_MUTED, fontSize: 13 }}>
                            Responda diretamente por email:
                          </Text>
                        </Column>
                        <Column align="right">
                          <Link
                            href={`mailto:${email}?subject=Re: ${encodeURIComponent(subject)} — BoxBoy`}
                            style={{
                              display: 'inline-block',
                              background: `linear-gradient(135deg, ${AMBER} 0%, ${AMBER_END} 100%)`,
                              color: INK,
                              fontSize: 13,
                              fontWeight: 700,
                              textDecoration: 'none',
                              padding: '9px 20px',
                              borderRadius: 8,
                              letterSpacing: '-0.1px',
                            }}
                          >
                            Responder lead →
                          </Link>
                        </Column>
                      </Row>
                    </Section>
                  </Section>

                  {/* ── Footer ── */}
                  <Section style={{ padding: '24px 0 0', textAlign: 'center' }}>
                    <Text style={{ margin: 0, color: TEXT_MUTED, fontSize: 12 }}>
                      BoxBoy Delivery ·{' '}
                      <Link
                        href="https://boxboydelivery.com"
                        style={{ color: TEXT_MUTED, textDecoration: 'underline' }}
                      >
                        boxboydelivery.com
                      </Link>
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

export { LeadNotificationEmail }
