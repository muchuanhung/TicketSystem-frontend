import { UserComment } from './user'
// 基本的商品資料型別，依需求繼承擴充
// 使用在 card, movieDetail等商品相關 api

// TODO: 這邊保留部分跟API 不同的屬性，避免直接拿掉導致相關的組件壞掉，有改到相關組件再順便回來改這裡
export interface Product {
    _id: string
    title: string
    photoPath: string
    type: string
}

export interface ProductDetail extends Product {
    rank: number // FIXED: 資料沒有這項屬性
    price: number
    soldAmount: number
    genre: string
    theater: string
    amount: number
    startAt: string
    endAt: string
    sellStartAt: string
    sellEndAt: string
    isLaunched: boolean
    notifications: string[]
    highlights: string[]
    introduction: string
    cautions: string[]
    confirmations: string[]
    cancelPolicies: string[]
    certificates: string[]
    plans: ProductPlan[]
    tags: string[]
    brief: string
    isFavorite: boolean
}

type ProductPlan = {
    name: string
    discount: number
    headCount: number
}

export type Comment = {
    _id: string
    rating: number
    content: string
    status: string
    createAt: string
    updateAt: string
    user: UserComment
}

export interface ProductFavorite extends Product {
    genre: string
    price: number
    soldAmount: number
    amount: number
    isLaunched: boolean
    sellStartAt: string
    sellEndAt: string
}
