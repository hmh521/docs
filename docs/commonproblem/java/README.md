--- 
title: java常见问题 
---

# java常见问题
## 基于Hutool的分页工具
```java
public class PageUtil<T> extends cn.hutool.core.util.PageUtil {
    public PageUtil() {
    }

    public static <T> List<T> page(Page<T> page, List<T> list) {
        setFirstPageNo(1);
        int start = getStart(Convert.toInt(page.getCurrent()), Convert.toInt(page.getSize()));
        int end = getEnd(Convert.toInt(page.getCurrent()), Convert.toInt(page.getSize()));
        if (start > list.size()) {
            return CollectionUtil.newArrayList(new Object[0]);
        } else if (start > end) {
            return CollectionUtil.newArrayList(new Object[0]);
        } else {
            return end > list.size() ? list.subList(start, list.size()) : list.subList(start, end);
        }
    }
}

```
## hutool-captcha 图片偏红问题

```java
// 设置背景颜色为白色  不生效
lineCaptcha.setBackground(Color.white);
// 问题代码
//返回 base64
ByteArrayOutputStream bos = new ByteArrayOutputStream();
ImageIO.write(lineCaptcha.getImage(), "JPEG", bos);
byte[] bytes = bos.toByteArray();
Base64.Encoder encoder = Base64.getEncoder();
base64String = "data:image/png;base64," + encoder.encodeToString(bytes);
// 改正后代码
//返回 base64
ByteArrayOutputStream bos = new ByteArrayOutputStream();
ImageIO.write(lineCaptcha.getImage(), "PNG", bos);
byte[] bytes = bos.toByteArray();
Base64.Encoder encoder = Base64.getEncoder();
base64String = "data:image/png;base64," + encoder.encodeToString(bytes);
```
之前代码IO读取时JPEG格式，改成PNG格式即可
