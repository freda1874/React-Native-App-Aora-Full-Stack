import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
} from "react-native-appwrite";


export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.freda.aora",
    projectId: "67105d3c00291414e3c6",
    databaseId: "67105fcb0015d7e2910a",
    userCollectionId: "6710605d00371993a8c2",
    videoCollectionId: "67106094002494746909",
    storageId: "6710635f00251b3f81c6"

}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

const storage = new Storage(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email, password, username
        )

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl,
            });
        return newUser;
    } catch (error) {
        throw new Error(error);
    }

}


// Sign In
export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}


export async function getCurrentUser() {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.orderDesc("$createdAt")]
        )

        if (!currentUser) throw Error;
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getAllPosts() {
    try {
        const posts = await databases.listDocuments(appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId
        );
        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getLatestPosts() {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.orderDesc("$createdAt"), Query.limit(7)]
        );
        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export async function searchPosts(query) {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.search("title", query)]
        );
        if (!posts) throw new Error("Something went wrong");
        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getUserPosts(userId) {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.equal("users", userId)]
        );

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export async function signOut() {

    try {
        const session = await account.deleteSession("current");
        return session;

    } catch (error) {
        throw new Error(error);
    }
}

export async function getFilePreview(fileId, type) {
    let fileUrl;
    try {
        if (type === "video") {
            fileUrl = storage.getFilePreview(
                appwriteConfig.storageId,
                fileId
            )
        }
        else if (type === "image") {
            fileUrl = storage.getFilePreview(
                appwriteConfig.storageId,
                fileId, {
                width: 2000,
                height: 2000,

                gravity: 'top',
                quality: 80,
            })
        } else {
            throw new Error("Invalid file type");
        }
        if (!fileUrl) throw Error;
        return fileUrl;
    } catch (error) {
        throw new Error(error);
    }
}

// Upload File
export async function uploadFile(file, type) {
    if (!file) return;
    const asset = {
        name: file.fileName,
        type: file.MimeType,
        size: file.fileSize,
        uri: file.uri,

    };

    try {
        const uploadedFile = await storage.createFile(
            appwriteConfig.storageId,
            ID.unique(),
            asset
        )

        const fileUrl = await getFilePreview(uploadedFile.$id, type);
        return fileUrl;
    } catch (error) {
        throw new Error(error);
    }
}


// Create Video Post
export async function createVideoPost(form) {

    try {
        const [thumbnailUrl, videoUrl] = await Promise.all([
            uploadFile(form.thumbnail, "image"),
            uploadFile(form.video, "video"),
        ])

        const newPost = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            ID.unique(),
            {
                title: form.title,
                thumbnail: thumbnailUrl,
                video: videoUrl,
                prompt: form.prompt,
                users: form.userId,
            }
        );
        return newPost;


    } catch (error) {
        throw new Error(error);
    }
}
