import { ref, onMounted, onUnmounted } from 'vue';

export function useWindowResize() {
    const width = ref(0);
    const height = ref(0);
    const isMobile = ref(window?.innerWidth < 768);
    const isDesktop = ref(window?.innerWidth >= 768);
    function handler() {
        width.value = window?.innerWidth;
        height.value = window?.innerHeight;
        isMobile.value = width.value < 768;
        isDesktop.value = width.value >= 768;
    };

    
    onMounted(() => window.addEventListener('resize', handler));
    onUnmounted(() => window.removeEventListener('resize', handler));

    return { width, height, isMobile, isDesktop };
}