import React from 'react';
import * as S from './UserInformation.style'

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <S.UserInformationContainer>
      <S.AvatarStyled src={props.picture}>{props.name[0]}</S.AvatarStyled>
      <S.UserName>{props.name}</S.UserName>
      <S.RatingStyled  readOnly value={props.rating}/>
      <S.UserDescription>{props.description}</S.UserDescription>
    </S.UserInformationContainer>
  )
}

export default UserInformation;