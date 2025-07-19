<template>
    <div class="chips-pic" style="margin-top: 20px;">
        <img :src="chipData.ext_info.pic" />
    </div>
    <div class="chip-actions">
        <el-button type="primary" @click="toggleCompare">
            {{ isComparing ? '移除对比' : '加入对比' }}
        </el-button>
    </div>
    <div id="cpu-table-basic">
        <h3>基本信息</h3>
        <el-row>
            <el-col :span="10"><div>产品名称</div></el-col>
            <el-col :span="10"><div>{{ chipData.basic.name }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>产品系列</div></el-col>
            <el-col :span="10"><div>{{ chipData.basic.series }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>市场定位</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.basic.market == true">桌面</span>
                    <span v-else-if="chipData.basic.market == 2">移动</span>
                    <span v-else-if="chipData.basic.market == 3">服务器</span>
                    <span v-else-if="chipData.basic.market == 4">嵌入式</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>峰值运算速度</div></el-col>
            <el-col :span="10"><div>{{ chipData.basic.tops }}</div></el-col>
        </el-row>
    </div>

    <div id="cpu-table-cpuspec">
        <h3>CPU 规格</h3>
        <el-row>
            <el-col :span="10"><div>核心数</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.cores }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>线程数</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.threads }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>微体系结构</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.arch }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>最高频率</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.freq }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>一级指令缓存</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.l1_inst_cache }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>一级数据缓存</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.l1_data_cache }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>二级缓存(合计)</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.l2_cache }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>三级缓存(共享)</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.l3_cache }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>典型电压</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.voltage }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>典型功耗</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.tpc }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>热设计功耗</div></el-col>
            <el-col :span="10"><div>{{ chipData.cpu.tdp }}</div></el-col>
        </el-row>
    </div>

    <div id="cpu-table-gpuspec">
        <h3>GPU 规格</h3>
        <el-row>
            <el-col :span="10"><div>是否配备 GPU</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.gpu.available == true">是</span>
                    <span v-else-if="chipData.gpu.available == false">否</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>GPU 名称</div></el-col>
            <el-col :span="10"><div>{{ chipData.gpu.name }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>OpenGL</div></el-col>
            <el-col :span="10"><div>{{ chipData.gpu.opengl }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>OpenGL ES</div></el-col>
            <el-col :span="10"><div>{{ chipData.gpu.opengl_es }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>OpenCL</div></el-col>
            <el-col :span="10"><div>{{ chipData.gpu.opencl }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>GPU 峰值运算速度</div></el-col>
            <el-col :span="10"><div>{{ chipData.gpu.tops }}</div></el-col>
        </el-row>
    </div>

    <div id="cpu-table-memoryspec">
        <h3>内存规格</h3>
        <el-row>
            <el-col :span="10"><div>最大内存大小</div></el-col>
            <el-col :span="10"><div>{{ chipData.memory.max }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>内存类型</div></el-col>
            <el-col :span="10"><div>{{ chipData.memory.types }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>最大内存通道数</div></el-col>
            <el-col :span="10"><div>{{ chipData.memory.channels }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>ECC 内存</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.memory.ecc == true">支持</span>
                    <span v-else-if="chipData.memory.ecc == false">不支持</span>
                </div>
            </el-col>
        </el-row>
    </div>

    <div id="cpu-table-expspec">
        <h3>扩展性</h3>
        <el-row>
            <el-col :span="10"><div>I/O 通信接口</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.name }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>I/O 通信修订版</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.rev }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>通道数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.lanes }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>USB 3.1 数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.usb_5gbps }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>USB 2.0 数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.usb2 }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>SATA 3 数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.sata3 }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>网口数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.eth }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>SPI 数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.spi }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>UART 数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.uart }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>I2C 数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.i2c }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>GPIO 数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.gpio }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>AVS 数量</div></el-col>
            <el-col :span="10"><div>{{ chipData.exp.avs }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>片间互连</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.exp.d2d == true">支持</span>
                    <span v-else-if="chipData.exp.d2d == false">不支持</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>片间互连技术</div></el-col>
            <el-col :span="10">
                <div v-if="chipData.exp.d2d_name == 'lcl'">龙链</div>
                <div v-if="chipData.exp.d2d_name == 'ccnuma'">ccNUMA</div>
                <div v-else>N/A</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>其他接口</div></el-col>
            <el-col :span="10">
                <div v-if="chipData.exp.other">{{ chipData.exp.other }}</div>
                <div v-else>N/A</div>
            </el-col>
        </el-row>
    </div>

    <div id="cpu-table-package">
        <h3>封装规格</h3>
        <el-row>
            <el-col :span="10"><div>插槽</div></el-col>
            <el-col :span="10"><div>{{ chipData.package.socket }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>壳温范围</div></el-col>
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
            <el-col :span="10"><div>封装尺寸</div></el-col>
            <el-col :span="10"><div>{{ chipData.package.size }}</div></el-col>
        </el-row>
    </div>

    <div id="cpu-table-power">
        <h3>功耗管理</h3>
        <el-row>
            <el-col :span="10"><div>时钟动态关闭</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.power.shutdown_of_the_clocks == true">支持</span>
                    <span v-else-if="chipData.power.shutdown_of_the_clocks == false">不支持</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>时钟动态变频</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.power.frequency_scaling == true">支持</span>
                    <span v-else-if="chipData.power.frequency_scaling == false">不支持</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>主电压域动态调压</div></el-col>
            <el-col :span="10">
                <div>
                    <span v-if="chipData.power.voltage_scaling == true">支持</span>
                    <span v-else-if="chipData.power.voltage_scaling == false">不支持</span>
                </div>
            </el-col>
        </el-row>
    </div>

    <div id="cpu-table-tech">
        <h3>先进技术</h3>
        <el-row>
            <el-col :span="10"><div>指令集</div></el-col>
            <el-col :span="10"><div>{{ chipData.technologies.set }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"><div>指令集扩展</div></el-col>
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
                alert('Maximum 4 chips can be compared at once');
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

#cpu-table-basic div,
#cpu-table-cpuspec div,
#cpu-table-gpuspec div,
#cpu-table-memoryspec div,
#cpu-table-expspec div,
#cpu-table-package div,
#cpu-table-power div,
#cpu-table-tech div {
    height: 40px;
}
</style>