# Tracking [Ask Spurs](https://ask.tottenhamhotspur.com/hc/en-us)

## Intro:

This project injects **GTM** snippet to [Ask Spurs](https://ask.tottenhamhotspur.com/hc/en-us) and enables event tracking as described in the [requirements doc.](https://docs.google.com/document/d/1qcj6a38auf5zmlhagOAE5rQCPUnuHNpD6mpSf5mOTcg/edit?usp=sharing)

It makes use of [Parcel.js](https://parceljs.org) for bundling the js files.

The entry point is `src/index.js` and once built it generates the following files:

- `dist/script.s`
- `dist/script.js.map`.

## Building:

The script can be built for production (default):  
`$> npm run build `

or for development  
`$> NODE_ENV=development npm run build `

The difference being the GTM_ID being used.

## Deploying:

When a new version of the script needs to be deployed these are the steps to follow:

- build the script: `$> npm run build `
- add all the modified files (including `dist/*`) to Git
- push the changes to the GitHub repo

The script gets served through **GitHub Pages** and it is immediatly available at this address:  
`https://cuginoale.github.io/ask_thfc/dist/script.js`

```diff
- THIS IS A TEMPORARY SOLUTION AND IT IS RECOMMENDED TO SERVE THIS FILE FROM A CDN OWNED BY THFC
```

When the script will be moved to a different location please remember to update the file `document_head.hbs` in the Zendesk theme editor:

![Screenshot 2022-03-29 at 13 00 42](https://user-images.githubusercontent.com/1298616/160597766-c7acdbc1-2da3-499d-b6e7-71924b6d1a2e.png)

