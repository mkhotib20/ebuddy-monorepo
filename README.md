# EBuddy Monorepo FE & BE

This project is bootstraped with turborepo template. 

## Environtment Preparation

1. ensure you have installed nodejs 20
2. Create backend `credential.json` files based on `credential.example.json` example in `apps/backend-repo/credential.json`. You can email me at mkhotib20@gmail.com for instruction or further information

```json
{
  "projectId": "",
  "privateKey": "",
  "clientEmail": ""
}

```
3. Create frontend `.env.local` files based on `.env.example` example in `apps/frontend-repo/.env.local`. You can email me at mkhotib20@gmail.com for instruction or further information

```BASH
# Please fill with given value
NEXT_PUBLIC_BASE_APP_URL=http://localhost:3000

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

BASE_API_URL=http://127.0.0.1:5001/your-firebase-project/asia-southeast1/webApi
```

## How to run dev
1. After you've completed `Environtment Preparation` section step 1 - 3, now you can continue. Install dependency by running following command
```bash
npm install
```

2. Now you can run dev by running following command
```bash
npm run dev
```

## How to build
1. After you've completed `Environtment Preparation` section step 1 - 3, now you can continue. Install dependency by running following command
```bash
npm install
```

2. Now you can build the apps
```bash
npm run build
```

3. Now you can start the apps
```bash
npm run start
```
