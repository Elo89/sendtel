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
import {CustomView} from '../../Theme/styled';

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
  resize-mode: cover;
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
    <CustomView px={3} pt={3} flexDirection="row" alignItems="center">
      <BackButton onPress={goBack}>
        <Image source={back} />
      </BackButton>
      <TitlePage ml={3}>{title}</TitlePage>
    </CustomView>
  );
};

export default Header;
