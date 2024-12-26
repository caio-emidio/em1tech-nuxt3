import { ref, onMounted, onUnmounted } from 'vue';

export function useWindowResize() {
    const width = ref(0);
    const height = ref(0);
    const isMobile = ref(window?.innerWidth < 1024);
    const isDesktop = ref(window?.innerWidth >= 1024);
    function handler() {
        width.value = window?.innerWidth;
        height.value = window?.innerHeight;
        isMobile.value = width.value < 1024;
        isDesktop.value = width.value >= 1024;
    };

    
    onMounted(() => window.addEventListener('resize', handler));
    onUnmounted(() => window.removeEventListener('resize', handler));

    return { width, height, isMobile, isDesktop };
}