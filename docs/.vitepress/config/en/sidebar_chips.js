const sidebar_chips = [
    {
        text: "CPU",
        collapsed: false,
        items: [
            { text: 'CPU Compare', link: '/en/chips/cpu/cpucompare' },
            {
                text: '3A6000',
                base: "/en/chips/cpu/3a6000/",
                items: [
                    { text: '3A6000-HV', link: '3A6000-HV' },
                    { text: '3A6000-BLL', link: '3A6000-BLL' },
                    { text: '3A6000-LL', link: '3A6000-LL' },
                    { text: '3A6000-i', link: '3A6000-i' },
                    { text: '3A6000M', link: '3A6000M' },
                ]
            },
            {
                text: '3B6000',
                base: "/en/chips/cpu/3b6000/",
                items: [
                    { text: '3B6000-8(Tentative)', link: '3B6000-8' },
                    { text: '3B6000-12(Tentative)', link: '3B6000-12' },
                    { text: '3B6000M', link: '3B6000M' }
                ]
            },
            {
                text: '3C6000',
                base: "/en/chips/cpu/3c6000/",
                items: [
                    { text: '3C6000/S', link: '3C6000-S' },
                    { text: '3C6000/D', link: '3C6000-D' },
                    { text: '3C6000/Q', link: '3C6000-Q' }
                ]
            },
            {
                text: '3A5000',
                base: "/en/chips/cpu/3a5000/",
                items: [
                    { text: '3A5000-HV', link: '3A5000-HV' },
                    { text: '3A5000-LL', link: '3A5000-LL' },
                    { text: '3A5000-i', link: '3A5000-i' },
                    { text: '3A5000-iHV', link: '3A5000-iHV' },
                    { text: '3A5000M', link: '3A5000M' },
                    { text: '3B5000', link: '3B5000' }
                ]
            },
        ]
    }
];

export { sidebar_chips };
