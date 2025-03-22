import {StorageProviderFromLibrary} from "./api";

class Yourservice {
    private storageProvider: StorageProviderFromLibrary;

    constructor(storageProvider: StorageProviderFromLibrary) {
        this.storageProvider = storageProvider;
    }

    toto(arg1: any) {
        // .... calculations
        const folderName: string = "someFolder from above calculations ";
        const folderId = this.storageProvider.getFolderByName(folderName);
        if (!folderId) {
            throw new Error("Folder not found: " + folderName);
        }
        const folderContent = this.storageProvider.getFolderContent(folderId);

        // .... more calculations
    }
}