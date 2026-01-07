const conf ={
    appwriteurl :String(import.meta.env.VITE_APP_APPWRITE_URL),
    prject_id :String(import.meta.env.VITE_APP_WRITE_PROJECT_ID),
    databaseid:String(import.meta.env.APP_WRITE_DATABASE_ID),
    collectionid:String(import.meta.env.APP_WRITE_COLLECTION_ID),
    buCketid:String(import.meta.env.APP_WRITE_BUCKET_ID)

};
export default conf;