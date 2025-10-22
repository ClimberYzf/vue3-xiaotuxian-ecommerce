import httpInstance from "@/utils/http";
export const getOrderAPI = (id) => {
    return httpInstance({
        // 拼接id
        url: `member/order/${id}`
    })
} 