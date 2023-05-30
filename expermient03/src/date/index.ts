import type { FoodOne, Shop } from "./Type";

export function listShop() {
    const Shops: Shop[] = [
        { id: 1, name: "必胜客", code: 4.5, link: "locationone/shopone" },
        { id: 2, name: "牛肉料理", code: 4.2, link: "locationone/shoptwo" },
        { id: 3, name: "小林烧烤", code: 4.8, link: "locationone/shopthree" },
    ]
    return Shops
}

export function listFoodOne() {
    const Foods: FoodOne[] = [
        { id: 1, name: "玉米嫩鸡芝士焗饭", price: 39.9, code: 102 },
        { id: 2, name: "夏威夷至尊披萨", price: 68.9, code: 55 },
        { id: 3, name: "焖肉盒饭", price: 11.9, code: 133 },
    ]
    return Foods
}

