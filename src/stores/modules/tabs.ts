import { defineStore } from "pinia";
import router from "@/router";
import type { TabsState, TabsMenuProps } from "@/stores/interface";
import piniaPersistConfig from "@/stores/helper/persist";

export const useTabsStore = defineStore({
	id: "navigation-tabs",
	state: (): TabsState => ({
		tabsMenuList: []
	}),
	actions: {
		// 添加
		async addTabs(tabItem: TabsMenuProps) {
			if (this.tabsMenuList.every(item => item.path !== tabItem.path)) {
				this.tabsMenuList.push(tabItem);
			}
		},

		// 删除
		async removeTabs(tabPath: string, isCurrent: boolean = true) {
			if (isCurrent) {
				this.tabsMenuList.forEach((item, index) => {
					if (item.path !== tabPath) return;
					const nextTab = this.tabsMenuList[index + 1] || this.tabsMenuList[index - 1];
					if (!nextTab) return;
					router.push(nextTab.path);
				});
			}
			this.tabsMenuList = this.tabsMenuList.filter(item => item.path !== tabPath);
		}
	},
	persist: piniaPersistConfig("navigation-tabs")
});
