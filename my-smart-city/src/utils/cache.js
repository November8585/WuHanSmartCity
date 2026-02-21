import localForage from "localforage";

const geoCache = localForage.createInstance({
    name: "smartCityGeoCache",
});

/**
 * 获取带缓存的数据
 * @param {string} key 缓存键名，如 'buildings'
 * @param {string} url 请求地址
 * @param {number} ttl 过期时间（毫秒），默认30天
 * @returns {Promise<Object>} GeoJSON 数据
 */
export async function fetchWithCache(key, url, ttl = 30 * 24 * 60 * 60 * 1000) {
    try {
        const cached = await geoCache.getItem(key);
        if (cached && (Date.now() - cached.timestamp < ttl)) {
            console.log(`从缓存加载${key}`);
            return cached.data;
        };
    } catch (e) {
        console.warn(`读取缓存失败`, e);
    };

    // 没有缓存或已过期，发起网络请求
    console.log(`从网络加载${key}`);
    const response = await fetch(url);
    const data = await response.json();

    // 存入缓存
    await geoCache.setItem(key, {
        data: data,
        timestamp: Date.now()
    });

    return data;
};
