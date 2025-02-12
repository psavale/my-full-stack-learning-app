# connecting to firestore progmatically

```markdown
Steps to generate service account in GCP 
1. Authenticate with gcloud CLI - gcloud auth login
2. set project id - gcloud config set project PROJECT_ID
3. gcloud components update ( optional )
4. gcloud auth application-default login - The gcloud auth application-default login command is used to authenticate your local development environment with Google Cloud and set up Application Default Credentials (ADC). ADC is required for many Google Cloud libraries and SDKs, such as the Firestore, BigQuery, and Cloud Storage libraries, when running locally.
Use ADC for connecting to APIs or services without manually specifying credentials.
After completing the login: Your credentials will be stored in a JSON file, typically located at ~/.config/gcloud/application_default_credentials.json

This method is for local development. In production environments, use service account keys or Workload Identity to securely authenticate applications.

const { Firestore } = require('@google-cloud/firestore'); 
// Create Firestore client using ADC 
const db = new Firestore(); 
async function getDocuments() { 
    const snapshot = await db.collection('users').get(); snapshot.forEach((doc) => { console.log(doc.id, '=>', doc.data()); }); 
    } 
getDocuments();
```
