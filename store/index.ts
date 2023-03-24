import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { DEVICE_EUNM } from "~/types/eums/device";
const useStore = defineStore({
    id: "store",
    state: () => ({
        device: DEVICE_EUNM.Undefine as DEVICE_EUNM,
        count: 123,
    }),
    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
    },
    actions: {
        increment() {
            this.count++;
        },
        // async asyncAddCount() {
        // const fetchedCount = await someApi();
        // this.count += fetchedCount;
        // },
        setDevice(device: DEVICE_EUNM) {
            this.device = device;
        },
    },
});
export default useStore;
