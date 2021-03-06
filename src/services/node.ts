import ApiService from "@/services/api";
import { IApiNodeConfiguration, IApiNodeStatus } from "../interfaces";

class NodeService {
  public async config(): Promise<IApiNodeConfiguration> {
    const response = (await ApiService.get("node/configuration")) as { data: IApiNodeConfiguration };

    return response.data;
  }

  public async status(): Promise<IApiNodeStatus> {
    const response = (await ApiService.get("node/status")) as { data: IApiNodeStatus };

    return response.data;
  }
}

export default new NodeService();
