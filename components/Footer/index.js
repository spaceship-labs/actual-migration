import React from 'react';
import Link from 'next/link';
import {
  InformativeFooter,
  FooterContainer,
  BlackFooterParagraph,
  ParagraphContainer,
  Row,
  Column,
  Paragraph,
  Content,
  LinkText,
} from './index.styled';
import footerLinks from './FooterLinks';
import FooterLogos from './FooterLogos';

const Footer = () => (
  <FooterContainer>
    <InformativeFooter>
      <Row isChild>
        {
          footerLinks.map((DataCol) => {
            const {
              id: masterId,
              title,
              links,
              sections,
            } = DataCol;
            return (
              <Column key={masterId} isContainer>
                <Paragraph isTitle><strong>{title}</strong></Paragraph>
                <Content>
                  {
                      links && links.map(({ id, linkTitle, link }) => (
                        <Link key={id} href={link} passHref>
                          <LinkText>
                            <Paragraph half>
                              {linkTitle}
                            </Paragraph>
                          </LinkText>
                        </Link>
                      ))
                    }
                  {
                    sections && sections.map((section) => {
                      const {
                        id: sectionId,
                        sectionTitle,
                        sectionLink,
                        subtitle,
                        numbers,
                        schedule,
                      } = section;
                      return (
                        <div key={sectionId}>
                          {sectionLink
                            ? (
                              <Link href={sectionLink} passHref>
                                <LinkText isTitle>
                                  <Paragraph>
                                    <strong>{sectionTitle}</strong>
                                  </Paragraph>
                                </LinkText>
                              </Link>
                            )
                            : <Paragraph><strong>{sectionTitle}</strong></Paragraph>}
                          <Paragraph><strong><i>{subtitle}</i></strong></Paragraph>
                          {numbers && (
                          <div>
                            <Paragraph>{numbers.subtitle}</Paragraph>
                            <Row isChild>
                              <Column>
                                <Paragraph>{numbers.tel && 'Teléfono:'}</Paragraph>
                              </Column>
                              <Column>
                                {numbers.tel && numbers.tel.map(({ id: telephoneId, number }) => (
                                  <Paragraph key={telephoneId}>{number}</Paragraph>
                                ))}
                              </Column>
                            </Row>
                            <Row isChild>
                              <Column>
                                <Paragraph>{numbers.cel && 'Celular:'}</Paragraph>
                              </Column>
                              <Column>
                                {numbers.cel && numbers.cel.map(({ id: cellphoneId, number }) => (
                                  <Paragraph key={cellphoneId}>{number}</Paragraph>
                                ))}
                              </Column>
                            </Row>
                          </div>
                          )}
                          {schedule && schedule.map(({ id: scheduleId, day, hours }) => (
                            <Row isChild key={scheduleId}>
                              <Column>
                                <Paragraph>{day}</Paragraph>
                              </Column>
                              <Column>
                                {hours.map(({ id: HourId, hour }) => (
                                  <Paragraph key={HourId}>{hour}</Paragraph>
                                ))}
                              </Column>
                            </Row>
                          ))}
                        </div>
                      );
                    })
                    }
                </Content>
              </Column>
            );
          })
        }
      </Row>
      <FooterLogos />
    </InformativeFooter>
    <ParagraphContainer>
      <BlackFooterParagraph important>
        &copy; AH ACTUAL S.A. de C.V. es parte de Actual Group 2020 |
        Todos los derechos reservados. |
        Todos los precios son mostrados en Pesos Mexicanos (MXN) con IVA incluido.
      </BlackFooterParagraph>
      <BlackFooterParagraph important>
        LEGALES
      </BlackFooterParagraph>
      <BlackFooterParagraph>
        Aviso de privacidad | Términos y condiciones | Seguridad
      </BlackFooterParagraph>
    </ParagraphContainer>
    <ParagraphContainer small>
      <BlackFooterParagraph small>
        Se prohíbe cualquier reproducción total o parcial de este contenido.
        Es responsabilidad del proveedor garantizar
        <br />
        la exactitud de las fotografías mostradas y no nos hacemos responsables
        por inexactitudes en las mismas.
      </BlackFooterParagraph>

    </ParagraphContainer>

  </FooterContainer>

);

export default Footer;
