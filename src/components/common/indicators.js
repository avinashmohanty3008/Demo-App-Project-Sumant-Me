
import React from 'react';
import {Image} from 'semantic-ui-react';

export function ShowerImage(props)
{
    if(props.dataStr.includes('SHOWER'))
    {
      return (<Image src={require('../../Images/shower.png')} />);
    }
    return null;
}

export function TubImage(props)
{
    if(props.dataStr.includes('TUB'))
    {
      return (<Image src={require('../../Images/duck.png')} />);
    }
    return null;
}

export function WheelChairImage(props)
{
    if(props.dataStr == 'Y')
    {
      return (<Image src={require('../../Images/handicap.png')} />);
    }
    return null;
}
