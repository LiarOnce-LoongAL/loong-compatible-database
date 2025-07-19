<template>
    <div v-if="compareChips.length > 0" class="compare-container">
        <div class="compare-table">
            <div class="compare-row compare-header">
                <div class="compare-cell"></div>
                <div v-for="chip in compareChips" :key="chip.basic.name" class="compare-cell">
                    <img :src="chip.ext_info.pic" style="max-width: 100px; margin-bottom: 10px" />
                    <h3>{{ chip.basic.name }}</h3>
                    <el-button type="danger" size="small" @click="removeFromCompare(chip.basic.name)"> 删除 </el-button>
                </div>
            </div>

            <div class="compare-section">
                <h3>基本信息</h3>
                <div class="compare-row">
                    <div class="compare-cell">产品系列</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'basic.series') }"
                    >
                        {{ chip.basic.series }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">市场定位</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'basic.market') }"
                    >
                        <span v-if="chip.basic.market == 1">桌面</span>
                        <span v-else-if="chip.basic.market == 2">移动</span>
                        <span v-else-if="chip.basic.market == 3">服务器</span>
                        <span v-else-if="chip.basic.market == 4">嵌入式</span>
                    </div>
                </div>
            </div>

            <div class="compare-section">
                <h3>CPU 规格</h3>
                <div class="compare-row">
                    <div class="compare-cell">核心数</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.cores') }"
                    >
                        {{ chip.cpu.cores }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">线程数</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.threads') }"
                    >
                        {{ chip.cpu.threads }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">微体系结构</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.arch') }"
                    >
                        {{ chip.cpu.arch }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">最高频率</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.freq') }"
                    >
                        {{ chip.cpu.freq }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">一级指令缓存</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.l1_inst_cache') }"
                    >
                        {{ chip.cpu.l1_inst_cache }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">一级数据缓存</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.l1_data_cache') }"
                    >
                        {{ chip.cpu.l1_data_cache }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">二级缓存(合计)</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.l2_cache') }"
                    >
                        {{ chip.cpu.l2_cache }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">三级缓存(共享)</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.l3_cache') }"
                    >
                        {{ chip.cpu.l3_cache }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">典型电压</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.voltage') }"
                    >
                        {{ chip.cpu.voltage }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">典型功耗</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.tpc') }"
                    >
                        {{ chip.cpu.tpc }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">热设计功耗</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'cpu.tdp') }"
                    >
                        {{ chip.cpu.tdp }}
                    </div>
                </div>
            </div>

            <div class="compare-section">
                <h3>GPU 规格</h3>
                <div class="compare-row">
                    <div class="compare-cell">是否配备 GPU</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'gpu.available') }"
                    >
                        <span v-if="chip.gpu.available == true">是</span>
                        <span v-else-if="chip.gpu.available == false">否</span>
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">GPU 名称</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'gpu.name') }"
                    >
                        {{ chip.gpu.name }}
                    </div>
                </div>
            </div>

            <div class="compare-section">
                <h3>扩展性</h3>
                <div class="compare-row">
                    <div class="compare-cell">I/O 通信接口</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.name') }"
                    >
                        {{ chip.exp.name }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">I/O 通信修订版</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.rev') }"
                    >
                        {{ chip.exp.rev }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">通道数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.lanes') }"
                    >
                        {{ chip.exp.lanes }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">USB 3.1 数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.usb_5gbps') }"
                    >
                        {{ chip.exp.usb_5gbps }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">USB 2.0 数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.usb2') }"
                    >
                        {{ chip.exp.usb2 }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">SATA 3 数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.sata3') }"
                    >
                        {{ chip.exp.sata3 }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">网口数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.eth') }"
                    >
                        {{ chip.exp.eth }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">SPI 数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.spi') }"
                    >
                        {{ chip.exp.spi }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">UART 数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.uart') }"
                    >
                        {{ chip.exp.uart }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">I2C 数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.i2c') }"
                    >
                        {{ chip.exp.i2c }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">GPIO 数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.gpio') }"
                    >
                        {{ chip.exp.gpio }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">AVS 数量</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.avs') }"
                    >
                        {{ chip.exp.avs }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">片间互连</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.d2d') }"
                    >
                        <span v-if="chip.exp.d2d == true">是</span>
                        <span v-else-if="chip.exp.d2d == false">否</span>
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">片间互连技术</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.d2d_name') }"
                    >
                        <span v-if="chip.exp.d2d_name == 'lcl'">龙链</span>
                        <span v-else-if="chip.exp.d2d_name == 'ccnuma'">ccNUMA</span>
                        <span v-else>N/A</span>
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">其他接口</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'exp.other') }"
                    >
                        <span v-if="chip.exp.other">{{ chip.exp.other }}</span>
                        <span v-else>N/A</span>
                    </div>
                </div>
            </div>

            <div class="compare-section">
                <h3>封装规格</h3>
                <div class="compare-row">
                    <div class="compare-cell">插槽</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'package.socket') }"
                    >
                        {{ chip.package.socket }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">壳温范围</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'package.temperature') }"
                    >
                        {{ chip.package.temperature }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">T<sub>CASE</sub></div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'package.t_case') }"
                    >
                        {{ chip.package.t_case }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">T<sub>JUNCTION</sub></div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'package.t_junction') }"
                    >
                        {{ chip.package.t_junction }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">封装尺寸</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'package.size') }"
                    >
                        {{ chip.package.size }}
                    </div>
                </div>
            </div>

            <div class="compare-section">
                <h3>功耗管理</h3>
                <div class="compare-row">
                    <div class="compare-cell">时钟动态关闭</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'power.shutdown_of_the_clocks') }"
                    >
                        <span v-if="chip.power.shutdown_of_the_clocks == true">支持</span>
                        <span v-else-if="chip.power.shutdown_of_the_clocks == false">不支持</span>
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">时钟动态变频</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'power.frequency_scaling') }"
                    >
                        <span v-if="chip.power.frequency_scaling == true">支持</span>
                        <span v-else-if="chip.power.frequency_scaling == false">不支持</span>
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">主电压域动态调压</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'power.voltage_scaling') }"
                    >
                        <span v-if="chip.power.voltage_scaling == true">支持</span>
                        <span v-else-if="chip.power.voltage_scaling == false">不支持</span>
                    </div>
                </div>
            </div>

            <div class="compare-section">
                <h3>先进技术</h3>
                <div class="compare-row">
                    <div class="compare-cell">指令集</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'technologies.set') }"
                    >
                        {{ chip.technologies.set }}
                    </div>
                </div>
                <div class="compare-row">
                    <div class="compare-cell">指令集扩展</div>
                    <div
                        v-for="chip in compareChips"
                        class="compare-cell"
                        :class="{ 'same-as-first': isSame(chip, 'technologies.set_extensions') }"
                    >
                        {{ chip.technologies.set_extensions }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="compare-container">
        <p>请从左侧选择产品并添加，以在此查看对比结果</p>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted } from "vue";
    import chipsJson from "../../../../data/chips.min.json";

    const compareList = ref(JSON.parse(localStorage.getItem("cpuCompareList")) || []);

    const compareChips = computed(() => {
        return compareList.value.map(chipId => chipsJson.cpu[chipId]);
    });

    const removeFromCompare = chipName => {
        compareList.value = compareList.value.filter(id => chipsJson.cpu[id].basic.name !== chipName);
        localStorage.setItem("cpuCompareList", JSON.stringify(compareList.value));
    };

    const isSame = (chip, fieldPath) => {
        if (!compareChips.value.length || !fieldPath) return true;
        const firstValue = getFieldValue(compareChips.value[0], fieldPath);
        const currentValue = getFieldValue(chip, fieldPath);
        return JSON.stringify(firstValue) === JSON.stringify(currentValue);
    };

    const getFieldValue = (chip, path) => {
        return path.split(".").reduce((obj, key) => (obj ? obj[key] : null), chip);
    };
</script>

<style scoped>
    .compare-container {
        margin: 40px 0;
        /* overflow: hidden; */
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .compare-table {
        display: inline-flex;
        flex-direction: column;
        min-width: 100%;
        border: 1px solid #ebeef5;
        border-radius: 4px;
    }

    .compare-section {
        border-bottom: 1px solid #ebeef5;
    }

    .compare-section h3 {
        background-color: #f5f7fa;
        padding: 10px 15px;
        margin: 0;
    }

    .compare-row {
        display: flex;
    }

    .compare-header {
        background-color: #f5f7fa;
        font-weight: bold;
    }

    .compare-cell {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid #ebeef5;
        min-width: 200px;
        position: relative;
    }

    .compare-header .compare-cell {
        background-color: inherit !important; /* 强制覆盖高亮样式，以解决行首被错误高亮 */
        font-weight: normal !important;
    }

    .compare-cell:last-child {
        border-right: none;
    }

    .compare-cell:not(:first-child):not(.same-as-first) {
        background-color: #fff8e1;
    }
</style>
