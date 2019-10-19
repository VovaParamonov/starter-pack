require('./funcs');
import {helloWorld} from "./funcs";

export default class DOM {

    init() {
        helloWorld();
    };

    constructor () {
        this.init();
    }
}