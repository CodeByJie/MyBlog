---
title: "UTM安装HomeAssistant"
date: 2026-02-04T00:20:35-08:00
draft: false
---

## 下载 UTM

[UTM下载地址](https://mac.getutm.app/)

## 创建虚拟机

> [!INFO] 创建虚拟机
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.07.27 1.png" >}})

> [!INFO] 选择虚拟化
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.07.42.png" >}})

> [!INFO] 选择其他
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.08.03.png" >}})

> [!INFO] 内存和 CPU 默认即可
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.08.21.png" >}})

> [!INFO] 启动设备无，UEFI 启动无
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.08.43.png" >}})

> [!INFO] 存储默认即可
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.08.59.png" >}})

> [!INFO] 共享目录无需设置
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.09.23 1.png" >}})

> [!INFO] 给虚拟机起名 HomeAssistant，勾选打开虚拟机设置。
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.55.34.png" >}})

## 虚拟机设置

> [!INFO] 删除原本的驱动器
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.13.59.png" >}})

> [!INFO] 新建里面导入 HAOS
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.14.37.png" >}})
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.14.55.png" >}})

> [!INFO] 调整大小
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.16.41.png" >}})

> [!INFO] 会弹出提醒，无视即可，继续选择重新调整。
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.16.50.png" >}})

> [!INFO] 显示选择 virtio-gpu-pci
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_19.19.20.png" >}})

> [!WARNING] 设置完记得重启 UTM 软件，不然会无法生效。

## 启动虚拟机

> [!INFO] 显示如下界面，说明 HomeAssistant 启动成功。
![]({{< absURL "images/attachments/1Capture_2026-02-03_21.21.09.png" >}})

> [!INFO] 访问 [http://homeassistant.local:8123](https://link.zhihu.com/?target=http%3A//homeassistant.local%3A8123/) 显示如下，等待安装完成即可。
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_21.23.29.png" >}})

> [!INFO] 按要求完成设置即可
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_21.26.41.png" >}})

## HomeAssistant 设置

> [!INFO] 打开高级模式
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_21.30.30.png" >}})

> [!INFO] 打开加载项并下载 Terminal & SSH
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_21.31.20.png" >}}) ![]({{< absURL "images/attachments/1Capture_2026-02-03_21.31.59.png" >}})

> [!INFO] 安装
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_21.32.13.png" >}})
> 打开自动恢复和添加侧边栏
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_21.40.38.png" >}})

> [!INFO] 在 ssh 中输入以下内容，从 GitHub 克隆 Xiaomi home

```shell
cd config
git clone https://github.com/XiaoMi/ha_xiaomi_home.git
cd ha_xiaomi_home
./install.sh /config
```

> [!WARNING] 安装完后需要重启 HomeAssistant
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_21.43.54.png" >}})
> ![]({{< absURL "images/attachments/1Capture_2026-02-03_21.44.40.png" >}})

> [!INFO] 在设备与集成中选择添加 xiaomi home
> <img src="{{< absURL \"images/attachments/1Capture_2026-02-03_21.47.54.png\" >}}" width="575" />
> <img src="{{< absURL \"images/attachments/1Capture_2026-02-03_21.49.07.png\" >}}" width="600" />

> [!INFO] 在设备与集成中选择添加 Apple，其中选择 HomeKit Bridge<img src="{{< absURL \"images/attachments/1Capture_2026-02-03_22.02.43.png\" >}}" width="575" /> <img src="{{< absURL \"images/attachments/1Capture_2026-02-03_22.03.17.png\" >}}" width="550" />
