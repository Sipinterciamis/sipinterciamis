const wisata = [
    {
        id: 1,
        nama: 'Ciung Wanara Ciamis',
        slug: 'ciung-wanara-ciamis',
        imageUrl: require("./images/wisata/Ciung-Wanara-Ciamis.png"),
        lokasi: 'Jalan Raya Banjar, Karangkamulyan, Kec. Cijeungjing, Kabupaten Ciamis, Jawa Barat 46271',
        source: 'https://salsawisata.com/tempat-wisata-di-ciamis/',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15828.234100515925!2d108.48045289303558!3d-7.347325294224586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e6f6180a98fe53f%3A0xd2b4c2c645216173!2sciung%20wanara%20ciamis!3m2!1d-7.3473275!2d108.48920799999999!5e0!3m2!1sid!2sid!4v1675658423465!5m2!1sid!2sid'
    },
    {
        id: 2,
        nama: 'Darmacaang Hill Ciamis',
        slug: 'darmacaang-hills-ciamis',
        imageUrl: require("./images/wisata/Darmacaang-Hill-Ciamis.png"),
        lokasi: 'Darmacaang, Kec. Cikoneng, Kabupaten Ciamis, Jawa Barat 46261',
        source: 'https://salsawisata.com/tempat-wisata-di-ciamis/',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7915.603894592075!2d108.26950298433493!3d-7.263366876931808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e6f5be487e34e75%3A0x9215557fedc2aaac!2sDarmacaang%20Hill%20Ciamis!3m2!1d-7.263369099999999!2d108.27388069999999!5e0!3m2!1sid!2sid!4v1675658292403!5m2!1sid!2sid'
    },
    {
        id: 3,
        nama: 'Puncak Bangku Ciamis',
        slug: 'puncak-bangku-ciamis',
        imageUrl: require("./images/wisata/Puncak-Bangku-Ciamis.png"),
        lokasi: 'Desa Situmandala, Kec. Rancah, Kabupaten Ciamis, Jawa Barat 46387',
        source: 'https://salsawisata.com/tempat-wisata-di-ciamis/',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3958.4268912364105!2d108.5274945147744!3d-7.192034694807553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x2e6f6f3197246f11%3A0xeb5b04d897dc4aec!2sWarung%20Kuliner%20Puncak%20Bangku%2C%20Situmandala%2C%20Kec.%20Rancah%2C%20Kabupaten%20Ciamis%2C%20Jawa%20Barat%2046387!3m2!1d-7.1920347!2d108.5296832!5e0!3m2!1sid!2sid!4v1675658136508!5m2!1sid!2sid'
    },
    {
        id: 4,
        nama: 'Green Canyon Ciamis',
        slug: 'green-canyon-ciamis',
        imageUrl: require("./images/wisata/Green-Canyon-Ciamis.png"),
        lokasi: 'Jalan Raya Cijulang Dusun, Karangpaci, RT02/W10, Kertayasa, Cijulang, Jawa Barat',
        source: 'https://salsawisata.com/tempat-wisata-di-ciamis/',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126512.49131820358!2d108.38641111196009!3d-7.735029590516075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e65bfc5ed2372a9%3A0xf21d3ba9ffb06d10!2sWisata%20Green%20Canyon%20%2F%20Cukang%20Taneuh%20Pangandaran!3m2!1d-7.7350083!2d108.4564552!5e0!3m2!1sid!2sid!4v1675658233413!5m2!1sid!2sid'
    },
    {
        id: 5,
        nama: 'Bukit Pangangonan',
        slug: 'bukit-pangangonan',
        imageUrl: require("./images/wisata/Bukit-Pangangonan.png"),
        lokasi: 'Dusun Baros, Desa Ciomas, Kecamatan Panjalu, Ciamis.',
        source: 'https://salsawisata.com/tempat-wisata-di-ciamis/',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15824.85935443857!2d108.38030216447176!3d-7.441465873162218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e65f55b338f249d%3A0xc37389f556726d95!2sPangangonan%20Hill.%20Dusun%20Baros%2C%20Desa%20Ciomas%2C%20Kecamatan%20Panjalu%2C%20Ciamis%2C%20Jawa%20Barat!3m2!1d-7.4451173!2d108.3865568!5e0!3m2!1sid!2sid!4v1675658058430!5m2!1sid!2sid'
    },
    {
        id: 6,
        nama: 'Cireong Park',
        slug: 'cireong-park',
        imageUrl: require("./images/wisata/Cireong-Park.png"),
        lokasi: 'Sukaresik, Sindangkasih, Kec. Sindangkasih, Kabupaten Ciamis, Jawa Barat 46261',
        source: 'https://salsawisata.com/tempat-wisata-di-ciamis/',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63323.92064468293!2d108.22059427606186!3d-7.2698277565991605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e6f5a8bd094ae0f%3A0x49090f642c6b22ae!2sCireong%20Park!3m2!1d-7.2698291!2d108.25561409999999!5e0!3m2!1sid!2sid!4v1675658340908!5m2!1sid!2sid'
    },
]

export default wisata