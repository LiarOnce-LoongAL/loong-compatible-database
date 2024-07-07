const filtersStatus = [
    { text: "未知", value: 0 },
    { text: "兼容", value: 1 },
    { text: "有限兼容", value: 2 },
    { text: "新世界可用", value: 3 },
    { text: "不兼容", value: -1 },
];

const filtersHardwareType = [
    { text: "内存(UDIMM)", value: "Memory_UDIMM" },
    { text: "内存(UDIMM/ECC)", value: "Memory_UDIMMECC" },
    { text: "内存(RDIMM)", value: "Memory_RDIMM" },
    { text: "内存(SO-DIMM)", value: "Memory_SODIMM" },
    { text: "显卡", value: "GPU" },
    { text: "有线网卡", value: "Ethernet" },
    { text: "无线网卡", value: "Wireless" },
    { text: "固态硬盘(SATA)", value: "SSD_SATA" },
    { text: "固态硬盘(NVMe)", value: "SSD_NVMe" },
    { text: "其他存储类设备(SATA)", value: "Storage_SATA" },
    { text: "键盘", value: "Keyboard" },
    { text: "鼠标", value: "Mouse" },
    { text: "手柄控制器", value: "Gamepad" },
    { text: "打印机", value: "Printer" },
    { text: "扫描仪", value: "Scanner" },
    { text: "固件", value: "Firmware" }
];

export { filtersStatus, filtersHardwareType }