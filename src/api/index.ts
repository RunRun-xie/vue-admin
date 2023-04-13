import axios from "axios";
import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import NProgress from "@/config/nprogress";

const config = {
	// 默认地址请求地址，可在 .env.*** 文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间（30s）
	timeout: 30000,
	// 跨域时候允许携带凭证
	// withCredentials: true,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
		"Content-Type": "application/json"
	}
};

class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config);

		/**
		 * @description 请求拦截器
		 */
		this.service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
			console.log(config, "config");

			NProgress.start();
			return config;
		});

		/**
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */

		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data } = response || {};
				NProgress.done();
				return data;
			},
			async (error: AxiosError) => {
				NProgress.done();
				return error;
			}
		);
	}

	// * 常用请求方法封装
	get<T>(url: string, params?: object, _object = {}): Promise<T> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<T> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<T> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<T> {
		return this.service.delete(url, { params, ..._object });
	}
	download(url: string, params?: object, _object = {}): Promise<BlobPart> {
		return this.service.post(url, params, { ..._object, responseType: "blob" });
	}
}

export default new RequestHttp(config);
