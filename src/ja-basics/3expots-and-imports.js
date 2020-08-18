/*first file:(import single module)

const person = {
    name: 'max';
}

export default person;

-------------------------------------------------

secont file(import multiple modules)

export const clear =()=>  {...}
export const baseData = 10;

-------------------------------------------------

third file: (importing both above files to this file)

import person from './person.js';
or
import prs from './person.js';

import { clear } from './utility.js';
import { baseData } from './utility.js'

import * from './utility.js';(import everything)

-------------------------------------------------*/