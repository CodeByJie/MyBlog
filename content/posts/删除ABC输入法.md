---
title: "删除ABC输入法"
date: 2026-02-02T11:31:06-08:00
draft: false
---

在访达（⌘-⇧-G）前往下面路径找到对应文件，并用 Xcode 软件打开。

> [!INFO] 注：路径中 mac 替换为你的 Mac 用户名。

```
/Users/mac/Library/Preferences/com.apple.HITo0lbox.plist
```

在列表中（⌘-F）搜索 ABC，并删除所有包含 ABC 的文件并<mark style="background:#fff88f">保存</mark>，重启 Mac。

![]({{< absURL "images/attachments/1Capture_2026-02-01_17.51.34.png" >}})

> [!INFO] 原理
> 1. **ABC 是系统内置输入法，无法真正卸载**（是否显示、是否可用，完全由配置文件决定）
> 2. **com.apple.HIToolbox.plist** **是输入法的“总配置表”**（记录了启用哪些输入法）

> [!WARNING] 注意
> - 系统升级或重置输入法，ABC 可能会回来
> - 行为安全，但不保证长期有效
