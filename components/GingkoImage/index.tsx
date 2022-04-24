import React, { useState } from 'react'
import { Image } from 'react-native'

const GingkoImage = (props: any) => {
    const {
        source,
        errSource,
        style,
        resizeMode = 'cover'
    } = props

    const [imageType, setImageType] = useState(0)

    const onError = () => {
        setImageType(1)
    }
    
    let imageUrl: any = source
    if (!!imageType) {
        imageUrl = !!errSource ? errSource : require('../../src/assets/imgs/loadImgError.png')
    }

    return <Image 
        source={imageUrl}
        resizeMode={resizeMode}
        onError={onError}
        style={style} />
}

export default GingkoImage