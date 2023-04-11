import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderStyle, LiHeader, UlHeader, ImgHeader } from '../Styles/StyledComponents'
import { ThemeContext } from '../context/ThemeContext'
import ModeNightIcon from '@mui/icons-material/ModeNight';

const HeaderNav = () => {
  const navigate = useNavigate()
  const {isDarkMode, handleMode} =  useContext(ThemeContext)

  const handleDarkMode = () => {
    handleMode()
  }

  return (
    <HeaderStyle>
        <ImgHeader src='public\images\DHOdonto.png' alt='DH'/>
        <UlHeader>
            <LiHeader onClick={() => navigate('/home')}>Home</LiHeader>
            <LiHeader onClick={() => navigate('/contact')}>Contact</LiHeader>
            <LiHeader onClick={() => navigate('/favs')}>Favs</LiHeader>
            <ModeNightIcon style={{cursor: 'pointer'}} onClick={handleDarkMode}/>
        </UlHeader>
    </HeaderStyle>
  )
}

export default HeaderNav