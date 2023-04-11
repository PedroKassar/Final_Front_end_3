import React from 'react'
import { FooterBody, ImgFooterDiv, ImgRedes, PgImg } from '../Styles/StyledComponents'

const Footer = () => {
  return (
    <FooterBody>
        <PgImg src="public\images\DH.png" alt="" />
        <ImgFooterDiv>
            <ImgRedes src="public\images\ico-facebook.png" alt="" />
            <ImgRedes src="public\images\ico-instagram.png" alt="" />
            <ImgRedes src="public\images\ico-tiktok.png" alt="" />
            <ImgRedes src="public\images\ico-whatsapp.png" alt="" />
        </ImgFooterDiv>
    </FooterBody>
  )
}

export default Footer