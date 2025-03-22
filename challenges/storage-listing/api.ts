export interface StorageProviderFromLibrary {
    getFolderByName(folderName: string): string | null | undefined;

    getFolderContent(folderId: string): string[]|null;
}