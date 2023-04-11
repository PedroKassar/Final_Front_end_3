import React, {useState, useEffect} from 'react'
import { ButtonFav, DoctorCard, GlobalCardDiv, ImgCard, NameCard, Star, UserCard } from '../Styles/StyledComponents'
import { useNavigate } from 'react-router-dom'
import { arrayFavs } from './ArrayFavs'


export const doctorEndpoint = "https://jsonplaceholder.typicode.com/users"

export const Card = () => {
    const [doctor, setDoctor] = useState([])
    const navigate  = useNavigate()

    const getDoctors = async () => {
        const doctors = await 
        fetch(doctorEndpoint)
        const convert = await doctors.json()
        setDoctor(convert)
    }

    useEffect(() => {
        getDoctors()
    }, [])

    return (
        <GlobalCardDiv>
            {
                doctor.map( object =>
                    <DoctorCard>
                        <ImgCard src="public\images\doctor.jpg" alt={object.name} />
                        <NameCard onClick={() => navigate(`/home/dentist/${object.id}`)}>{object.name}</NameCard>
                        <UserCard>{object.username}</UserCard>
                        <ButtonFav onClick={() => 
                        {
                            arrayFavs.push(object),
                            localStorage.setItem("favs", arrayFavs)
                        }
                            }>
                            <Star src="public\images\star.png" alt="fav" />
                        </ButtonFav>
                    </DoctorCard>
                )
            }
        </GlobalCardDiv>
    )
}

export default Card