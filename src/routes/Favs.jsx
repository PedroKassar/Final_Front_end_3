import React from 'react'
import { DoctorCard, GlobalCardDiv, ImgCard, NameCard, UserCard, BodyPage } from '../Styles/StyledComponents'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
import { arrayFavs } from '../components/ArrayFavs'
import { useNavigate } from 'react-router-dom'


const Favs = () => {
  const navigate = useNavigate()

  return (
    <BodyPage>
      <HeaderNav/>
        <GlobalCardDiv>
        {
                arrayFavs.map( object =>
                    <DoctorCard>
                        <ImgCard src="public\images\doctor.jpg" alt={object.name} />
                        <NameCard onClick={() => navigate(`/home/dentist/${object.id}`)}>{object.name}</NameCard>
                        <UserCard>{object.username}</UserCard>
                    </DoctorCard>
                )
            }
        </GlobalCardDiv>
      <Footer/>
    </BodyPage>
  )
}

export default Favs