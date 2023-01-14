import { HttpRestService } from "@/services/http/HttpRestService";

export class HomeRepository {
  static getFinanceData(key) {
    return HttpRestService.get(`/finance?format=json-cors&key=${key}`);
  }
}
