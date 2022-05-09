import request from '@/utils/request'
import { ISystemInfo } from './types/system'

export const getSystemInfo = () => {
  return request.get<{
    list: ISystemInfo[]
  }>('/system/info')
}
