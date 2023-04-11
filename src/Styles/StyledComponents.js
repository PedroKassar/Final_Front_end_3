import styled, {css} from "styled-components"

export const BodyPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    height: fit-content;
`

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-evenly;
    border-bottom: 2px solid #903fa1;
`
export const UlHeader = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
`
export const LiHeader = styled.li`
    display: flex;
    cursor: pointer;
    &:focus,
    &:hover{
        color: #903fa1;
    }
`
export const ImgHeader = styled.img`
    width: 80px;
    height: 50%;
    padding-top: 15px;
`
export const GlobalCardDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 60%;
    margin: 50px auto;
`

export const DoctorCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #903fa1;
    padding: 5px;
`
export const ImgCard = styled.img`
width: 100%;
`
export const NameCard = styled.h2`
    text-align: center;
    font-size: medium;
    padding: 5px 0;
    cursor: pointer;
`

export const UserCard = styled.p`
    text-align: center;
    font-size: small;
    padding: 0 0 5px 0;
`
export const ButtonFav = styled.button`
    width: 100%;
    height: 30px;
    background-color: white;
    border: 2px solid #903fa1;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: gold;
        cursor: pointer;
    }
`
export const Star = styled.img`
    height: 20px;
    width: 20px;
`
export const DetailsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin: auto;
`
export const EachDetail = styled.div`
    border: 1px solid black;
`
export const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormDivStyle = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`

export const FooterBody = styled.div`
    display: flex;
    justify-content: space-around;
    border-top: 1px solid violet;
`

export const PgImg = styled.img`
    width: 300px;
`
export const ImgFooterDiv = styled.div`
    display: flex;
    gap: 10px;
`
export const ImgRedes = styled.img`
    width: 40px;
    height: 40px;
    display: flex;
    align-self: center;
`
export const LoginBody = styled.div`
    background-image: url("public/images/backgroundLogin.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ErrorContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ErrorMessage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const ButtonErrorBack = styled.button`
    border: 1px solid black;
    padding: 5px;
    border-radius: 3px;
    background-color: white;
    cursor: pointer;
`