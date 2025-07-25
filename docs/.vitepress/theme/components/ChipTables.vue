<template>
    <div class="chips-pic" style="margin-top: 20px;">
        <img :src="chipData.ext_info.pic" />
    </div>
    <div class="chip-actions">
        <el-button type="primary" @click="toggleCompare">
            {{ isComparing ? $t('chips.buttons.remove_compare') : $t('chips.buttons.add_compare') }}
        </el-button>
    </div>
    <div class="chip-table">
        <h3>{{ $t('chips.basic.title') }}</h3>
        <el-row v-for="(item, key) in props.fields.basic">
            <el-col :span="10"><div>{{ $t(`chips.basic.${key}`) }}</div></el-col>
            <el-col :span="10">
                <div v-if="key === 'market'">
                    <span v-if="chipData.basic[key] == 1">{{ $t('chips.basic.market_type.desktop') }}</span>
                    <span v-else-if="chipData.basic[key] == 2">{{ $t('chips.basic.market_type.mobile') }}</span>
                    <span v-else-if="chipData.basic[key] == 3">{{ $t('chips.basic.market_type.server') }}</span>
                    <span v-else-if="chipData.basic[key] == 4">{{ $t('chips.basic.market_type.embedded') }}</span>
                </div>
                <div v-else>{{ chipData.basic[key] }}</div>
            </el-col>
        </el-row>
    </div>

    <div class="chip-table">
        <h3>{{ $t('chips.cpu.title') }}</h3>
        <el-row v-for="(item, key) in props.fields.cpu" :key="key">
            <el-col :span="10"><div>{{ $t(`chips.cpu.${key}`) }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu[key] }}</div></el-col>
        </el-row>
    </div>

    <div class="chip-table">
        <h3>{{ $t('chips.gpu.title') }}</h3>
        <el-row v-for="(item, key) in props.fields.gpu" :key="key">
            <el-col :span="10"><div>{{ $t(`chips.gpu.${key}`) }}</div></el-col>
            <el-col :span="10">
                <div v-if="key === 'available'">
                    <span v-if="chipData.gpu[key]">{{ $t('status.chips.yes') }}</span>
                    <span v-else>{{ $t('status.chips.no') }}</span>
                </div>
                <div v-else>{{ chipData.gpu[key] }}</div>
            </el-col>
        </el-row>
    </div>

    <div class="chip-table">
        <h3>{{ $t('chips.memory.title') }}</h3>
        <el-row v-for="(item, key) in props.fields.memory" :key="key">
            <el-col :span="10"><div>{{ $t(`chips.memory.${key}`) }}</div></el-col>
            <el-col :span="10">
                <div v-if="key === 'ecc'">
                    <span v-if="chipData.memory[key] == true">{{ $t('status.chips.supported') }}</span>
                    <span v-else-if="chipData.memory[key] == false">{{ $t('status.chips.unsupported') }}</span>
                </div>
                <div v-else>{{ chipData.memory[key] }}</div>
            </el-col>
        </el-row>
    </div>

    <div class="chip-table">
        <h3>{{ $t('chips.exp.title') }}</h3>
        <el-row v-for="(item, key) in props.fields.exp" :key="key">
            <el-col :span="10">
                <div v-if="key === 'd2d'">{{ $t(`chips.exp.d2d.title`) }}</div>
                <div v-else-if="key === 'd2d_name'">{{ $t(`chips.exp.d2d.d2d_name`) }}</div>
                <div v-else>{{ $t(`chips.exp.${key}`) }}</div>
            </el-col>
            <el-col :span="10">
                <div v-if="key === 'd2d'">
                    <span v-if="chipData.exp[key] == true">{{ $t('status.chips.supported') }}</span>
                    <span v-else-if="chipData.exp[key] == false">{{ $t('status.chips.unsupported') }}</span>
                </div>
                <div v-else-if="key === 'd2d_name'">
                    <span v-if="chipData.exp[key] == 'lcl'">{{ $t('chips.exp.d2d.lcl') }}</span>
                    <span v-else-if="chipData.exp[key] == 'ccnuma'">ccNUMA</span>
                    <span v-else>N/A</span>
                </div>
                <div v-else>{{ chipData.exp[key] || "N/A" }}</div>
            </el-col>
        </el-row>
    </div>

    <div class="chip-table">
        <h3>{{ $t('chips.package.title') }}</h3>
        <el-row v-for="(item, key) in props.fields.package" :key="key">
            <el-col :span="10">
                <div v-if="key === 't_case'">T<sub>CASE</sub></div>
                <div v-else-if="key === 't_junction'">T<sub>JUNCTION</sub></div>
                <div v-else>{{ $t(`chips.package.${key}`) }}</div>
            </el-col>
            <el-col :span="10">
                <div>{{ chipData.package[key] || "N/A" }}</div>
            </el-col>
        </el-row>
    </div>

    <div class="chip-table">
        <h3>{{ $t('chips.power.title') }}</h3>
        <el-row v-for="(item, key) in props.fields.power" :key="key">
            <el-col :span="10">
                <div>{{ $t(`chips.power.${key}`) }}</div>
            </el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.power[key] == true">{{ $t('status.chips.supported') }}</span>
                    <span v-else-if="chipData.power[key] == false">{{ $t('status.chips.unsupported') }}</span>
                </div>
            </el-col>
        </el-row>
    </div>

    <div class="chip-table">
        <h3>{{ $t('chips.tech.title') }}</h3>
        <el-row v-for="(item, key) in props.fields.technologies" :key="key">
            <el-col :span="10"><div>{{ $t(`chips.tech.${key}`) }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.technologies[key] }}</div></el-col>
        </el-row>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";
    import chipsJson from "../../../data/chips.min.json";
    const current_lang = document.documentElement.lang;

    const props = defineProps({
        chips: String,
        fields: Object
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

.chip-table div{
    height: 40px;
}
</style>