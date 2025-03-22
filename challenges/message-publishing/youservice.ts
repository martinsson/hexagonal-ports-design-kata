import {MessagePublisherLibrary} from "./api";

class YourService {
    constructor(private readonly messagePublisher: MessagePublisherLibrary) {

    }

    doSomething(arg1: number, arg2: string) {

        //
        // calculations
        //

        this.messagePublisher.publish("pub.some.static.topic", `we got ${arg1} and ${arg2}`);


    }
    
    
}