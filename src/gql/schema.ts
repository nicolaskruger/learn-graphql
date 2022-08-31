import {buildSchema} from 'graphql';
import {QUERY} from './query';

const schema = buildSchema(QUERY);

export {schema};
