# theOP Cloud Agent

Node/TypeScript Cloud Run service for Gemini multimodal UI navigation.

## Local development

```bash
cd cloud-agent
npm install
export GOOGLE_GENAI_USE_VERTEXAI=true
export GOOGLE_CLOUD_PROJECT="your-project-id"
export GOOGLE_CLOUD_LOCATION="us-central1"
export GEMINI_MODEL="gemini-2.5-flash"
npm run dev
```

Then point the desktop app at it:

```bash
export THEOP_AGENT_URL="http://localhost:8080"
```

## Build

```bash
cd cloud-agent
npm run build
```

## Cloud Run deploy

```bash
gcloud run deploy theop-agent \
  --source . \
  --region us-central1 \
  --project your-project-id
```

If you deploy from the repo root with the Dockerfile instead, build from the root and target `cloud-agent/Dockerfile`.

## Endpoints

- `GET /healthz`
- `POST /assist`

`POST /assist` accepts the shared `AssistRequest` contract from [`/Users/gustav/Documents/Code/theOP/shared/agent.ts`](/Users/gustav/Documents/Code/theOP/shared/agent.ts) and returns the shared `AssistResponse`.
