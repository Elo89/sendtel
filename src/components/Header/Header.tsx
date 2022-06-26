import React, {FC} from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import back from '../../../assets/images/back.png';
import {
  space,
  SpaceProps,
  LayoutProps,
  layout,
  PositionProps,
  position,
  flexbox,
  FlexboxProps,
} from 'styled-system';
import {TitlePage} from '../../Theme/typography';

interface WrapProps
  extends SpaceProps,
    LayoutProps,
    PositionProps,
    FlexboxProps {
  children: React.ReactNode;
}

const Wrap = styled.View<WrapProps>`
  ${space}
  ${layout}
  ${position}
  ${flexbox}
`;

const BackButton = styled.TouchableOpacity``;

const Image = styled.Image`
  height: 13px;
  width: 16px;
`;

interface Props {
  title: string;
}

const Header: FC<Props> = ({title}) => {
  const navigate = useNavigation();

  const goBack = () => {
    navigate.goBack();
  };

  return (
    <Wrap p={4} flexDirection="row" alignItems="center">
      <BackButton onPress={goBack}>
        <Image source={back} />
      </BackButton>
      <TitlePage ml={4}>{title}</TitlePage>
    </Wrap>
  );
};

export default Header;
