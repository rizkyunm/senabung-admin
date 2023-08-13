import HttpFactory from '../factory'
import {
  ICreateCampaignInput,
  ICreateCampaignResponse,
  ICampaign,
  ICampaignDetail,
} from 'types/campaign'
import {IUploadStatus} from "~/types/user";

class CampaignModule extends HttpFactory {
  private RESOURCE = '/api/v1'

  async create(token: string | null,
    campaign: ICreateCampaignInput
  ): Promise<ICreateCampaignResponse> {
    return await this.call<ICreateCampaignResponse>(
      'POST',
      `${this.RESOURCE}/campaigns`,
      campaign,
      {
        headers: {
          Authorization: token,
        },
      }
    )
  }

  async upload(token: string | null, id: string | null, formData: [File]): Promise<IUploadStatus> {
    return await this.call<IUploadStatus>(
      'POST',
      `${this.RESOURCE}/campaigns/${id}/upload`,
      formData,
      {
        headers: {
          Authorization: token,
        },
      }
    )
  }

  async list(): Promise<ICampaign[]> {
    return await this.call<ICampaign[]>('GET', `${this.RESOURCE}/campaigns`)
  }

  async highlight(): Promise<ICampaign> {
    return await this.call<ICampaign>(
      'GET',
      `${this.RESOURCE}/campaigns/highlight`
    )
  }

  async get(id: string): Promise<ICampaignDetail> {
    return await this.call<ICampaignDetail>(
      'GET',
      `${this.RESOURCE}/campaigns/${id}`
    )
  }

  async getBySlug(slug: string): Promise<ICampaignDetail> {
    return await this.call<ICampaignDetail>(
      'GET',
      `${this.RESOURCE}/campaigns/slug/${slug}`
    )
  }
}

export default CampaignModule
