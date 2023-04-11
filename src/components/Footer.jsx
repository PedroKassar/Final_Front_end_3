import React from 'react'
import { FooterBody, ImgFooterDiv, ImgRedes, PgImg } from '../Styles/StyledComponents'

const Footer = () => {
  return (
    <FooterBody>
        <PgImg src="public\images\DH.png" alt="DIGITAL HOUSE" />
        <ImgFooterDiv>
            <ImgRedes src="public\images\ico-facebook.png" alt="FB" />
            <ImgRedes src="public\images\ico-instagram.png" alt="IG" />
            <ImgRedes src="public\images\ico-tiktok.png" alt="TK" />
            <ImgRedes src="public\images\ico-whatsapp.png" alt="WP" />
        </ImgFooterDiv>
    </FooterBody>
  )
}

export default Footer