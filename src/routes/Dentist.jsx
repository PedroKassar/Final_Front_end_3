import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BodyPage, DetailsDiv, EachDetail } from '../Styles/StyledComponents'
import { doctorEndpoint } from '../components/Card'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'

const Dentist = () => {
  const [doctorData, setDoctorData] = useState([])
  const { id } = useParams()

  useEffect(() => {
      axios.get(`${doctorEndpoint}/${id}`)
      .then(res => setDoctorData(res.data))
  }, [])

  return (
    <BodyPage>
      <HeaderNav/>
        <DetailsDiv>
          <EachDetail>
            <h3>Name</h3>
            <p>{doctorData.name}</p>
          </EachDetail>
          <EachDetail>
            <h3>Email</h3>
            <p>{doctorData.email}</p>
          </EachDetail>      
          <EachDetail>
            <h3>Phone</h3>
            <p>{doctorData.phone}</p>
          </EachDetail>      
          <EachDetail>
            <h3>Website</h3>
            <p>{doctorData.website}</p>
          </EachDetail>
        </DetailsDiv>
      <Footer/>
    </BodyPage>
  )
}

export default Dentist