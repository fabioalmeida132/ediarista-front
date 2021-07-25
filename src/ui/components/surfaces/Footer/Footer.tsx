import React from 'react'
import * as S from './Footer.style'
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
  return (
      <S.FooterStyled>
        <S.FooterContainer>
          <Box sx={{maxWidth: '400px'}}>
            <S.FooterTitle>Quem somos</S.FooterTitle>
            <Typography>
              E-Diaristas te ajuda a encontrar um profissional
              perfeito para realizar a limpeza da sua casa. Garantimos
              o(a) melhor profissional com total segurança e
              praticidade! São milhares de clientes satisfeitos por
              todo o país.
            </Typography>
          </Box>
          <div>
            <S.FooterTitle>Baixa nossos aplicativos.</S.FooterTitle>
            <S.AppList>
              <li>
                <a href={'/'}
                   target={'_blank'}
                   rel={'noopener noreferrer'}
                >
                  <img src={'/img/logos/app-store.png'} alt="Apple Store"/>
                </a>
              </li>
              <li>
                <a href={'/'}>
                  <img src={'/img/logos/google-play.png'} alt="Google Play"/>
                </a>
              </li>
            </S.AppList>
          </div>
        </S.FooterContainer>
      </S.FooterStyled>
  )
}

export default Footer;