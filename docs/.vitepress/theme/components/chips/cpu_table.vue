<template>
    <div class="chips-pic" style="margin-top: 20px;">
        <img :src="chipData.ext_info.pic" />
    </div>
    <div class="chip-actions">
        <el-button type="primary" @click="toggleCompare">
            {{ isComparing ? $t('chips.buttons.remove_compare') : $t('chips.buttons.add_compare') }}
        </el-button>
    </div>
    <div class="cpu-table">
        <h3>{{ $t('chips.basic.title') }}</h3>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.basic.name') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.basic.name }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.basic.series') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.basic.series }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.basic.market') }}</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.basic.market == 1"> {{ $t('chips.basic.market_type.desktop') }}</span>
                    <span v-else-if="chipData.basic.market == 2">{{ $t('chips.basic.market_type.mobile') }}</span>
                    <span v-else-if="chipData.basic.market == 3">{{ $t('chips.basic.market_type.server') }}</span>
                    <span v-else-if="chipData.basic.market == 4">{{ $t('chips.basic.market_type.embedded') }}</span>
                </div>
            </el-col>
        </el-row>
    </div>

    <div class="cpu-table">
        <h3>{{ $t('chips.cpu.title') }}</h3>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.cores') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.cores }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.threads') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.threads }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.arch') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.arch }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.freq') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.freq }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.l1_inst') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.l1_inst_cache }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.l1_data') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.l1_data_cache }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.l2') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.l2_cache }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.l3') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.l3_cache }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.voltage') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.voltage }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.tpc') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.tpc }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.cpu.tdp') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.tdp }}</div></el-col>
        </el-row>
    </div>

    <div class="cpu-table">
        <h3>{{ $t('chips.gpu.title') }}</h3>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.gpu.avail') }}</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.gpu.available == true">{{ $t('status.chips.yes') }}</span>
                    <span v-else-if="chipData.gpu.available == false">{{ $t('status.chips.no') }}</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.gpu.name') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.gpu.name }}</div></el-col>
        </el-row>
    </div>

    <div class="cpu-table">
        <h3>{{ $t('chips.memory.title') }}</h3>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.memory.max') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.memory.max }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.memory.types') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.memory.types }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.memory.channels') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.memory.channels }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.memory.ecc') }}</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.memory.ecc == true">{{ $t('status.chips.supported') }}</span>
                    <span v-else-if="chipData.memory.ecc == false">{{ $t('status.chips.unsupported') }}</span>
                </div>
            </el-col>
        </el-row>
    </div>

    <div class="cpu-table">
        <h3>{{ $t('chips.exp.title') }}</h3>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.exp.io_name') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.name }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.exp.io_rev') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.rev }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.exp.lanes') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.lanes }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>USB 3.1 {{ $t('chips.exp.num') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.usb_5gbps }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>USB 2.0 {{ $t('chips.exp.num') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.usb2 }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>SATA{{ $t('chips.exp.num') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.sata }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.exp.eth') }}{{ $t('chips.exp.num') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.eth }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>SPI {{ $t('chips.exp.num') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.spi }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>UART {{ $t('chips.exp.num') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.uart }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>I2C {{ $t('chips.exp.num') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.i2c }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>GPIO {{ $t('chips.exp.num') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.gpio }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>AVS {{ $t('chips.exp.num') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.avs }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.exp.d2d.title') }}</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.exp.d2d == true">{{ $t('status.chips.supported') }}</span>
                    <span v-else-if="chipData.exp.d2d == false">{{ $t('status.chips.unsupported') }}</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.exp.d2d.tech') }}</div></el-col>
            <el-col :span="10">
                <div v-if="chipData.exp.d2d_name == 'lcl'">{{ $t('chips.exp.d2d.lcl') }}</div>
                <div v-if="chipData.exp.d2d_name == 'ccnuma'">ccNUMA</div>
                <div v-else>N/A</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.exp.other') }}</div></el-col>
            <el-col :span="10">
                <div v-if="chipData.exp.other">{{ chipData.exp.other }}</div>
                <div v-else>N/A</div>
            </el-col>
        </el-row>
    </div>

    <div class="cpu-table">
        <h3>{{ $t('chips.package.title') }}</h3>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.package.socket') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.package.socket }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.package.temp') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.package.temperature }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>T<sub>CASE</sub></div></el-col>
            <el-col :span="10"><div>{{ chipData.package.t_case }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>T<sub>JUNCTION</sub></div></el-col>
            <el-col :span="10"><div>{{ chipData.package.t_junction }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.package.size') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.package.size }}</div></el-col>
        </el-row>
    </div>

    <div class="cpu-table">
        <h3>{{ $t('chips.power.title') }}</h3>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.power.shutdown_of_the_clocks') }}</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.power.shutdown_of_the_clocks == true">{{ $t('status.chips.supported') }}</span>
                    <span v-else-if="chipData.power.shutdown_of_the_clocks == false">{{ $t('status.chips.unsupported') }}</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.power.frequency_scaling') }}</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.power.frequency_scaling == true">{{ $t('status.chips.supported') }}</span>
                    <span v-else-if="chipData.power.frequency_scaling == false">{{ $t('status.chips.unsupported') }}</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.power.voltage_scaling') }}</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.power.voltage_scaling == true">{{ $t('status.chips.supported') }}</span>
                    <span v-else-if="chipData.power.voltage_scaling == false">{{ $t('status.chips.unsupported') }}</span>
                </div>
            </el-col>
        </el-row>
    </div>

    <div class="cpu-table">
        <h3>{{ $t('chips.tech.title') }}</h3>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.tech.set') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.technologies.set }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ $t('chips.tech.set_ext') }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.technologies.set_extensions }}</div></el-col>
        </el-row>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";
    import chipsJson from "../../../../data/chips.min.json";
    const current_lang = document.documentElement.lang;

    const props = defineProps({
        chips: String
    });
    const chipData = ref(chipsJson.cpu[props.chips]);

    const compareList = ref(JSON.parse(localStorage.getItem('cpuCompareList') || '[]'));
    
    const isComparing = computed(() => {
        return compareList.value.includes(props.chips);
    });

    const toggleCompare = () => {
        if (isComparing.value) {
            compareList.value = compareList.value.filter(id => id !== props.chips);
        } else {
            if (compareList.value.length < 4) { // Limit to 4 chips for comparison
                compareList.value.push(props.chips);
            } else {
                alert('最多支持 4 款产品进行比对');
                return;
            }
        }
        localStorage.setItem('cpuCompareList', JSON.stringify(compareList.value));
    };
</script>

<style lang="css" scoped>
.el-row{
    padding: 20px;
}

.cpu-table div{
    height: 40px;
}
</style>