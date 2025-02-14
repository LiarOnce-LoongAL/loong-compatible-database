const sidebar_hardwares = [
    { text: 'Home', link: '/en/hardwares/index' },
    { text: 'Intel Products', collapsed: true, items: [
        { text: 'Intel Xe Graphics (i915/xe)', link: '/en/hardwares/intel/intelxe' },
        { text: 'Intel Wireless (iwlwifi)', link: '/en/hardwares/intel/iwlwifi' },
        { text: 'Intel SSDs', link: '/en/hardwares/intel/intelssd' }
    ]},
    { text: 'AMD Graphics (AMDGPU)', link: '/en/hardwares/amdgpu' },
    { text: 'NVIDIA Graphics', link: '/en/hardwares/nvidia' },
    { text: 'Moore Threads Graphics', link: '/en/hardwares/mthreads' },
    { text: 'AIC Wireless', link: '/en/hardwares/aicsemi' },
    { text: 'Senscomm Wireless', link: '/en/hardwares/senscomm' },
    { text: 'Motorcomm Ethernet', link: '/en/hardwares/motorcomm' },
    { text: 'Wangxun/NetSwift Ethernet', link: '/en/hardwares/netswift' }
]

export { sidebar_hardwares }