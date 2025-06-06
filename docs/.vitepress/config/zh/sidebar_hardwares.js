const sidebar_hardwares = [
    { text: '首页', link: '/hardwares/index' },
    { text: 'Intel 产品', collapsed: true, items: [
        { text: 'Intel Xe 显卡 (i915/xe)', link: '/hardwares/intel/intelxe' },
        { text: 'Intel 无线网卡 (iwlwifi)', link: '/hardwares/intel/iwlwifi' }
    ]},
    { text: 'AMD 显卡 (AMDGPU)', link: '/hardwares/amdgpu' },
    { text: 'NVIDIA 显卡', link: '/hardwares/nvidia' },
    { text: '摩尔线程显卡', link: '/hardwares/mthreads' },
    { text: '爱科微(AIC)无线网卡', link: '/hardwares/aicsemi' },
    { text: '苏州速通半导体(Senscomm)无线网卡', link: '/hardwares/senscomm' },
    { text: '裕太微电子(Motorcomm)有线网卡', link: '/hardwares/motorcomm' },
    { text: '网迅科技 (Wangxun/NetSwift) 有线网卡', link: '/hardwares/netswift' }
]

export { sidebar_hardwares }