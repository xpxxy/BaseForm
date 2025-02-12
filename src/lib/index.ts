/**
 * @Author: xpxxy
 * @Date: 2025-02-10 14:18:40
 * @Description: 工具函数
 */


export function throttle<T extends (...args: any[]) => any>(fn: T, limit: number): (...args: Parameters<T>) => void {
    let lastFunc: ReturnType<typeof setTimeout> | null;
    let lastRan: number | null = null;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (!lastRan) {
            fn.apply(this, args);
            lastRan = Date.now();
        } else {
            if (lastFunc) {
                clearTimeout(lastFunc);
            }
            lastFunc = setTimeout(() => {
                if ((Date.now() - (lastRan as number)) >= limit) {
                    fn.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - (lastRan as number)));
        }
    };
}

export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

