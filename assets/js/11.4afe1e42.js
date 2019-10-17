(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{235:function(_,v,a){"use strict";a.r(v);var t=a(2),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"操作系统理论知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统理论知识","aria-hidden":"true"}},[_._v("#")]),_._v(" 操作系统理论知识")]),_._v(" "),a("h1",{attrs:{id:"第一部分概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一部分概述","aria-hidden":"true"}},[_._v("#")]),_._v(" 第一部分概述")]),_._v(" "),a("p",[_._v("操作系统是作为计算机硬件和计算机用户之间的中介的程序。")]),_._v(" "),a("p",[_._v("操作系统的目的是为用户提供方便且有效地执行程序的环境。")]),_._v(" "),a("p",[_._v("操作系统是管理计算机硬件的软件（程序）。")]),_._v(" "),a("h2",{attrs:{id:"_1-1-操作系统能做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-操作系统能做什么","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.1 操作系统能做什么")]),_._v(" "),a("p",[_._v("计算机系统可以分为4个组成部分：计算机硬件、操作系统、系统程序与应用程序和用户。")]),_._v(" "),a("h2",{attrs:{id:"_1-2计算机系统组织"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2计算机系统组织","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2计算机系统组织")]),_._v(" "),a("h3",{attrs:{id:"_1-2-1-计算机系统操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-计算机系统操作","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.1 计算机系统操作")]),_._v(" "),a("p",[_._v("​\t   计算机运行时，需要运行一个初始化程序或引导程序，该程序通常位于ROM或EEPROM中，称为计算机硬件中的固件。它称初始化系统中的所有部分，包括CPU寄存器、设备控制器和内存内容。引导程序必须知道如何装入系统并开始执行系统，因此，引导程序必须定位操作系统内核并把它装入内存。")]),_._v(" "),a("p",[_._v("​\t\t事件的发生通常通过硬件或软件中断来表示，硬件可以随时通过系统总线向CPU发出信号，以触发中断。软件通过执行特别操作如系统调用（也称监视器调用）也能触发中断。")]),_._v(" "),a("h3",{attrs:{id:"_1-2-2-存储结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-存储结构","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.2 存储结构")]),_._v(" "),a("p",[_._v("​\t计算机程序必须在内存（随机访问内存(RAM)）中以便于运行。内存是处理器可以直接访问的唯一的大容量存储区域。它通常是用被称为动态随机访问内存(DRAM)的半导体技术来实现的，是一组内存字的数组，每个字都有其地址。")]),_._v(" "),a("p",[_._v("通过对特定内存地址执行一系列load或store指令来实现交互。")]),_._v(" "),a("p",[_._v("load：将内存中的字移到CPU的寄存器中；")]),_._v(" "),a("p",[_._v("store：将寄存器的内容移到内存。")]),_._v(" "),a("p",[_._v("除了显示使用指令以外，CPU可自动从内存中装入指令来执行。")]),_._v(" "),a("h3",{attrs:{id:"_1-2-3-i-o结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-i-o结构","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.3 I/O结构")]),_._v(" "),a("p",[_._v("​\tSCSI（small computer system interface）控制器可有7个或更多的设备与之相连。设备控制器维护一定量的本地缓冲存储和一组特定用途的寄存器。设备控制器负责在其所控制的外部设备与本地缓冲存储之间进行数据传递。")]),_._v(" "),a("p",[_._v("​\t为了开始I/O操作，设备驱动程序在设备控制器中装载适当的寄存器。")]),_._v(" "),a("p",[_._v("​\t这种I/O中断驱动适合移动少量数据，但对大块的数据移动（如磁盘I/O），就会出现超载问题。DMA（direct memory access，直接内存访问）就是为了解决这个问题而设计的。")]),_._v(" "),a("p",[_._v("​\t一些高端的系统采用交换而不是总线结构，在这些系统中，多个部件可以与其他部件并发对话，而不是在公共总线上争夺周期，此时，DMA更为有效。")]),_._v(" "),a("h2",{attrs:{id:"_1-3-计算机系统体系结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-计算机系统体系结构","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3 计算机系统体系结构")]),_._v(" "),a("h3",{attrs:{id:"_1-3-1-单处理器系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-单处理器系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.1 单处理器系统")]),_._v(" "),a("p",[_._v("绝大多数系统采用单处理器。在该系统中，有一个主CPU能够执行一个通用指令集，包括来自用户进程的指令。")]),_._v(" "),a("h3",{attrs:{id:"_1-3-2-多处理器系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-多处理器系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.2 多处理器系统")]),_._v(" "),a("p",[_._v("多处理器系统也称为并行系统或紧耦合系统，这类系统有多个紧密通信的CPU，它们共享计算机总线，有时还有时钟、内存和外设等。")]),_._v(" "),a("p",[_._v("优点：")]),_._v(" "),a("ul",[a("li",[_._v("增加吞吐量")]),_._v(" "),a("li",[_._v("规模经济")]),_._v(" "),a("li",[_._v("增加可靠性")])]),_._v(" "),a("p",[_._v("能提供与正常工作的硬件成正比的服务的能力被称为"),a("strong",[_._v("适度退化")]),_._v("，有些系统超出适度退化的能力被称为"),a("strong",[_._v("容错")]),_._v("。")]),_._v(" "),a("p",[_._v("多处理器系统主要有两种类型：")]),_._v(" "),a("pre",[a("code",[_._v("* 非对称多处理\n* 对称多处理（SMP）\n")])]),_._v(" "),a("h3",{attrs:{id:"_1-3-3-集群系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-集群系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.3 集群系统")]),_._v(" "),a("p",[_._v("多CPU的另一种类型是集群系统。不同点是集群系统是由两个或多个独立的系统耦合起来的。")]),_._v(" "),a("p",[_._v("集群计算机共享存储并通过局域网络连接或具有更快的内部连接。")]),_._v(" "),a("p",[_._v("分类：")]),_._v(" "),a("p",[_._v("非对称集群：一台机器处于热备份模式，另一台运行应用程序。热备份主机只监视活动服务器；")]),_._v(" "),a("p",[_._v("对称集群：两个或多个主机都运行应用程序，它们互相监视，这种模式更为高效；")]),_._v(" "),a("p",[_._v("并行集群：允许多个主机访问共享存储上的相同数据，通常需要由专门软件和应用程序完成，有些集群技术中包含了分布式锁管理器（DLM）服务；")]),_._v(" "),a("p",[_._v("WAN集群：")]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_1-4-操作系统结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-操作系统结构","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.4 操作系统结构")]),_._v(" "),a("p",[_._v("操作系统最重要的一点是要有多道程序处理能力。多道程序设计通过组织作业（编码或数据）使CPU总有一个作业可执行，从而提高了CPU的利用率。")]),_._v(" "),a("p",[_._v("分时系统（或多任务）是多道程序设计的延伸，在分时系统中，虽然CPU还是在作业之间进行切换，但切换频率很高，用户可以在程序运行期间与之进行交互。")]),_._v(" "),a("p",[_._v("共享需要一种交互计算机系统，它能提供用户与系统之间的直接通信。")]),_._v(" "),a("p",[_._v("分时操作系统允许许多用户同时共享计算机。让用户感觉到整个计算机系统为自己所独有。")]),_._v(" "),a("p",[_._v("每个用户在内存中至少有一个程序。装入到内存并执行的程序通常称为"),a("strong",[_._v("进程")]),_._v("。")]),_._v(" "),a("p",[_._v("分时和多道程序设计需要在存储器中同时保存有几个作业。这些作业刚开始存储在磁盘的"),a("strong",[_._v("作业池")]),_._v("中。")]),_._v(" "),a("p",[_._v("如果多个作业需要调入内存但没有足够的内存，那么系统必须在这些作业中做出选择，这样的决策被称为"),a("strong",[_._v("作业调度")]),_._v("。")]),_._v(" "),a("p",[_._v("如果有多个任务同时需要执行，那么系统必须做出选择，这样的选择称为"),a("strong",[_._v("CPU调度")]),_._v("。")]),_._v(" "),a("p",[_._v("虚拟内存允许将一个执行的作业不完全放在内存中。")]),_._v(" "),a("blockquote",[a("p",[_._v("虚拟内存优点：")]),_._v(" "),a("ul",[a("li",[_._v("程序可以比物理内存大")]),_._v(" "),a("li",[_._v("将内存抽象成一个庞大且统一的存储数组，将逻辑内存与真正的物理内存区分开来，不必为内存空间限制担心。")])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_1-5-操作系统操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-操作系统操作","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.5 操作系统操作")]),_._v(" "),a("h3",{attrs:{id:"_1-5-1-双重模式操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-双重模式操作","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.5.1 双重模式操作")]),_._v(" "),a("p",[_._v("两种独立的操作模式：")]),_._v(" "),a("p",[_._v("​\t用户模式")]),_._v(" "),a("p",[_._v("​\t监督程序模式（也称管理/系统/特权模式）")]),_._v(" "),a("p",[_._v("在计算机硬件中增加一个称为"),a("strong",[_._v("模式位")]),_._v("的位以表示当前模式：监督程序模式（0)，用户模式（1）。")]),_._v(" "),a("p",[_._v("只要操作系统获得了对计算机的控制，它就处于内核模式。")]),_._v(" "),a("p",[_._v("双重模式操作提供了保护操作系统和用户程序不受错误用户程序影响的手段。")]),_._v(" "),a("h3",{attrs:{id:"_1-5-2-定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-定时器","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.5.2 定时器")]),_._v(" "),a("p",[_._v("确保操作系统能维持对CPU的控制，同时防止用户程序陷入死循环或不调用系统服务，并且不将控制权返回到操作系统。")]),_._v(" "),a("p",[_._v("操作系统在将控制权交给用户之前，应确保设置好定时器以便产生中断。")]),_._v(" "),a("h2",{attrs:{id:"_1-6-进程管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-进程管理","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.6 进程管理")]),_._v(" "),a("p",[_._v("程序本身并不是进程。程序是被动的实体，进程是活动的实体。")]),_._v(" "),a("p",[_._v("单线程进程具有一个程序计数器来明确下一个执行的指令，直至进程终止。任何时候，最多只有一个指令代表进程被执行。因此，尽管两个进程与同一个程序相关联，但是都有其各自的执行顺序。")]),_._v(" "),a("p",[_._v("多线程进程具有多个程序计数器，每一个指向下一个给定线程要执行的指令。")]),_._v(" "),a("p",[_._v("进程是系统工作的单元。系统由多个进程组成。")]),_._v(" "),a("p",[_._v("操作系统负责下述与进程管理相关的活动：")]),_._v(" "),a("ul",[a("li",[_._v("创建和删除用户进程和系统进程")]),_._v(" "),a("li",[_._v("挂起和重启进程")]),_._v(" "),a("li",[_._v("提供进程同步机制")]),_._v(" "),a("li",[_._v("提供进程通信机制")]),_._v(" "),a("li",[_._v("提供死锁批处理机制")])]),_._v(" "),a("h2",{attrs:{id:"_1-7-内存管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-内存管理","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.7 内存管理")]),_._v(" "),a("p",[_._v("内存是现代计算机系统操作的中心。")]),_._v(" "),a("p",[_._v("内存是一个大的字节或字的数组，每个字节或字都有其自己的地址。")]),_._v(" "),a("p",[_._v("内存是可以被CPU和I/O设备所共同访问的数据仓库。")]),_._v(" "),a("p",[_._v("内存通常是CPU所能直接寻址和访问的唯一大容量存储器。")]),_._v(" "),a("p",[_._v("操作系统负责下列有关内存管理的活动：")]),_._v(" "),a("ul",[a("li",[_._v("记录内存的哪部分正在被使用及被谁使用")]),_._v(" "),a("li",[_._v("当有内存空间时，决定哪些进程可以转入内存")]),_._v(" "),a("li",[_._v("根据需要分配和释放内存空间")])]),_._v(" "),a("h2",{attrs:{id:"_1-8-存储管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-存储管理","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.8 存储管理")]),_._v(" "),a("h3",{attrs:{id:"_1-8-1-文件系统管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-1-文件系统管理","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.8.1 文件系统管理")]),_._v(" "),a("p",[a("strong",[_._v("文件")]),_._v("是由其创建者定义的一组相关信息的集合。")]),_._v(" "),a("p",[_._v("通常文件表示程序（源程序和目标程序）和数据。数据文件可以是数值的，字符的，字符数值或二进制的。")]),_._v(" "),a("p",[_._v("操作系统负责下列有关文件管理的活动：")]),_._v(" "),a("ul",[a("li",[_._v("创建和删除文件")]),_._v(" "),a("li",[_._v("创建和删除目录来组织文件")]),_._v(" "),a("li",[_._v("提供操作文件和目录的原语")]),_._v(" "),a("li",[_._v("将文件映射到二级存储上")]),_._v(" "),a("li",[_._v("在稳定存储介质上备份文件")])]),_._v(" "),a("h3",{attrs:{id:"_1-8-2-大容量存储器管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-2-大容量存储器管理","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.8.2 大容量存储器管理")]),_._v(" "),a("p",[_._v("操作系统负责下列有关硬盘管理的活动：")]),_._v(" "),a("ul",[a("li",[_._v("空闲空间管理")]),_._v(" "),a("li",[_._v("存储空间分配")]),_._v(" "),a("li",[_._v("硬盘调度")])]),_._v(" "),a("h3",{attrs:{id:"_1-8-3-高速缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-3-高速缓存","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.8.3 高速缓存")]),_._v(" "),a("p",[_._v("内存中的信息当被使用到时会被临时复制到更快的存储系统——高速缓存中。")]),_._v(" "),a("h3",{attrs:{id:"_1-8-4-i-o系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-4-i-o系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.8.4 I/O系统")]),_._v(" "),a("p",[_._v("I/O子系统包括如下几个部分：")]),_._v(" "),a("ul",[a("li",[_._v("一个包括缓冲、高速缓存和假脱机的内存管理部分")]),_._v(" "),a("li",[_._v("通用设备驱动器接口")]),_._v(" "),a("li",[_._v("特定硬件设备的驱动程序")])]),_._v(" "),a("h2",{attrs:{id:"_1-9-保护和安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-保护和安全","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.9 保护和安全")]),_._v(" "),a("p",[_._v("保护是一种控制进程或用户对计算机系统资源的访问的机制。")]),_._v(" "),a("p",[_._v("安全的主要工作是防止系统不受外部或内部攻击。")]),_._v(" "),a("h2",{attrs:{id:"_1-10-分布式系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-分布式系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.10 分布式系统")]),_._v(" "),a("p",[_._v("分布式系统是将一组物理上分开来的、各种可能异构的计算机系统通过网络连接在一起，为用户提供系统所维护的各种资源的计算机的集合。")]),_._v(" "),a("p",[_._v("通常，系统包括两种模式组合：FTP和NFS")]),_._v(" "),a("p",[_._v("网络——简单说就是两个或多个系统之间的通信路径。分布式系统通过网络提供功能。")]),_._v(" "),a("p",[_._v("网络可以根据节点间的距离划分：")]),_._v(" "),a("blockquote",[a("p",[_._v("局域网（LAN）：位于一个房间、一楼层或一栋楼内。")]),_._v(" "),a("p",[_._v("广域网（WAN）：通常位于楼群之间、城市之间或国家之间。")]),_._v(" "),a("p",[_._v("城域网（MAN）：可以将一个城市的楼宇连接起来。")]),_._v(" "),a("p",[_._v("蓝牙和802.11技术可以实现数米内的无线通信，创建了可能建在房间内的小域网（SAN）。")]),_._v(" "),a("p",[_._v("还有红外构建的网络等等。")])]),_._v(" "),a("p",[_._v("网络操作系统提供了跨网络的文件共享、包括允许在不同的计算机上的进程进行消息交换的通信方法等功能。。相对于网络上的其他计算机，运行网络操作系统的计算机是自治的。")]),_._v(" "),a("h2",{attrs:{id:"_1-11-专用系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-专用系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.11 专用系统")]),_._v(" "),a("p",[_._v("目的在于处理有限的计算领域。")]),_._v(" "),a("h3",{attrs:{id:"_1-11-1-实时嵌入式系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-1-实时嵌入式系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.11.1 实时嵌入式系统")]),_._v(" "),a("p",[_._v("嵌入式计算机是目前最为流行的一种计算机形式。")]),_._v(" "),a("p",[_._v("嵌入式系统几乎都运行实时操作系统。")]),_._v(" "),a("h3",{attrs:{id:"_1-11-2-多媒体系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-2-多媒体系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.11.2 多媒体系统")]),_._v(" "),a("p",[_._v("将多媒体数据加入到计算机系统中。")]),_._v(" "),a("p",[_._v("多媒体数据包括图像、声音和文件。")]),_._v(" "),a("h3",{attrs:{id:"_1-11-3-手持系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-3-手持系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.11.3 手持系统")]),_._v(" "),a("p",[_._v("包括个人数字助理（PDA）、手机、Palm、Pocket-PC等。")]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_1-12-计算环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-计算环境","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.12 计算环境")]),_._v(" "),a("h3",{attrs:{id:"_1-12-1-传统计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-1-传统计算","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.12.1 传统计算")])])}),[],!1,null,null,null);v.default=r.exports}}]);