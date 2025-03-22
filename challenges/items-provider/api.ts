class Ship {
    public name: string;
    public home_port: string;
    public weight: string;
    public year_built: string;
    public price: string;
    public storageCapacityWeight: string

}
class Ships {
    ships?: Ship[];
}

class EndPoint {
    public ipAdress: string
    public netmask: string
    public port: number
}

class MobileCustomerResultFromLegacySystem {
    public name: string;
    // is it 4G or 5G
    public dataPlan: string
}

