---
outline: deep
prev: false
next: false
---
# NVIDIA 显卡

## Fermi & Kepler

这两代显卡无法正常加载 VBIOS GOP，在加载过程中将会输出类似于以下的日志（此处为 GeForce GT 710 的输出）：

```log
[    3.984306] CPU 0 Unable to handle kernel paging request at virtual address 0000000000000010, era == ffff8000030c4114, ra == ffff8000030c
4104
[    3.996952] Oops[#1]:
[    3.999204] CPU: 0 UID: 0 PID: 109 Comm: kworker/0:2 Tainted: G        W   E      6.14.11-aosc-main #1
[    3.999208] Tainted: [W]=WARN, [E]=UNSIGNED_MODULE
[    4.013211] Hardware name: Loongson Loongson-3A6000-7A2000-1w-V0.1-EVB/Loongson-3A6000-7A2000-1w-EVB-V1.21, BIOS Loongson-UDK2018-V4.0.05
823-stable202408
[    4.013213] Workqueue: events work_for_cpu_fn
[    4.013215] pc ffff8000030c4114 ra ffff8000030c4104 tp 9000000109060000 sp 9000000109063bd0
[    4.013217] a0 0000000000000000 a1 0000000000000000 a2 0000000000000000 a3 0000000000000000
[    4.047871] a4 0000000000000000 a5 0000000000000000 a6 0000000000000000 a7 0000000000000000
[    4.056170] t0 0000000000000000 t1 0000000000000001 t2 0000000000000000 t3 0000000000000000
[    4.064468] t4 0000000000000000 t5 0000000000000000 t6 0000000000000000 t7 0000000000000000
[    4.072765] t8 0000000000000000 u0 90000001088acc00 s9 000000000000406e s0 90000001088acc00
[    4.081063] s1 90000001004de558 s2 ffffffffffffffea s3 0000000000000002 s4 0000000000000060
[    4.089361] s5 000000000000826f s6 000000000000003c s7 000000000000006e s8 000000000000c06f
[    4.097658]    ra: ffff8000030c4104 nouveau_bo_unpin_locked+0x24/0xe0 [nouveau]
[    4.104995]   ERA: ffff8000030c4114 nouveau_bo_unpin_locked+0x34/0xe0 [nouveau]
[    4.112327]  CRMD: 000000b0 (PLV0 -IE -DA +PG DACF=CC DACM=CC -WE)
[    4.118472]  PRMD: 0000000c (PPLV0 +PIE +PWE)
[    4.122798]  EUEN: 00000000 (-FPE -SXE -ASXE -BTE)
[    4.127557]  ECFG: 00071c1d (LIE=0,2-4,10-12 VS=7)
[    4.132315] ESTAT: 00010000 [PIL] (IS= ECode=1 EsubCode=0)
[    4.137764]  BADV: 0000000000000010
[    4.141222]  PRID: 0014d000 (Loongson-64bit, Loongson-3A6000)
[    4.146928] Modules linked in: nouveau(E+) mlx5_core(E+) hid_generic(E) drm_gpuvm(E) gpu_sched(E) drm_exec(E) drm_ttm_helper(E) ttm(E) r8
169(E) sr_mod(E) i2c_algo_bit(E) drm_display_helper(E) cdrom(E) mlxfw(E) cec(E) rc_core(E) realtek(E) psample(E) led_class(E) be2iscsi(E) bn
x2i(E) cnic(E) uio(E) cxgb4i(E) cxgb4(E) tls(E) cxgb3i(E) cxgb3(E) mdio(E) libcxgbi(E)VBIOS GOP libcxgb(E) qla4xxx(E) iscsi_boot_sysfs(E) iscsi_tcp(E
) libiscsi_tcp(E) rpcrdma(E) sunrpc(E) rdma_ucm(E) ib_uverbs(E) ib_iser(E) libiscsi(E) scsi_transport_iscsi(E) ib_umad(E) rdma_cm(E) ib_ipoi
b(E) iw_cm(E) la_ow_syscall(E) i2c_dev(E) ib_cm(E) ib_core(E) nfnetlink(E) dmi_sysfs(E)
[    4.203050] Process kworker/0:2 (pid: 109, threadinfo=00000000e164b1d0, task=00000000a4471348)
[    4.211608] Stack : ffffffffffffffea 0000000000000000 90000001088acc00 ffff8000030c4200
[    4.219564]         ffffffffffffffea 90000001004de000 9000000129d21320 ffff80000310bba8
[    4.227521]         9000000129d21350 ffff800002f9c204 ffff800003121ee0 900000010004f000
[    4.235477]         90000001004de1c0 ffff800003200000 90000001004de000 ffff80000310be9c
[    4.243432]         90000001004de000 ffff8000030c0478 90000001004de228 e196bc6e8ed9dbef
[    4.251388]         0000000000000000 9000000101576940 900000010025a00d 90000001014bc000
[    4.259344]         900000000357d000 e196bc6e8ed9dbef 90000001014bc000 900000000bc151c0
[    4.267300]         90000001002ce2c0 0000000000000000 9000000100256cc0 900000010025a00d
[    4.275255]         90000001014bc000 ffff800003200000 90000001004de000 0000000000000000
[    4.283211]         9000000100543e50 ffff8000030c0b28 9000000101487800 e196bc6e8ed9dbef
[    4.291168]         ...
[    4.293591] Call Trace:
[    4.293593] [<ffff8000030c4114>] nouveau_bo_unpin_locked+0x34/0xe0 [nouveau]
[    4.303091] [<ffff8000030c41fc>] nouveau_bo_unpin+0x3c/0xa0 [nouveau]
[    4.309559] [<ffff80000310bba4>] nv84_fence_create+0x1c4/0x240 [nouveau]
[    4.316293] [<ffff80000310be98>] nvc0_fence_create+0x18/0x60 [nouveau]
[    4.322850] [<ffff8000030c0474>] nouveau_drm_remove+0x834/0xda0 [nouveau]
[    4.329665] [<ffff8000030c0b24>] nouveau_drm_probe+0x144/0x220 [nouveau]
[    4.336392] [<900000000102426c>] local_pci_probe+0x4c/0xe0
[    4.341840] [<90000000002b8f00>] work_for_cpu_fn+0x20/0x40
[    4.347287] [<90000000002be0fc>] process_one_work+0x19c/0x4a0
[    4.352994] [<90000000002bec48>] worker_thread+0x348/0x480
[    4.358442] [<90000000002cb204>] kthread+0x124/0x240
[    4.363371] [<90000000002422ec>] ret_from_kernel_thread+0x8/0x9c
[    4.369337]
[    4.370809] Code: 44001d80  28c602ec  0280040d <2400118c> 5800698d  0280080d  5800318d  28c06061  28c04077
[    4.380497]
[[    4.382026] ---[ end trace 0000000000000000 ]---
```