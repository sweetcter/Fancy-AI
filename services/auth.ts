import { apiFunface } from "@/config/axios";
import { AUTH_ENPOINT } from "@/constants/EndPoint";
import { IAuthResponse } from "@/types/auth";
import { IAxiosResponse } from "@/types/AxiosResponse";

export const authServices = {
  async login(data: FormData) {
    const response = await apiFunface.post<IAuthResponse>(
      `${AUTH_ENPOINT.LOGIN}`,
      data
    );
    return response.data;
  },
  async register(data: FormData) {
    const response = await apiFunface.post<null>(
      `${AUTH_ENPOINT.REGISTER}`,
      data
    );
    return response.data;
  },
};
