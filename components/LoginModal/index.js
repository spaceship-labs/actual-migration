import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ModalContainer,
  ModalContent,
  Title,
  Paragraph,
  Input,
  Button,
  Muted,
  ProfileIcon,
  StyledSection,
  StyledSpan,
  StyledLink,
} from './index.styled';

function useOutsideAlerter(ref, setVisible) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const LoginModal = () => {
  const wrapperRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  useOutsideAlerter(wrapperRef, setVisible);

  return (
    <div>
      <ProfileIcon size="24" onClick={() => setVisible(true)} />
      <StyledSection>
        <Link href="/register" passHref>
          <StyledLink>
            <StyledSpan>
              REGISTRATE
              <strong>|</strong>
            </StyledSpan>
          </StyledLink>
        </Link>
        <StyledSpan onClick={() => setVisible(true)}>
          MI CUENTA
        </StyledSpan>
      </StyledSection>
      <ModalContainer isVisible={isVisible}>
        <ModalContent onClick={() => setVisible(true)} ref={wrapperRef}>
          <Title>
            <small>BIENVENIDO A MI ACTUAL</small>
          </Title>
          <Paragraph bottom>INICIO DE SESIÓN</Paragraph>
          <Input type="mail" placeholder="E-mail" />
          <Input type="password" placeholder="Contraseña" />
          <Button>INICIAR SESIÓN</Button>
          <Muted>
            <Link href="/forgot-password" passHref>
              <StyledLink forgot><small>Olvide mi contraseña</small></StyledLink>
            </Link>
          </Muted>
          <Paragraph>¿NUEVO EN MI ACTUAL?</Paragraph>
          <Muted>
            <small>
          Registrate ahora mismo para tener acceso detallado para tus compras,
          puntos, pedidos, envios, ofertas y más.
            </small>
          </Muted>
          <Button>RÉGISTRATE AHORA</Button>
        </ModalContent>
      </ModalContainer>
    </div>

  );
};
export default LoginModal;
