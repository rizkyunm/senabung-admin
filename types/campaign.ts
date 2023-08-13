export interface ICreateCampaignInput {
  name: string
  short_description: string
  description: string
  goal_amount: number
}

export interface ICreateCampaignResponse {
  id?: string
}

export interface ICampaign {
  id: number
  name: string
  short_description: string
  campaign_image: string
  goal_amount: number
  current_amount: number
  slug: string
  status: string
}

export interface ICampaignDetail extends ICampaign {
  description: string
  user_id: number
  backer_count: number
}
