import { Headers} from '@angular/http';
import {Router, RouterLink} from '@angular/router';

export var  enlace:string = 'http://p.servicenetwork.mx/service_network_API_test/public/index.php/api/';
//export var  enlace:string = 'http://localhost/service_network_API/public/index.php/api/'; 


let u = sessionStorage.getItem('token');
export let headers2 = new Headers();
    headers2.append('Content-Type', 'application/json');
    headers2.append('Access-Control-Allow-Origin' , '*');
    headers2.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    headers2.append('Content-Type','application/x-www-form-urlencoded');
    headers2.append("Access-Control-Expose-Headers", "xsrf-token");
    headers2.append("Access-Control-Max-Age", "3600");
    headers2.append("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");
    headers2.append("Access-Control-Allow-Credentials", "true"); 
    headers2.append("Authorization", "Bearer "+u); 