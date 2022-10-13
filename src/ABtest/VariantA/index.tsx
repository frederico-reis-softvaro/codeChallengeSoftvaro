import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import PlayButton from '../../utils/PlayButton.svg';

interface VariantAProps {
	clickAction: () => void;
}

export function VariantA(props: any) {
  return (
    <S.VariantAStyle>
      <h1>Easily create or join a local nanny share with Hapu</h1>
      <h2>
        Hapu is Airbnb for nanny share. Share your home, nanny and costs
        and create new flexible, affordable solutions in childcare.
      </h2>
      <Link
        onClick={props.clickAction}
        className="play-button"
        to="/play"
      >
        <img src={PlayButton} alt="Play Button" />
        <span>See hapu in action (27 seconds)</span>
      </Link>
    </S.VariantAStyle>
  );
}
