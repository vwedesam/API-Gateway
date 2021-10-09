/* eslint-disable prettier/prettier */
import { HttpService } from "@nestjs/axios";
import { Injectable, NotFoundException } from "@nestjs/common";
import axios, { Method } from "axios";


@Injectable()
export class AppService {

    constructor(private httpModule: HttpService) { }

    async callServiceWithGetMethod(
        url: string,
        path: string,
        method: Method,
        query?: Record<string, unknown>,
        body?: Record<string, unknown>,
        headers?: Record<string, unknown>
    ): Promise<any> {
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            const { url } = config;
            console.log(` url: ${url} |-| `);
            console.log("headers: --- ")
            console.log(headers)
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // url format
        if ((/|/).test(path)) {
            path = path.split('|').join('/');
        }

        return axios({
                url: `${url}/${path}`,
                method: method,
                params: query,
                data: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json",
                    ...headers
                }
            }).then(res => {
                return res.data;
            })
            .catch(err => {
                throw new NotFoundException(err.toString())
            });

    }


}
