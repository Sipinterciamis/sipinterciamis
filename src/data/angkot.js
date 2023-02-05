const angkot = [
    {
        id: 1,
        nama: "Angkot 01",
        trayek: "CIAMIS - CISEPET - BUNISEURI",
        imageUrl: require("./images/angkot/angkot-01.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. Ciptomangunkusumo'
            },
            {
                id: 2,
                asal: 'Jl. Ciptomangunkusumo',
                tujuan: 'Jl. KH. Ahmad Dahlan'
            },
            {
                id: 3,
                asal: 'Jl. KH. Ahmad Dahlan',
                tujuan: 'Jl. Ir. H. Juanda'
            },
            {
                id: 4,
                asal: 'Jl. Ir. H. Juanda',
                tujuan: 'Jl. Jend. Sudirman'
            },
            {
                id: 5,
                asal: 'Jl. Jend. Sudirman',
                tujuan: 'Jl. RE. Martadinata'
            },
            {
                id: 6,
                asal: 'Jl. RE. Martadinata',
                tujuan: 'Jl. Raya Kawali'
            },
            {
                id: 7,
                asal: 'Jl. Raya Kawali',
                tujuan: 'Cisepet'
            },
            {
                id: 8,
                asal: 'Cisepet',
                tujuan: 'Jl. Raya Cipaku'
            },
            {
                id: 9,
                asal: 'Jl. Raya Cipaku',
                tujuan: 'Jl. Raya Buniseri'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Jl. Raya Buniseri',
                tujuan: 'Jl. Raya Cipaku'
            },
            {
                id: 2,
                asal: 'Jl. Raya Cipaku',
                tujuan: 'Cisepet'
            },
            {
                id: 3,
                asal: 'Cisepet',
                tujuan: 'Jl. Raya Kawali'
            },
            {
                id: 4,
                asal: 'Jl. Raya Kawali',
                tujuan: 'Jl. RE. Martadinata'
            },
            {
                id: 5,
                asal: 'Jl. RE. Martadinata',
                tujuan: 'Jl. Yos Sudarso'
            },
            {
                id: 6,
                asal: 'Jl. Yos Sudarso',
                tujuan: 'Jl. Rumah Sakit'
            },
            {
                id: 7,
                asal: 'Jl. Rumah Sakit',
                tujuan: 'Terminal Ciamis'
            }
        ]
    },
    {
        id: 2,
        nama: "Angkot 02",
        trayek: "CIAMIS - CISEPET - KARANGAMPEL",
        imageUrl: require("./images/angkot/angkot-02.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Yogya'
            },
            {
                id: 2,
                asal: 'Yogya',
                tujuan: 'Jl. RE. Martadinata'
            },
            {
                id: 3,
                asal: 'Jl. RE. Martadinata',
                tujuan: 'Jl. Raya Kawali'
            },
            {
                id: 4,
                asal: 'Jl. Raya Kawali',
                tujuan: 'Cisepet'
            },
            {
                id: 5,
                asal: 'Cisepet',
                tujuan: 'Jl. Sukadana'
            },
            {
                id: 6,
                asal: 'Jl. Sukadana',
                tujuan: 'Jl. Cicau'
            },
            {
                id: 7,
                asal: 'Jl. Cicau',
                tujuan: 'Karangampel'
            }
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Karangampel',
                tujuan: 'Jl. Cicau'
            },
            {
                id: 2,
                asal: ['Jl. Cicau', 'Jl, Sukadana'],
                tujuan: ['Jl. Sukadana', 'Cisepet']
            },
            {
                id: 3,
                asal: 'Cisepet',
                tujuan: 'Jl. Raya Kawali'
            },
            {
                id: 4,
                asal: 'Jl. Raya Kawali',
                tujuan: 'Jl. RE. Martadinata'
            },
            {
                id: 5,
                asal: 'Jl. RE. Martadinata',
                tujuan: 'Yogya'
            },
            {
                id: 6,
                asal: 'Yogya',
                tujuan: 'Terminal Ciamis'
            },
        ]
    },
    // {
    //     id: 3,
    //     nama: "Angkot 03",
    //     trayek: "CIAMIS - HANDAPHERANG - CIHARALANG",
    //     imageUrl: require("./images/angkot/angkot-02.jpg"),
    //     segmenBerangkat: [
    //         {
    //             id: 1,
    //             asal: 'Jl. Kapten Murod Idrus',
    //             tujuan: 'Jl. Handapherang'
    //         },
    //         {
    //             id: 2,
    //             asal: 'Jl. Handapherang',
    //             tujuan: 'Jl. H. Hasan'
    //         },
    //         {
    //             id: 3,
    //             asal: 'Jl. H. Hasan',
    //             tujuan: 'Jl. H. Ubad'
    //         },
    //         {
    //             id: 4,
    //             asal: 'Jl. H. Ubad',
    //             tujuan: 'Cihalarang'
    //         },
    //     ],
    //     segmenKembali: [
    //         {
    //             id: 1,
    //             asal: 'Ciharalang',
    //             tujuan: 'Jl. Otista'
    //         },
    //         {
    //             id: 2,
    //             asal: ['Jl. Otista', 'Jl. H. Hasan'],
    //             tujuan: ['Jl. H. Hasan', 'Jl. Handapherang']
    //         },
    //         {
    //             id: 3,
    //             asal: 'Jl. Handapherang',
    //             tujuan: 'Jl. Kapten Murod Idrus'
    //         },
    //     ]
    // },
    {
        id: 4,
        nama: "Angkot 04",
        trayek: "CIAMIS - PAWINDAN - BENTENG",
        imageUrl: require("./images/angkot/angkot-04.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. Benteng'
            },
            {
                id: 2,
                asal: 'Jl. Benteng',
                tujuan: 'Jl. Otista'
            },
            {
                id: 3,
                asal: 'Jl. Otista',
                tujuan: 'Jl. Pawindan 1'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Ciharalang',
                tujuan: 'Jl. Otista'
            },
            {
                id: 2,
                asal: ['Jl. Otista', 'Jl. H. Hasan'],
                tujuan: ['Jl. H. Hasan', 'Jl. Handapherang']
                // asal: ['Jl. asal 1', 'Jl. asal 2'],
                // tujuan: ['Jl. tujuan 1', 'Jl. tujuan 2']
            },
            {
                id: 3,
                asal: 'Jl. Handapherang',
                tujuan: 'Jl. Kapten Murod Idrus'
            },
        ]
    },
    {
        id: 5,
        nama: "Angkot 05",
        trayek: "CIAMIS - SADANANYA - GUNUNGSARI",
        imageUrl: require("./images/angkot/angkot-05.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. HOS Cokroaminoto'
            },
            {
                id: 2,
                asal: 'Jl. HOS Cokroaminoto',
                tujuan: 'Jl. Pemuda'
            },
            {
                id: 3,
                asal: 'Jl. Pemuda',
                tujuan: 'Jl. Ir. H. Juanda'
            },
            {
                id: 4,
                asal: 'Jl. Ir. H. Juanda',
                tujuan: 'Jl. RE. Martadinata'
            },
            {
                id: 5,
                asal: 'Jl. RE. Martadinata',
                tujuan: 'Jl. Siliwangi I'
            },
            {
                id: 6,
                asal: 'Jl. Siliwangi I',
                tujuan: 'Jl. Sadananya'
            },
            {
                id: 7,
                asal: 'Jl. Sadananya',
                tujuan: 'Terminal Sadananya'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Terminal Sadananya',
                tujuan: 'Jl. Sadananya'
            },
            {
                id: 2,
                asal: 'Jl. Sadananya',
                tujuan: 'Jl. Siliwangi I'
            },
            {
                id: 3,
                asal: 'Jl. Siliwangi I',
                tujuan: 'Jl. RE. Martadinata'
            },
            {
                id: 4,
                asal: 'Jl. RE. Martadinata',
                tujuan: 'Jl. Yos Sudarso'
            },
            {
                id: 5,
                asal: 'Jl. Yos Sudarso',
                tujuan: 'Jl. Rumah Sakit'
            },
            {
                id: 6,
                asal: 'Jl. Rumah Sakit',
                tujuan: 'Terminal Ciamis'
            },
        ]
    },
    {
        id: 6,
        nama: "Angkot 06",
        trayek: "CIAMIS - PAWINDAN - CIGEMBOR",
        imageUrl: require("./images/angkot/angkot-06.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. HOS Cokroaminoto'
            },
            {
                id: 2,
                asal: 'Jl. HOS Cokroaminoto',
                tujuan: 'Jl. Tentara Pelajar'
            },
            {
                id: 3,
                asal: 'Jl. Tentara Pelajar',
                tujuan: 'Jl. Ir. H. Juanda'
            },
            {
                id: 4,
                asal: 'Jl. Ir. H. Juanda',
                tujuan: 'Jl. Jend. Sudirman'
            },
            {
                id: 5,
                asal: 'Jl. Jend. Sudirman',
                tujuan: 'Jl. Panyingkiran'
            },
            {
                id: 6,
                asal: 'Jl. Panyingkiran',
                tujuan: 'Desa Pawindan'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Desa Pawindan',
                tujuan: 'Cimandala'
            },
            {
                id: 2,
                asal: 'Cimandala',
                tujuan: 'Cigembor'
            },
            {
                id: 3,
                asal: 'Cigembor',
                tujuan: 'Jl. Rumah Sakit'
            },
            {
                id: 4,
                asal: 'Jl. Rumah Sakit',
                tujuan: 'Terminal Ciamis'
            },
        ]

    },
    {
        id: 7,
        nama: "Angkot 07",
        trayek: "CIAMIS - DARUSSALAM - CIHARALANG",
        imageUrl: require("./images/angkot/angkot-07.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. Nasional III'
            },
            {
                id: 2,
                asal: 'Jl. Nasional III',
                tujuan: 'Jl. Kiai Ahmad Fadil'
            },
            {
                id: 3,
                asal: 'Jl. Kiai Ahmad Fadil',
                tujuan: 'Pondok Pesantren Darussalam'
            },
            {
                id: 4,
                asal: 'Pondok Pesantren Darussalam',
                tujuan: 'Cihalarang'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Cihalarang',
                tujuan: 'Pondok Pesantren Darussalam'
            },
            {
                id: 2,
                asal: 'Pondok Pesantren Darussalam',
                tujuan: 'Jl. Kiai Ahmad Fadil'
            },
            {
                id: 3,
                asal: 'Jl. Kiai Ahmad Fadil',
                tujuan: 'Jl. Nasional III'
            },
            {
                id: 4,
                asal: 'Jl. Nasional III',
                tujuan: 'Terminal Ciamis'
            },
        ]
    },
    {
        id: 8,
        nama: "Angkot 08",
        trayek: "CIAMIS - IMBANAGARA - CISADAP",
        imageUrl: require("./images/angkot/angkot-08.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. K.H Ahmad Dahlan'
            },
            {
                id: 2,
                asal: 'Jl. K.H Ahmad Dahlan',
                tujuan: 'Jl. Ir. H. Juanda'
            },
            {
                id: 3,
                asal: 'Jl. Ir. H. Juanda',
                tujuan: 'Jl. Jend. Sudirman'
            },
            {
                id: 4,
                asal: 'Jl. Jend. Sudirman',
                tujuan: 'Jl. Raya Imanagara'
            },
            {
                id: 5,
                asal: 'Jl. Raya Imanagara',
                tujuan: 'Jl. Ardilaya'
            },
            {
                id: 6,
                asal: 'Jl. Ardilaya',
                tujuan: 'Cisadap'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Cisadap',
                tujuan: 'Jl. Sadananya'
            },
            {
                id: 2,
                asal: 'Jl. Sadananya',
                tujuan: 'Jl. Dewi Sartika'
            },
            {
                id: 3,
                asal: 'Jl. Dewi Sartika',
                tujuan: 'Jl. Bojong Huni'
            },
            {
                id: 4,
                asal: 'Jl. Bojong Huni',
                tujuan: 'Jl. Jend. Sudirman'
            },
            {
                id: 5,
                asal: 'Jl. Jend. Sudirman',
                tujuan: 'Jl. Rumah Sakit'
            },
            {
                id: 6,
                asal: 'Jl. Rumah Sakit',
                tujuan: 'Terminal Ciamis'
            },
        ]
    },
    {
        id: 9,
        nama: "Angkot 09",
        trayek: "CIAMIS - IMBANAGARA - GUNUNGSARI",
        imageUrl: require("./images/angkot/angkot-09.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. Cokroaminoto'
            },
            {
                id: 2,
                asal: 'Jl. Cokroaminoto',
                tujuan: 'Jl. Tentara Pelajar'
            },
            {
                id: 3,
                asal: 'Jl. Tentara Pelajar',
                tujuan: 'Jl. Ir. H. Juanda'
            },
            {
                id: 4,
                asal: 'Jl. Ir. H. Juanda',
                tujuan: 'Jl. Jend. Sudirman'
            },
            {
                id: 5,
                asal: 'Jl. Jend. Sudirman',
                tujuan: 'Jl. Imbanagara'
            },
            {
                id: 6,
                asal: 'Jl. Imbanagara',
                tujuan: 'Gunung Sari'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Gunung Sari',
                tujuan: 'Jl. Imbanagara'
            },
            {
                id: 2,
                asal: 'Jl. Imbanagara',
                tujuan: 'Jl. Jend. Sudirman'
            },
            {
                id: 3,
                asal: 'Jl. Jend. Sudirman',
                tujuan: 'Jl. Ir. H. Juanda'
            },
            {
                id: 4,
                asal: 'Jl. Ir. H. Juanda',
                tujuan: 'Terminal Ciamis'
            },
        ]
    },
    {
        id: 10,
        nama: "Angkot 10",
        trayek: "CIAMIS - KARANGANYAR",
        imageUrl: require("./images/angkot/angkot-10.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. Ciamis Banjar'
            },
            {
                id: 2,
                asal: 'Jl. Ciamis Banjar',
                tujuan: 'Jl. Timbang Windu'
            },
            {
                id: 3,
                asal: 'Jl. Timbang Windu',
                tujuan: 'Jl. Kertaharja'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Jl. Kertaharja',
                tujuan: 'Jl. Raya Desa Sukamaju'
            },
            {
                id: 2,
                asal: 'Jl. Raya Desa Sukamaju',
                tujuan: 'Jl. Panamun'
            },
            {
                id: 3,
                asal: 'Jl. Panamun',
                tujuan: 'Jl. Citapen'
            },
            {
                id: 4,
                asal: 'Jl. Citapen',
                tujuan: 'Jl. Ciamis Banjar'
            },
            {
                id: 5,
                asal: 'Jl. Ciamis Banjar',
                tujuan: 'Terminal Ciamis'
            },
        ]
    },
    {
        id: 11,
        nama: "Angkot 11",
        trayek: "CIAMIS - BOJONGMENGGER - KARANGANYAR - CIPARIGI",
        imageUrl: require("./images/angkot/angkot-11.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. Iwa Kusuma Sumantri'
            },
            {
                id: 2,
                asal: 'Jl. Iwa Kusuma Sumantri',
                tujuan: 'Jl. Jend. Ahmad Yani'
            },
            {
                id: 3,
                asal: 'Jl. Jend. Ahmad Yani',
                tujuan: 'Jl. Ciamis - Banjar'
            },
            {
                id: 4,
                asal: 'Jl. Ciamis - Banjar',
                tujuan: 'Jl. Kertabumi'
            },
            {
                id: 5,
                asal: 'Jl. Kertabumi',
                tujuan: 'Ciparigi'
            },
            {
                id: 6,
                asal: 'Ciparigi',
                tujuan: 'Sukadana'
            },
            {
                id: 7,
                asal: 'Sukadana',
                tujuan: 'Pasar Dongkal'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Pasar Dongkal',
                tujuan: 'Sukadana'
            },
            {
                id: 2,
                asal: 'Sukadana',
                tujuan: 'Ciparigi'
            },
            {
                id: 3,
                asal: 'Ciparigi',
                tujuan: 'Jl. Kertabumi'
            },
            {
                id: 4,
                asal: 'Jl. Kertabumi',
                tujuan: 'Jl. Ciamis - Banjar'
            },
            {
                id: 5,
                asal: 'Jl. Ciamis - Banjar',
                tujuan: 'Jl. Nasional III'
            },
            {
                id: 6,
                asal: 'Jl. Nasional III',
                tujuan: 'Jl. Rumah Sakit'
            },
            {
                id: 7,
                asal: 'Jl. Rumah Sakit',
                tujuan: 'Terminal Ciamis'
            },
        ]
    },
    {
        id: 12,
        nama: "Angkot 12",
        trayek: "CIAMIS - JETAK - NASOL",
        imageUrl: require("./images/angkot/angkot-12.jpg"),
        segmenBerangkat: [
            {
                id: 1,
                asal: 'Terminal Ciamis',
                tujuan: 'Jl. K.H Ahmad Dahlan'
            },
            {
                id: 2,
                asal: 'Jl. K.H Ahmad Dahlan',
                tujuan: 'Jl. Ir. H. Juanda'
            },
            {
                id: 3,
                asal: 'Jl. Ir. H. Juanda',
                tujuan: 'Jl. Jend. Sudirman'
            },
            {
                id: 4,
                asal: 'Jl. Jend. Sudirman',
                tujuan: 'Jl. Raya Imbanagara'
            },
            {
                id: 5,
                asal: 'Jl. Raya Imbanagara',
                tujuan: 'Jl. Sindangsari'
            },
            {
                id: 6,
                asal: 'Jl. Sindangsari',
                tujuan: 'Nasol'
            },
        ],
        segmenKembali: [
            {
                id: 1,
                asal: 'Nasol',
                tujuan: 'Jl. Sindangsari'
            },
            {
                id: 2,
                asal: 'Jl. Sindangsari',
                tujuan: 'Jl. Raya Imbanagara'
            },
            {
                id: 3,
                asal: 'Jl. Raya Imbanagara',
                tujuan: 'Jl. Jend. Sudirman'
            },
            {
                id: 4,
                asal: 'Jl. Jend. Sudirman',
                tujuan: 'Jl. Rumah Sakit'
            },
            {
                id: 5,
                asal: 'Jl. Rumah Sakit',
                tujuan: 'Pasar Manis'
            },
            {
                id: 6,
                asal: 'Pasar Manis',
                tujuan: 'Terminal Ciamis'
            },
        ]
    },
]

export default angkot