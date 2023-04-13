import http from "@/api";

// 给定一个聊天对话，该模型将返回一个聊天完成响应。
export const getCreateText = (params: object | undefined) => {
	return http.post("/chat/completions", {
		max_tokens: 1024,
		n: 1,
		stop: "\n",
		model: "gpt-3.5-turbo",
		temperature: 0,
		messages: [{ role: "user", content: params }]
	});
};

// 给定一个提示、模型将生成一个新的图像。
//  256x256, 512x512, or 1024x1024.
export const getCreateImage = (params: object | undefined) => {
	return http.post(`images/generations`, {
		prompt: params,
		n: 1,
		size: "256x256"
	});
};
