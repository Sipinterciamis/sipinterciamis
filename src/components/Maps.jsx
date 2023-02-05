import React from 'react'

function Maps({ mapSrc, mapWidth = '500', mapHeight = '400' }) {
    return (
        <>
            <iframe title='map' width={mapWidth} height={mapHeight} src={mapSrc} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            {/* <Maps mapSrc={"https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7914.3825924793055!2d108.35297435448102!3d-7.3324009148422435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x2e6f5eeabc648bad%3A0xa7848cb7adc84ce5!2sKantor%20Terminal%20Kabupaten%20Ciamis%2C%20Jalan%20Mr.%20Iwa%20Kusuma%20Sumantri%2C%20Indonesia%2C%20JL.%20Perintis%20Kemerdekaan%2C%20No.%2017%2C%20Ciamis%2C%2046211%2C%20Indonesia%2C%20Ciamis%2C%20Ciamis%20Sub-District%2C%20Ciamis%20Regency%2C%20West%20Java%2C%20Indonesia%2C%20Ciamis%2C%20Kecamatan%20Ciamis%2C%20Kabupaten%20Ciamis%2C%20Jawa%20Barat%2C%20Indonesia%2C%20Jawa%20Barat!3m2!1d-7.3324764!2d108.3574781!5e0!3m2!1sid!2sid!4v1675611300697!5m2!1sid!2sid"} mapWidth={'400'} mapHeight={'200'} /> */}
        </>
    )
}

export default Maps