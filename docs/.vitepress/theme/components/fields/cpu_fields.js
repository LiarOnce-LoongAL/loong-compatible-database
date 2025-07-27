export default {
    basic: {
        name: 'name',
        series: 'series',
        market: 'market'
    },
    cpu: {
        cores: 'cores',
        threads: 'threads',
        arch: 'arch',
        freq: 'freq',
        l1_inst_cache: 'l1_inst_cache',
        l1_data_cache: 'l1_data_cache',
        l2_cache: 'l2_cache',
        l3_cache: 'l3_cache',
        voltage: 'voltage',
        tpc: 'tpc',
        tdp: 'tdp'
    },
    gpu: {
        available: 'available',
        name: 'name'
    },
    memory: {
        max: 'max',
        types: 'types',
        channels: 'channels',
        ecc: 'ecc'
    },
    exp: {
        io_name: 'io_name',
        io_rev: 'io_rev',
        lanes: 'lanes',
        usb_5gbps: 'usb_5gbps',
        usb2: 'usb2',
        sata: 'sata',
        eth: 'eth',
        spi: 'spi',
        uart: 'uart',
        i2c: 'i2c',
        avs: 'avs',
        gpio: 'gpio',
        d2d: 'd2d',
        d2d_name: 'd2d_name'
    },
    package: {
        socket: 'socket',
        temperature: 'temperature',
        t_case: 't_case',
        t_junction: 't_junction',
        size: 'size'
    },
    power: {
        shutdown_of_the_clocks: 'shutdown_of_the_clocks',
        frequency_scaling: 'frequency_scaling',
        voltage_scaling: 'voltage_scaling'
    },
    technologies: {
        set: 'set',
        set_extensions: 'set_extensions'
    }
}