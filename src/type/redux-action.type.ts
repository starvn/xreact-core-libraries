import { AxiosPromise } from 'axios';

export interface IPayload<T> {
  type: string;
  payload: AxiosPromise<T>;
  meta?: any;
}
export type IPayloadResult<T> = ((dispatch: any, getState?: any) => IPayload<T> | Promise<IPayload<T>>);
export type ICrudGetByIdAction<T> = (id: string | number) => IPayload<T> | ((dispatch: any) => IPayload<T>);
export type ICrudGetAllAction<T> = (filter?: string) => IPayload<T> | ((dispatch: any) => IPayload<T>);
export type ICrudSearchAction<T> = (
  filter?: string,
  page?: number,
  size?: number,
  sort?: string
) => IPayload<T> | ((dispatch: any) => IPayload<T>);
export type ICrudPutAction<T> = (id: string | number, data?: any) => IPayload<T> | IPayloadResult<T>;
export type ICrudDeleteAction<T> = (id?: string | number) => IPayload<T> | IPayloadResult<T>;
