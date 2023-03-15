## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

### Fork this repo

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/ecosystem-automation-challenge.git

## cd into the cloned repo
cd ecosystem-automation-challenge

## install the node_modules
yarn install

## start the local webserver
yarn cy:open
```

The `yarn cy:open` script will start Cypress which hosts the Playboy Party People app.

You should see the Cypress app up and running. We are now ready to run Cypress tests.
