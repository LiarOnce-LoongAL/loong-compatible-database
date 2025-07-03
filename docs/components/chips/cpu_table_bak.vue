<template>


    <div id="cpu_table_expspec">
        <h3>扩展性</h3>
        <el-row>
            <el-col :span="10"><div>I/O 通信接口</div></el-col>
            <el-col :span="10"><div>通道数量</div></el-col>
            <el-col :span="10"><div>SPI 数量</div></el-col>
            <el-col :span="10"><div>UART 数量</div></el-col>
            <el-col :span="10"><div>I2C 数量</div></el-col>
            <el-col :span="10"><div>GPIO 数量</div></el-col>
            <el-col :span="10"><div>是否支持龙链</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ chipData.exp.name }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.lanes }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.spi }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.uart }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.i2c }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.gpio }}</div></el-col>
            <el-col :span="10"><div>
                <span v-if="chipData.exp.d2d == 1">是</span>
                <span v-else-if="chipData.exp.d2d == 0">否</span>
            </div></el-col>
        </el-row>
    </div>

    <div id="cpu_table_package">
        <h3>封装规格</h3>
        <el-row>
            <el-col :span="10"><div>插槽</div></el-col>
            <el-col :span="10"><div>壳温范围</div></el-col>
            <el-col :span="10"><div>T<sub>CASE</sub></div></el-col>
            <el-col :span="10"><div>T<sub>JUNCTION</sub></div></el-col>
            <el-col :span="10"><div>封装尺寸</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ chipData.package.socket }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.package.temperature }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.package.t_case }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.package.t_junction }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.package.size }}</div></el-col>
        </el-row>
    </div>

    <div id="cpu_table_power">
        <h3>功耗管理</h3>
        <el-row>
            <el-col :span="10"><div>时钟动态关闭</div></el-col>
            <el-col :span="10"><div>时钟动态变频</div></el-col>
            <el-col :span="10"><div>主电压域动态调压</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>
                <span v-if="chipData.power.shutdown_of_the_clocks == 1">是</span>
                <span v-else-if="chipData.power.shutdown_of_the_clocks == 0">否</span>
            </div></el-col>
            <el-col :span="10"><div>
                <span v-if="chipData.power.frequency_scaling == 1">是</span>
                <span v-else-if="chipData.power.frequency_scaling == 0">否</span>
            </div></el-col>
            <el-col :span="10"><div>
                <span v-if="chipData.power.voltage_scaling == 1">是</span>
                <span v-else-if="chipData.power.voltage_scaling == 0">否</span>
            </div></el-col>
        </el-row>
    </div>

    <div id="cpu_table_tech">
        <h3>先进技术</h3>
        <el-row>
            <el-col :span="10"><div>指令集</div></el-col>
            <el-col :span="10"><div>指令集扩展</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>{{ chipData.technologies.set }}</div></el-col>
            <el-col :span="10"><div>{{ chipData.technologies.set_extensions }}</div></el-col>
        </el-row>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import chipsJson from "../../data/chips.min.json";
    const current_lang = document.documentElement.lang;

    const props = defineProps({
        chips: String
    });
    const chipData = ref(chipsJson.cpu[props.chips]);
</script>

<style lang="css" scoped>
.el-container{
    padding: 20px;
}

.el-row{
    /* --el-row-width: 300px; */
}

#cpu_table_basic div,
#cpu_table_cpuspec div,
#cpu_table_gpuspec div,
#cpu_table_memoryspec div,
#cpu_table_expspec div,
#cpu_table_package div,
#cpu_table_power div,
#cpu_table_tech div {
    height: 40px;
}
</style>