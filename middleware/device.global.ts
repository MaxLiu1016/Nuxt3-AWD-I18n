import useStore from "~~/store";
export default defineNuxtRouteMiddleware(() => {
    if (process.server) {
        const headers = useRequestHeaders();
        // 判斷是否為手機裝置 並寫入pinia
        const store = useStore();
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(headers["user-agent"] as any);
        store.setDevice(isMobile ? DEVICE_EUNM.Mobile : DEVICE_EUNM.Desktop);
    }
});
