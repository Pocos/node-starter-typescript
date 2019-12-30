import 'reflect-metadata';
import { TYPES } from './types';
import { ICurlService } from '../components/common/curl.interface';
import { Container } from 'inversify';
import { CurlService } from '../components/common/curl.service';

const container = new Container();

container
    .bind<ICurlService>(TYPES.ICurlService)
    .to(CurlService)
    .inSingletonScope();

export default container;
