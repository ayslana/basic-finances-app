import { HttpRestService } from "@/services/http/HttpRestService";

export class HomeRepository {
  static getFinanceData(key) {
    return HttpRestService.get(
      `api.hgbrasil.com/finance?format=json-cors&key=${key}`
    );
  }
}
