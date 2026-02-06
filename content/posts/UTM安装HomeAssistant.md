---
title: "UTM安装HomeAssistant"
date: 2026-02-04T00:20:35-08:00
draft: false
---

## 下载 UTM

[UTM下载地址](https://mac.getutm.app/)

## 创建虚拟机

{{< callout type="info" >}}
创建虚拟机
![](/myblog/images/attachments/1Capture_2026-02-03_19.07.27-1.png)
{{< /callout >}}

{{< callout type="info" >}}
选择虚拟化
![](/myblog/images/attachments/1Capture_2026-02-03_19.07.42.png)
{{< /callout >}}

{{< callout type="info" >}}
选择其他
![](/myblog/images/attachments/1Capture_2026-02-03_19.08.03.png)
{{< /callout >}}

{{< callout type="info" >}}
内存和 CPU 默认即可
![](/myblog/images/attachments/1Capture_2026-02-03_19.08.21.png)
{{< /callout >}}

{{< callout type="info" >}}
启动设备无，UEFI 启动无
![](/myblog/images/attachments/1Capture_2026-02-03_19.08.43.png)
{{< /callout >}}

{{< callout type="info" >}}
存储默认即可
![](/myblog/images/attachments/1Capture_2026-02-03_19.08.59.png)
{{< /callout >}}

{{< callout type="info" >}}
共享目录无需设置
![](/myblog/images/attachments/1Capture_2026-02-03_19.09.23-1.png)
{{< /callout >}}

{{< callout type="info" >}}
给虚拟机起名 HomeAssistant，勾选打开虚拟机设置。
![](/myblog/images/attachments/1Capture_2026-02-03_19.55.34.png)
{{< /callout >}}

## 虚拟机设置

{{< callout type="info" >}}
删除原本的驱动器
![](/myblog/images/attachments/1Capture_2026-02-03_19.13.59.png)
{{< /callout >}}

{{< callout type="info" >}}
新建里面导入 HAOS
![](/myblog/images/attachments/1Capture_2026-02-03_19.14.37.png)
![](/myblog/images/attachments/1Capture_2026-02-03_19.14.55.png)
{{< /callout >}}

{{< callout type="info" >}}
调整大小
![](/myblog/images/attachments/1Capture_2026-02-03_19.16.41.png)
{{< /callout >}}

{{< callout type="info" >}}
会弹出提醒，无视即可，继续选择重新调整。
![](/myblog/images/attachments/1Capture_2026-02-03_19.16.50.png)
{{< /callout >}}

{{< callout type="info" >}}
显示选择 virtio-gpu-pci
![](/myblog/images/attachments/1Capture_2026-02-03_19.19.20.png)
{{< /callout >}}

{{< callout type="warning" >}}
设置完记得重启 UTM 软件，不然会无法生效。
{{< /callout >}}

## 启动虚拟机

{{< callout type="info" >}}
显示如下界面，说明 HomeAssistant 启动成功。
{{< /callout >}}
![](/myblog/images/attachments/1Capture_2026-02-03_21.21.09.png)

{{< callout type="info" >}}
访问 [http://homeassistant.local:8123](https://link.zhihu.com/?target=http%3A//homeassistant.local%3A8123/) 显示如下，等待安装完成即可。
![](/myblog/images/attachments/1Capture_2026-02-03_21.23.29.png)
{{< /callout >}}

{{< callout type="info" >}}
按要求完成设置即可
![](/myblog/images/attachments/1Capture_2026-02-03_21.26.41.png)
{{< /callout >}}

## HomeAssistant 设置

{{< callout type="info" >}}
打开高级模式
![](/myblog/images/attachments/1Capture_2026-02-03_21.30.30.png)
{{< /callout >}}

{{< callout type="info" >}}
打开加载项并下载 Terminal & SSH
![](/myblog/images/attachments/1Capture_2026-02-03_21.31.20.png) ![](/myblog/images/attachments/1Capture_2026-02-03_21.31.59.png)
{{< /callout >}}

{{< callout type="info" >}}
安装
![](/myblog/images/attachments/1Capture_2026-02-03_21.32.13.png)
打开自动恢复和添加侧边栏
![](/myblog/images/attachments/1Capture_2026-02-03_21.40.38.png)
{{< /callout >}}

{{< callout type="info" >}}
在 ssh 中输入以下内容，从 GitHub 克隆 Xiaomi home
{{< /callout >}}

```shell
cd config
git clone https://github.com/XiaoMi/ha_xiaomi_home.git
cd ha_xiaomi_home
./install.sh /config
```

{{< callout type="warning" >}}
安装完后需要重启 HomeAssistant
![](/myblog/images/attachments/1Capture_2026-02-03_21.43.54.png)
![](/myblog/images/attachments/1Capture_2026-02-03_21.44.40.png)
{{< /callout >}}

{{< callout type="info" >}}
在设备与集成中选择添加 xiaomi home
<img src="/myblog/images/attachments/1Capture_2026-02-03_21.47.54.png" width="575" />
<img src="/myblog/images/attachments/1Capture_2026-02-03_21.49.07.png" width="600" />
{{< /callout >}}

{{< callout type="info" >}}
在设备与集成中选择添加 Apple，其中选择 HomeKit Bridge<img src="/myblog/images/attachments/1Capture_2026-02-03_22.02.43.png" width="575" /> <img src="/myblog/images/attachments/1Capture_2026-02-03_22.03.17.png" width="550" />
{{< /callout >}}
