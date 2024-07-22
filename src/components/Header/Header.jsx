import React from 'react';
import useWindowDimensions from 'services/hooks/useWindowDimension';
import { Logo } from 'components';

const Header = ({menuActive, setMenuActive}) => {

    const { width } = useWindowDimensions();

  return (
      <div>
          <Logo/>
    </div>
  )
}

export default Header;
