import Image from 'next/image';
import React from 'react';
import { assets } from '../../../assets/assets';

const Footer = () => {
    return (
        <div>
            <div>
                <Image src={assets.mithun_logo} alt='' className='w-36 mx-auto-mb-2' />
            </div>
        </div>
    )
}

export default Footer;