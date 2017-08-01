import { Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/observable';

import { ServersService } from '../servers.service';

interface ServerModel {
  id: number;
  name: string;
  status: string;
}
@Injectable()
export class ServerResolverService implements Resolve<ServerModel> {

  constructor(private serversService: ServersService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerModel> |
             Promise<ServerModel> | ServerModel {
               return this.serversService.getServer(+route.params['id']);
             }


}
