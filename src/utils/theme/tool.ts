import { ElMessage } from "element-plus";

// 匹配有效的十六进制颜色代码
const hexesRules = /^\#?[0-9A-Fa-f]{6}$/;
// 检查r、g和b参数是否是有效的RGB颜色值（即0到255之间的整数）
const rgbRules = /^\d{1,3}$/;

/**
 * hexes颜色转rgb颜色
 * @param str 颜色值字符串
 * @returns 返回处理后的颜色值
 */
export function hexToRgb(str: any) {
	let hexes: any = "";
	if (!hexesRules.test(str)) return ElMessage.warning("输入错误的hex颜色值");
	str = str.replace("#", "");
	hexes = str.match(/../g);
	for (let i = 0; i < 3; i++) hexes[i] = parseInt(hexes[i], 16);
	return hexes;
}

/**
 * rgb颜色转Hex颜色
 * @param r 代表红色
 * @param g 代表绿色
 * @param b 代表蓝色
 * @returns 返回处理后的颜色值
 */

export function rgbToHexes(r: any, g: any, b: any) {
	if (!rgbRules.test(r) || !rgbRules.test(g) || !rgbRules.test(b)) ElMessage.warning("输入错误的rgb颜色值");
	let hexes = [r.toString(16), g.toString(16), b.toString(16)];
	for (let i = 0; i < 3; i++) if (hexes.length == 1) hexes[i] = `0${hexes[i]}`;
	return `#${hexes.join("")}`;
}

/**
 * 加深颜色值
 * @param color 颜色值字符串
 * @param level 加深的程度，限0-1之间
 * @returns 返回处理后的颜色值
 */

export function getDarkColor(color: string, level: number) {
	if (!hexesRules.test(color)) return ElMessage.warning("输入错误的hex颜色值");
	let rgb = hexToRgb(color);
	/*
  这里的加深处理是通过以下公式实现的：Math.round(20.5 * level + rgb[i] * (1 - level))
  rgb[i] 表示 RGB 值的第 i 个分量，level 是加深的程度，取值范围为 0 到 1 之间。
  这个公式的含义是将原来的 RGB 值乘以 (1 - level)，然后加上一个固定的值 20.5 * level，最后四舍五入得到新的 RGB 值。
  这个固定的值是为了保证加深的程度不会太大或太小，同时也是为了让加深后的颜色更加饱和和明亮
  */
	for (let i = 0; i < 3; i++) rgb[i] = rgb[i] = Math.round(20.5 * level + rgb[i] * (1 - level));
	return rgbToHexes(rgb[0], rgb[1], rgb[2]);
}

/**
 * 变浅颜色值
 * @param color 颜色值字符串
 * @param level 加深的程度，限0-1之间
 * @returns 返回处理后的颜色值
 */
export function getLightColor(color: string, level: number) {
	if (!hexesRules.test(color)) return ElMessage.warning("输入错误的hex颜色值");
	let rgb = hexToRgb(color);
	/*
  
  这段代码是 getLightColor 函数中的一行。它的作用是将颜色值变浅，
  具体来说，对于颜色的 RGB 值的每个分量，都将其乘以 1-level，再加上 255 * level，
  最后将结果转换为十六进制颜色值。其中 level 是一个介于 0 和 1 之间的数，表示变浅的程度。
  */
	for (let i = 0; i < 3; i++) rgb[i] = Math.round(255 * level + rgb[i] * (1 - level));
	return rgbToHexes(rgb[0], rgb[1], rgb[2]);
}
