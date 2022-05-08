import request from '@/utils/request'
export interface SystemInfoInterface {
  id: string
  nickname: string
  text: string
  headimgurl: string
  contentType: number
  createTime: string
}
export const getSystemInfo = () => {
  return request.get<{
    list: SystemInfoInterface[]
  }>('/system/info')
}
