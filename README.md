# harmony-server

## Installation

```bash
    npm install
```

or

```bash
    yarn add
```

## Config environment variables

-   Create .env file in the root directory

```bash
    PORT_SERVER=your_port
    DATABASE_URL=your_database_url
    CURRENT_API_VERSION=v1
    GMAIL_SERVER=hamorymusic@gmail.com
    PASSWORD_GMAIL_SERVER=uvzdvwesamjfszkr
```

-   Generate token by command

```
    node
    require('crypto').randomBytes(64).toString('hex')
```

## Development mode

```bash
    npm run dev
```

or

```bash
    yarn dev
```

## Database

-   create Stack database in Mongoose Compass

```bash
    npm run insert-db
```

## Build mode

```bash
    npm start
```

or

```bash
    yarn start
```